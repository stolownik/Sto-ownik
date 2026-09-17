# Stołownik Atlas — niezależny prototyp

Nowa implementacja bez kodu i danych starszego Stołownika. `index.html`, `style.css`, `app.js` tworzą responsywny interfejs. `app.js` pobiera receptury i przypisane fotografie z oficjalnego API TheMealDB. Podaje źródło i nie udaje danych o kaloriach, cenach ani milionach przepisów. Poza siecią widoczna jest nazwa dania startowego z linkiem do źródła, lecz pełna instrukcja wymaga pobrania aktualnego rekordu. Gdy API jest niedostępne, licznik zgłasza błąd zamiast udawać liczbę przepisów.

## Źródła i etap użycia

- TheMealDB: https://www.themealdb.com/api.php ; warunki https://www.themealdb.com/terms_of_use.php . Użyty klucz `1` jest kluczem deweloperskim. Przed produkcyjnym użyciem publicznym i komercyjnym potrzebna jest odpowiednia umowa i klucz.
- WHO: https://www.who.int/initiatives/behealthy/physical-activity . Trening jest ogólnym szablonem dla dorosłych.
- Open Food Facts: https://openfoodfacts.github.io/openfoodfacts-server/api/ — potencjalne źródło produktów, obecnie bez integracji. Dokumentacja podaje ODbL dla bazy, CC BY-SA dla zdjęć, limit 10 zapytań wyszukiwania/min/IP i brak gwarancji kompletności; przed użyciem danych na dużą skalę wymagany jest eksport i zgodność licencyjna.
- FSA: https://www.gov.uk/government/publications/food-allergy-and-intolerance-advice-for-consumers — punkt odniesienia dla ostrożnych komunikatów o alergenach.
- Nie użyto RecipeNLG; jego opublikowane warunki ograniczają zastosowanie do badań i edukacji niekomercyjnej.

## Jakość kart i pochodzenie

Każda publiczna karta ma widoczny odnośnik do źródła tekstu i fotografii. Szczegóły licencjonowanych rekordów pokazują autora, licencję i URL potwierdzenia praw. Fotografie TheMealDB są wyświetlane zgodnie z warunkami API z podpisem dostawcy. Atlas nie obiecuje, że dostawca dostarcza 100 000 rekordów, dokładne porcje, wartości odżywcze lub alergeny.

Sekcje kosztów, żywienia i alergenów pokazują **brak danych**, jeśli źródło ich nie podało. Import obsługuje opcjonalnie `nutrition` (kcal, proteinG, fatG, carbsG na porcję źródłową, sourceUrl), `allergens` (items, sourceUrl) i `costEstimate` (amount, currency, market, checkedAt, servings, sourceUrl). Każde z tych pól wymaga własnego źródła HTTPS; alergeny nie oznaczają bezpieczeństwa dla osoby uczulonej. Koszt jest datowanym szacunkiem, bez ofert sklepów. Przy zmianie liczby porcji wartości odżywcze nadal odnoszą się do oryginalnej porcji i są tak podpisane.

Katalog składników ładuje rzeczywiste nazwy z TheMealDB oraz aktualnych przepisów. Można wyszukać składnik, przejść do jego receptur i dodać go do spiżarni. Licznik pokazuje tylko nazwy faktycznie załadowane. Nie jest to milion niezależnie zweryfikowanych produktów ani pełny katalog marek.

## Import dodatkowego katalogu

`node tools/import-catalog.mjs licensed-recipes.jsonl catalog.json`

Każdy rekord JSONL musi zawierać `id`, `name`, `category`, `area`, `ingredients: [{name, amount}]`, `steps: [string]`, `photoUrl`, `photoSourceUrl`, `sourceUrl`, `sourceName`, `recipeLicense`, `recipeLicenseUrl`, `photoLicense`, `photoLicenseUrl`, `photoAuthor`, `rightsProofUrl`. Dozwolone deklaracje: CC0, CC BY 4.0, CC BY-SA 4.0 lub `direct permission`. Program sprawdza kompletność, format HTTPS, powtórzenia ID i format opcjonalnych danych o żywieniu, alergenach oraz kosztach. **Nie weryfikuje praw u źródła, autentyczności zdjęcia ani jakości receptury**; wymagana jest kontrola redakcyjna przed opublikowaniem. `catalog.json` jest ładowany automatycznie przez aplikację. Dla większych zbiorów uruchom `node tools/build-shards.mjs catalog.json catalog 400`: tworzy lekki indeks, plik manifestu i partie szczegółów po 400 rekordów. Przeglądarka pobiera szczegóły dopiero po otwarciu konkretnej receptury. Nie dodawaj rekordów z nieustalonymi prawami lub zdjęć niezwiązanych z daniem. Raport realnej liczby i kompletności rekordów: `node tools/audit-catalog.mjs catalog.json`. Dla 30 000+ rekordów produkcja wymaga indeksu wyszukiwania, stronicowanego API, CDN i procesu redakcyjnego zamiast jednego wielkiego pliku.

