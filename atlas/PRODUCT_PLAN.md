# Stołownik Atlas — architektura rozwoju

## Stan tej wersji

Atlas jest nową, niezależną implementacją strony. Działa jako strona statyczna. Katalog online korzysta z oficjalnego API TheMealDB w trybie rozwojowym, ma jedną recepturę startową na wypadek braku sieci i może wczytać własny katalog, jeśli powstanie legalnie pozyskany zbiór. Na telefonie menu pozostaje dostępne; okna dialogowe obsługują Escape, pułapkę fokusu i powrót do poprzedniego przycisku. Link do przepisu z parametrem `recipe` działa na hostingu; jednoplikowy podgląd lokalny nie udostępnia trwałego linku. Zdjęcia internetowe są przypisane do rekordu dania i linkowane do dostawcy. Zawartość katalogu nie jest reklamowana jako 30 000 receptur.

Funkcje lokalne: wyszukiwarka składników z rzeczywiście załadowanej listy, etykiety źródeł pod kartami, jawny brak niezweryfikowanych danych o żywieniu, alergenach i kosztach, wyszukiwarka, filtr kategorii i regionu, paszport kuchni, wyszukiwanie po jednym głównym składniku, szczegóły i tryb gotowania, przeliczanie porcji tylko przy znanej liczbie porcji bazowych, prywatne notatki i ulubione, planner tygodnia z ilościami i przejściem do listy zakupów i budżet z własnych kwot, spiżarnia, dziennik treningowy, szablony ruchu, kalkulator food cost, eksport CSV menu, projekt restauracji i eksport danych JSON. Linki sklepowe otwierają wyszukiwanie w zewnętrznych serwisach. Nie ma pozyskanych sponsorów.

Obsługa krajów: 14 wstępnie opisanych rynków z walutą wpisów użytkownika; inne kraje można podać ręcznie w wyszukiwarce sklepów. To nie jest lokalny katalog cen, sklepów ani tłumaczenie zawartości dla każdego kraju. Osiem języków ma przetłumaczoną nawigację i część głównych opisów; wiele narzędzi jest jeszcze po polsku, a receptury pozostają w języku źródła.

## Dane i 30 000+ receptur

1. Wymagana jest umowa lub udokumentowana licencja osobno dla tekstu, fotografii i ewentualnych filmów. Zapisujemy URL źródła, autora zdjęcia, licencję i URL potwierdzający prawa. Nie kopiujemy automatycznie z przypadkowych stron.
2. Importer `tools/import-catalog.mjs` sprawdza wymagane pola, kompletność, poprawny HTTPS, powtórzenia ID i źródła każdej opcjonalnej liczby lub deklaracji alergenowej. Nie jest opinią prawną ani redakcyjnym zatwierdzeniem praw.
3. Redaktor sprawdza zgodność zdjęcia z daniem, wykonalność receptury, szczegóły ilości i ryzyka związane z alergenami. Nie dopisujemy czasu, kalorii lub liczby porcji bez źródła.
4. `tools/build-shards.mjs` dzieli zatwierdzone dane na lekki indeks oraz partie szczegółów, ładowane dopiero po otwarciu przepisu. Próba techniczna na 30 001 **sztucznych rekordach testowych** utworzyła 76 partii po maksymalnie 400. Rekordy testowe nie są częścią produktu.
5. Przed publicznym uruchomieniem wielkiego katalogu potrzebne są monitoring źródeł, korekty błędów, wycofanie rekordów, aktualizacja zdjęć, indeks wyszukiwania i dostarczanie plików przez CDN albo stronicowane API. Dla miliona dań używamy bazy i wyszukiwarki serwerowej; nie przesyłamy całego indeksu do telefonu.

## Konta, społeczność i płatności

Dla logowania potrzebny jest serwer, bezpieczna tożsamość użytkownika, sesje, odzyskiwanie dostępu, kontrola dostępu do prywatnych danych i kopie zapasowe. Dane z `localStorage` można obecnie wyeksportować, ale nie synchronizują się między urządzeniami.