## Co działa lokalnie

Atlas kuchni i regionów z listy oficjalnego API (sama obecność regionu na liście nie potwierdza przepisu), wyszukiwanie po polsku i angielsku z odmianami dla najczęstszych składników, rzeczywiste sekcje deserów i napojów bezalkoholowych z TheCocktailDB, przegląd A–Z, wyszukiwanie po głównym składniku, paszport odwiedzonych kuchni, trzy historie kulinarnego dziedzictwa z linkami UNESCO, podpowiedź tygodniowego planu z faktycznie pobranego widoku, wyszukiwanie i filtrowanie po oficjalnym API, szczegóły z linkiem do konkretnego dania po publikacji online, zdjęcia powiązane z potrawą, ulubione, plan tygodnia z zachowaniem liczby porcji, zakupy generowane z planu, prywatne przepisy, eksport JSON, szablon treningu i kalkulator kosztów restauracji. Dane prywatne są w `localStorage` konkretnej przeglądarki. Konta, płatności, publiczne recenzje, skanowanie i AI wymagają backendu i nie są przedstawiane jako aktywne.

## Rynki i sklepy

14 początkowych rynków to wybór języka miejsca i waluty własnych wpisów. Linki otwierają ogólne wyszukiwanie produktu lub sklepów na mapie; nie pobierają ofert, nie potwierdzają dostępności i nie są sponsorowane. Pozostałe kraje można wpisać ręcznie jako miejsce wyszukiwania. Dziennik treningowy, budżet i CSV menu również są lokalne. Brak przeliczania walut. Porcje są przeliczane tylko po podaniu liczby porcji w źródłowej recepturze albo przez użytkownika; ilości opisowe i zakresy pozostają bez zmian. Spiżarnia pomija jedynie pasujące nazwy po zaznaczeniu opcji, bez odejmowania ilości. Menu na telefonie jest przewijane poziomo i dostępne z klawiatury. Okno dialogowe przywraca fokus po zamknięciu.

## Aktualny etap

Szczegółowy stan funkcji i dalszą architekturę opisuje `PRODUCT_PLAN.md`. Dodano spiżarnię, prywatne notatki, projekty restauracji, dziennik treningowy, budżet zakupów z ręcznie wpisanymi kosztami, zewnętrzne wyszukiwanie sklepów, 14 rynków, osiem języków częściowej nawigacji (formularze i większość narzędzi pozostają po polsku) oraz eksport menu. Brak sponsorów, płatności i publicznych kont.

Weryfikacja: `node tools/smoke.mjs`, `node tools/test-catalog.mjs`, `node --check app.js`, `node --check tools/import-catalog.mjs`, `node --check tools/build-shards.mjs`. Próbę 30 001 rekordów wykonano na sztucznych danych, które usunięto.

Aplikacja hostowana przez HTTPS rejestruje service worker do cache plików interfejsu. Zewnętrzne przepisy i zdjęcia wymagają sieci; tryb bez sieci nie przedstawia niepobranej instrukcji jako prawdziwej receptury. Jednoplikowy podgląd HTML nie instaluje PWA.

## Publikacja

Strona jest publikowana na istniejącym GitHub Pages `stolownik/Sto-ownik` (`main`) pod https://stolownik.github.io/Sto-ownik/ . W repozytorium główny `index.html` jest jednoplikową kompilacją `node tools/build-standalone.mjs`; nowy service worker pochodzi z `sw-pages.js`. Pozostałe stare skrypty w repo nie są już ładowane przez główną stronę. Nie dodano fikcyjnych 100 000 przepisów ani miliona składników.