Publiczne przepisy i oceny wymagają profili, kolejki moderacji, zgłoszeń naruszeń, historii zmian, weryfikacji zdjęć i sposobu usuwania treści. Oceny prywatne nie mogą być przedstawiane jako głosy społeczności. Płatności wymagają operatora, rozliczeń, obsługi anulowania, zwrotów i bezpiecznego dostępu do funkcji premium. Nie zbieramy numerów kart w statycznej stronie.

## Wersje międzynarodowe

Tłumaczenie interfejsu obejmie wszystkie ekrany, błędy, formularze, dostępność i dokumenty. Receptury mają własny język oryginału i status tłumaczenia; instrukcje przygotowania powinny przejść weryfikację człowieka. Kraj wpływa na dostępność składników, jednostki, sklepy, walutę, sezonowość i regulacje, więc nie należy utożsamiać wyboru języka z rynkiem. Wybór kraju nie przelicza obecnie cen.

## Sklepy i sponsorzy

Wyszukiwanie zewnętrzne nie jest integracją ze sklepem. Realne oferty potrzebują zgody, API/umowy, czasu odświeżenia, informacji o kraju, cenie i dostępności. Partnerstwa potrzebują podpisanych zasad użycia marki, okresu emisji, oznaczenia reklamy i niezależności redakcyjnej receptur. Atlas nie ma dziś sponsorów ani płatnych linków partnerskich.

## AI i skanery

Skaner zdjęcia potrawy może podsunąć kandydatów; nie powinien deklarować pewnych składników, alergenów ani makroskładników na podstawie samego obrazu. Skaner kodu kreskowego wymaga źródła danych o produkcie z aktualizacją i atrybucją. Generator przepisu musi wyraźnie oznaczać nową propozycję, pozwalać na korektę przez człowieka i nie podszywać się pod źródłową recepturę. Dla działań kosztowych potrzebny jest limit użycia i pomiar jakości.

## Kryteria publikacji

- Otwieranie strony na telefonie, klawiaturze i czytniku ekranu, praca bez uszkodzonych zdjęć.
- Prawdziwe źródła i prawa do rekordów oraz fotografii; licznik oparty na faktycznie opublikowanych rekordach.
- Polityka prywatności i procedury obsługi danych dla funkcji kont i płatności.
- Testy importu, wyszukiwania, paginacji, logowania, płatności i moderacji odpowiednie do wdrożonych funkcji.
- Mierzenie szybkości, dostępności, błędów API i kosztów utrzymania po uruchomieniu.

## Źródła użyte na tym etapie

- TheMealDB API i warunki: https://www.themealdb.com/api.php , https://www.themealdb.com/terms_of_use.php
- UNESCO — tradycje kulinarne: https://ich.unesco.org/en/lists
- WHO — aktywność fizyczna: https://www.who.int/initiatives/behealthy/physical-activity
- ACSM — trening oporowy: https://acsm.org/resistance-training-guidelines-update-2026/
- Google Maps URLs — wyszukiwanie miejsc: https://developers.google.com/maps/documentation/urls/get-started

## Zasady danych do następnej skali

Ponad 100 000 przepisów i milion produktów wymagają osobnych, rzeczywistych zbiorów z prawem ponownego użycia oraz pełnym śladem pochodzenia. Nie są obecnie częścią Atlasu. Duży katalog wymaga wyszukiwarki serwerowej, paginacji, redakcji, polityki korekt i monitorowania licencji. Rejestr kosztów musi zawierać rynek, walutę i dzień sprawdzenia, a ostrzeżenia o alergenach muszą rozróżniać brak danych od potwierdzenia. Open Food Facts może być źródłem produktów po spełnieniu warunków ODbL, przypisania autorstwa i limitów API; samo podlinkowanie źródła nie rozwiązuje obowiązków licencyjnych.
