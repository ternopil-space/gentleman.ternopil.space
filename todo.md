# Agent prompt: add Gentleman articles and translations

Review the project and implement 4 articles for the Gentleman hotel/restaurant website.

## Goals

1. Create these 4 articles in `src/data/articles.json`.
2. Verify current article/list pages can display them correctly.
3. Create an article details page at `article/:id` if it does not exist.
4. Fill article translations into `src/i18n` for all listed language files.
5. Keep the smallest clean update possible. Do not rewrite unrelated code.

## Main data file

Create or update `src/data/articles.json` with this structure:

```json
[
  {
    "slug": "hotel-near-ternopil-comfortable-stay",
    "title": "How to choose a hotel near Ternopil for a comfortable stay",
    "summary": "A practical guide to choosing a convenient hotel near Ternopil, with attention to location, parking, rooms, restaurant service, comfort and safety.",
    "category": "Hotel",
    "publishedAt": "May 2026"
  },
  {
    "slug": "sauna-and-hammam-weekend-relax",
    "title": "Sauna and hammam: the perfect way to relax after a busy week",
    "summary": "Discover why sauna and hammam time is ideal for recovery, calm evenings, private relaxation and a complete hotel-and-restaurant experience.",
    "category": "Spa",
    "publishedAt": "May 2026"
  },
  {
    "slug": "business-trip-hotel-room-essentials",
    "title": "Hotel for a business trip: what every room should include",
    "summary": "A short checklist for business travelers: reliable Wi‑Fi, quiet rooms, air conditioning, guarded parking, safety, comfort and quick access to the city.",
    "category": "Hotel",
    "publishedAt": "May 2026"
  },
  {
    "slug": "romantic-weekend-near-ternopil",
    "title": "Romantic weekend near Ternopil: hotel, dinner and relaxation",
    "summary": "An idea for a calm couple’s getaway near Ternopil with a comfortable room, restaurant dinner, sauna or hammam and a peaceful atmosphere.",
    "category": "Travel",
    "publishedAt": "May 2026"
  }
]
```

## Article details page

If the project already has article routing, reuse its structure. If not, create a route like:

```text
/article/:id
```

The `:id` should match the article `slug`.

The details page should:

- Load an article by slug.
- Show title, summary, category and published date.
- Show a full article body from translation files if supported.
- Handle missing article slug with a clean fallback or redirect.
- Use existing layout, theme variables and project style.
- Keep Angular 21 conventions.
- Use `@if` and `@for`, not `*ngIf` or `*ngFor`.
- Use `input()`, `output()`, `viewChild()` etc. where needed.
- Add `ChangeDetectionStrategy.OnPush` to any modified component if missing.

## Translation files to update

Update these files in `src/i18n`:

```text
cs.json
 de.json
 el.json
 en.json
 es.json
 fr.json
 hu.json
 it.json
 nl.json
 pl.json
 pt.json
 ro.json
 sv.json
 ua.json
```

Use the same key structure for every language. If the project already has an article translation structure, follow it. If not, use this structure:

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "...",
      "summary": "...",
      "category": "...",
      "publishedAt": "May 2026",
      "body": ["Paragraph 1", "Paragraph 2", "Paragraph 3"]
    }
  }
}
```

Merge with existing i18n content. Do not overwrite unrelated translation keys.

## Translations

### `src/i18n/en.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "How to choose a hotel near Ternopil for a comfortable stay",
      "summary": "A practical guide to choosing a convenient hotel near Ternopil, with attention to location, parking, rooms, restaurant service, comfort and safety.",
      "category": "Hotel",
      "publishedAt": "May 2026",
      "body": [
        "When choosing a hotel near Ternopil, location is one of the first things to consider. A good hotel should be easy to reach, comfortable for guests arriving by car and convenient for both city visits and quiet rest outside the busy center.",
        "Comfort also depends on the details: clean rooms, reliable Wi‑Fi, air conditioning, secure parking, helpful service and access to food without needing to leave the complex. A hotel with its own restaurant and bar is especially practical for families, couples and business travelers.",
        "Hotel Gentleman combines accommodation, restaurant service, parking and additional relaxation options in one place, making it a convenient choice for guests who value comfort, calm atmosphere and complete service."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna and hammam: the perfect way to relax after a busy week",
      "summary": "Discover why sauna and hammam time is ideal for recovery, calm evenings, private relaxation and a complete hotel-and-restaurant experience.",
      "category": "Spa",
      "publishedAt": "May 2026",
      "body": [
        "After a busy week, the body and mind need a simple way to slow down. A sauna or hammam can turn an ordinary evening into a full relaxation ritual with warmth, calm and time away from daily tasks.",
        "This type of rest is especially pleasant when it is combined with a restaurant visit or a stay at the hotel. Guests can enjoy a quiet atmosphere, recover after travel or work and spend time with friends, family or a partner.",
        "At Hotel Gentleman, sauna and hammam services complement the hotel and restaurant experience, creating a convenient place for rest, wellness and private relaxation near Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel for a business trip: what every room should include",
      "summary": "A short checklist for business travelers: reliable Wi‑Fi, quiet rooms, air conditioning, guarded parking, safety, comfort and quick access to the city.",
      "category": "Hotel",
      "publishedAt": "May 2026",
      "body": [
        "For business travelers, a hotel room is more than a place to sleep. It should support work, rest and preparation for the next day. Reliable Wi‑Fi, a calm environment, good lighting and climate control are essential.",
        "Security and convenience are just as important. Guarded parking, clear service, a restaurant or bar on the territory and quick access to the city help guests save time and avoid unnecessary stress during a business trip.",
        "Hotel Gentleman offers the key elements business guests usually need: comfortable rooms, internet access, secure parking, restaurant service and a quiet location near Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantic weekend near Ternopil: hotel, dinner and relaxation",
      "summary": "An idea for a calm couple’s getaway near Ternopil with a comfortable room, restaurant dinner, sauna or hammam and a peaceful atmosphere.",
      "category": "Travel",
      "publishedAt": "May 2026",
      "body": [
        "A romantic weekend does not always require a long trip. Sometimes a comfortable hotel near the city, a beautiful dinner and a calm atmosphere are enough to create time just for two.",
        "The best short getaway combines several simple pleasures: a cozy room, restaurant service, a slow evening, sauna or hammam and no rush. This format works well for anniversaries, birthdays or spontaneous weekends.",
        "Hotel Gentleman near Ternopil offers a convenient setting for couples who want to relax, enjoy dinner and spend a peaceful weekend in an elegant hotel-and-restaurant complex."
      ]
    }
  }
}
```

### `src/i18n/ua.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Як обрати готель біля Тернополя для комфортного відпочинку",
      "summary": "Практичний гід з вибору зручного готелю біля Тернополя з увагою до локації, парковки, номерів, ресторану, комфорту та безпеки.",
      "category": "Готель",
      "publishedAt": "Травень 2026",
      "body": [
        "Під час вибору готелю біля Тернополя варто насамперед звернути увагу на локацію. Хороший готель має бути зручним для доїзду, комфортним для гостей на авто та підходити як для поїздок у місто, так і для спокійного відпочинку поза шумним центром.",
        "Комфорт складається з деталей: чисті номери, стабільний Wi‑Fi, кондиціонер, охоронювана парковка, уважний сервіс і можливість поїсти, не залишаючи територію комплексу. Готель із власним рестораном і баром особливо зручний для сімей, пар і ділових гостей.",
        "Готель «Джентльмен» поєднує проживання, ресторанний сервіс, парковку та додаткові можливості для релаксу в одному місці, тому підходить гостям, які цінують комфорт, спокійну атмосферу та повний сервіс."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Сауна та хамам: ідеальний спосіб відпочити після робочого тижня",
      "summary": "Дізнайтесь, чому сауна й хамам підходять для відновлення, спокійного вечора, приватного релаксу та повного готельно-ресторанного досвіду.",
      "category": "Спа",
      "publishedAt": "Травень 2026",
      "body": [
        "Після насиченого робочого тижня тілу й думкам потрібен простий спосіб сповільнитися. Сауна або хамам можуть перетворити звичайний вечір на повноцінний ритуал відпочинку з теплом, тишею та паузою від щоденних справ.",
        "Такий формат особливо приємний у поєднанні з рестораном або проживанням у готелі. Гості можуть насолодитися спокійною атмосферою, відновитися після дороги чи роботи та провести час із друзями, родиною або коханою людиною.",
        "У готелі «Джентльмен» сауна й хамам доповнюють готельно-ресторанний сервіс, створюючи зручне місце для відпочинку, оздоровлення та приватного релаксу біля Тернополя."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Готель для ділової поїздки: що має бути в номері",
      "summary": "Короткий чеклист для ділових гостей: стабільний Wi‑Fi, тихі номери, кондиціонер, охоронювана парковка, безпека, комфорт і швидкий доступ до міста.",
      "category": "Готель",
      "publishedAt": "Травень 2026",
      "body": [
        "Для ділових гостей номер у готелі — це не лише місце для сну. Він має допомагати працювати, відпочивати та готуватися до наступного дня. Стабільний Wi‑Fi, спокійна атмосфера, хороше освітлення та кондиціонер мають велике значення.",
        "Безпека і зручність не менш важливі. Охоронювана парковка, зрозумілий сервіс, ресторан або бар на території та швидкий доступ до міста допомагають економити час і уникати зайвого стресу під час відрядження.",
        "Готель «Джентльмен» пропонує основне, що зазвичай потрібно діловим гостям: комфортні номери, інтернет, охоронювану парковку, ресторанний сервіс і спокійну локацію біля Тернополя."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Романтичний вікенд біля Тернополя: готель, вечеря та релакс",
      "summary": "Ідея спокійного відпочинку для пари біля Тернополя з комфортним номером, вечерею в ресторані, сауною або хамамом і затишною атмосферою.",
      "category": "Відпочинок",
      "publishedAt": "Травень 2026",
      "body": [
        "Романтичний вікенд не завжди потребує далекої подорожі. Іноді достатньо комфортного готелю біля міста, смачної вечері та спокійної атмосфери, щоб створити час лише для двох.",
        "Найкращий короткий відпочинок поєднує кілька простих задоволень: затишний номер, ресторанний сервіс, неспішний вечір, сауну або хамам і відсутність поспіху. Такий формат підходить для річниць, днів народження або спонтанних вихідних.",
        "Готель «Джентльмен» біля Тернополя пропонує зручну атмосферу для пар, які хочуть відпочити, повечеряти та провести спокійний вікенд у стильному готельно-ресторанному комплексі."
      ]
    }
  }
}
```

### `src/i18n/de.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "So wählen Sie ein Hotel bei Ternopil für einen komfortablen Aufenthalt",
      "summary": "Ein praktischer Leitfaden zur Wahl eines bequemen Hotels bei Ternopil mit Fokus auf Lage, Parkplatz, Zimmer, Restaurant, Komfort und Sicherheit.",
      "category": "Hotel",
      "publishedAt": "Mai 2026",
      "body": [
        "Bei der Wahl eines Hotels bei Ternopil ist die Lage einer der wichtigsten Punkte. Ein gutes Hotel sollte leicht erreichbar sein, Gästen mit Auto Komfort bieten und sowohl für Stadtbesuche als auch für ruhige Erholung außerhalb des Zentrums passen.",
        "Komfort entsteht durch Details: saubere Zimmer, zuverlässiges Wi‑Fi, Klimaanlage, bewachter Parkplatz, aufmerksamer Service und die Möglichkeit, direkt im Komplex zu essen. Ein Hotel mit eigenem Restaurant und Bar ist besonders praktisch für Familien, Paare und Geschäftsreisende.",
        "Das Hotel Gentleman verbindet Unterkunft, Restaurantservice, Parkplatz und zusätzliche Entspannungsmöglichkeiten an einem Ort und ist damit eine bequeme Wahl für Gäste, die Komfort, Ruhe und vollständigen Service schätzen."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna und Hammam: die perfekte Entspannung nach einer arbeitsreichen Woche",
      "summary": "Erfahren Sie, warum Sauna und Hammam ideal für Erholung, ruhige Abende, private Entspannung und ein komplettes Hotel- und Restauranterlebnis sind.",
      "category": "Spa",
      "publishedAt": "Mai 2026",
      "body": [
        "Nach einer arbeitsreichen Woche brauchen Körper und Geist eine einfache Möglichkeit, zur Ruhe zu kommen. Sauna oder Hammam können einen gewöhnlichen Abend in ein echtes Entspannungsritual mit Wärme, Ruhe und Abstand vom Alltag verwandeln.",
        "Diese Art der Erholung ist besonders angenehm, wenn sie mit einem Restaurantbesuch oder einem Hotelaufenthalt kombiniert wird. Gäste können eine ruhige Atmosphäre genießen, sich nach Reise oder Arbeit erholen und Zeit mit Freunden, Familie oder dem Partner verbringen.",
        "Im Hotel Gentleman ergänzen Sauna und Hammam das Hotel- und Restauranterlebnis und schaffen einen bequemen Ort für Erholung, Wohlbefinden und private Entspannung bei Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel für Geschäftsreisen: Was jedes Zimmer bieten sollte",
      "summary": "Eine kurze Checkliste für Geschäftsreisende: zuverlässiges Wi‑Fi, ruhige Zimmer, Klimaanlage, bewachter Parkplatz, Sicherheit, Komfort und schnelle Anbindung an die Stadt.",
      "category": "Hotel",
      "publishedAt": "Mai 2026",
      "body": [
        "Für Geschäftsreisende ist ein Hotelzimmer mehr als ein Schlafplatz. Es sollte Arbeit, Erholung und Vorbereitung auf den nächsten Tag unterstützen. Zuverlässiges Wi‑Fi, eine ruhige Umgebung, gutes Licht und Klimatisierung sind entscheidend.",
        "Sicherheit und Bequemlichkeit sind ebenso wichtig. Bewachter Parkplatz, klarer Service, Restaurant oder Bar auf dem Gelände und schneller Zugang zur Stadt helfen Gästen, Zeit zu sparen und Stress während der Geschäftsreise zu vermeiden.",
        "Das Hotel Gentleman bietet wichtige Elemente für Geschäftsreisende: komfortable Zimmer, Internetzugang, sicheren Parkplatz, Restaurantservice und eine ruhige Lage bei Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantisches Wochenende bei Ternopil: Hotel, Abendessen und Entspannung",
      "summary": "Eine Idee für eine ruhige Auszeit zu zweit bei Ternopil mit komfortablem Zimmer, Restaurantabendessen, Sauna oder Hammam und entspannter Atmosphäre.",
      "category": "Reisen",
      "publishedAt": "Mai 2026",
      "body": [
        "Ein romantisches Wochenende erfordert nicht immer eine lange Reise. Manchmal reichen ein komfortables Hotel in Stadtnähe, ein schönes Abendessen und eine ruhige Atmosphäre, um Zeit nur zu zweit zu schaffen.",
        "Die beste kurze Auszeit verbindet einfache Freuden: ein gemütliches Zimmer, Restaurantservice, einen langsamen Abend, Sauna oder Hammam und keinen Zeitdruck. Dieses Format passt gut zu Jahrestagen, Geburtstagen oder spontanen Wochenenden.",
        "Das Hotel Gentleman bei Ternopil bietet Paaren eine passende Umgebung, um zu entspannen, zu Abend zu essen und ein ruhiges Wochenende in einem eleganten Hotel- und Restaurantkomplex zu verbringen."
      ]
    }
  }
}
```

### `src/i18n/pl.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Jak wybrać hotel koło Tarnopola na komfortowy pobyt",
      "summary": "Praktyczny przewodnik po wyborze wygodnego hotelu koło Tarnopola, z uwzględnieniem lokalizacji, parkingu, pokoi, restauracji, komfortu i bezpieczeństwa.",
      "category": "Hotel",
      "publishedAt": "Maj 2026",
      "body": [
        "Przy wyborze hotelu koło Tarnopola lokalizacja jest jedną z najważniejszych kwestii. Dobry hotel powinien być łatwo dostępny, wygodny dla gości przyjeżdżających samochodem i odpowiedni zarówno do wizyt w mieście, jak i spokojnego wypoczynku poza centrum.",
        "Komfort zależy od szczegółów: czystych pokoi, stabilnego Wi‑Fi, klimatyzacji, strzeżonego parkingu, pomocnej obsługi i możliwości zjedzenia posiłku bez opuszczania kompleksu. Hotel z własną restauracją i barem jest szczególnie wygodny dla rodzin, par i gości biznesowych.",
        "Hotel Gentleman łączy zakwaterowanie, obsługę restauracyjną, parking i dodatkowe opcje relaksu w jednym miejscu, dlatego jest wygodnym wyborem dla gości ceniących komfort, spokojną atmosferę i pełną obsługę."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna i hammam: idealny sposób na odpoczynek po pracowitym tygodniu",
      "summary": "Dowiedz się, dlaczego sauna i hammam są idealne do regeneracji, spokojnych wieczorów, prywatnego relaksu i pełnego doświadczenia hotelowo-restauracyjnego.",
      "category": "Spa",
      "publishedAt": "Maj 2026",
      "body": [
        "Po pracowitym tygodniu ciało i umysł potrzebują prostego sposobu na zwolnienie tempa. Sauna lub hammam mogą zmienić zwykły wieczór w rytuał relaksu z ciepłem, spokojem i przerwą od codziennych obowiązków.",
        "Taki wypoczynek jest szczególnie przyjemny w połączeniu z wizytą w restauracji lub pobytem w hotelu. Goście mogą cieszyć się spokojną atmosferą, odpocząć po podróży lub pracy i spędzić czas z przyjaciółmi, rodziną albo partnerem.",
        "W Hotelu Gentleman sauna i hammam uzupełniają doświadczenie hotelowo-restauracyjne, tworząc wygodne miejsce do odpoczynku, regeneracji i prywatnego relaksu koło Tarnopola."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel na podróż służbową: co powinien mieć każdy pokój",
      "summary": "Krótka lista dla podróżujących służbowo: niezawodne Wi‑Fi, ciche pokoje, klimatyzacja, strzeżony parking, bezpieczeństwo, komfort i szybki dostęp do miasta.",
      "category": "Hotel",
      "publishedAt": "Maj 2026",
      "body": [
        "Dla gości biznesowych pokój hotelowy to coś więcej niż miejsce do spania. Powinien wspierać pracę, odpoczynek i przygotowanie do kolejnego dnia. Niezawodne Wi‑Fi, spokojne otoczenie, dobre oświetlenie i klimatyzacja są bardzo ważne.",
        "Bezpieczeństwo i wygoda są równie istotne. Strzeżony parking, jasna obsługa, restauracja lub bar na terenie obiektu i szybki dostęp do miasta pomagają oszczędzać czas i unikać stresu podczas podróży służbowej.",
        "Hotel Gentleman oferuje elementy, których zwykle potrzebują goście biznesowi: komfortowe pokoje, dostęp do internetu, bezpieczny parking, obsługę restauracyjną i spokojną lokalizację koło Tarnopola."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantyczny weekend koło Tarnopola: hotel, kolacja i relaks",
      "summary": "Pomysł na spokojny wyjazd we dwoje koło Tarnopola z komfortowym pokojem, kolacją w restauracji, sauną lub hammamem i przyjemną atmosferą.",
      "category": "Podróże",
      "publishedAt": "Maj 2026",
      "body": [
        "Romantyczny weekend nie zawsze wymaga dalekiej podróży. Czasem wystarczy komfortowy hotel blisko miasta, dobra kolacja i spokojna atmosfera, aby stworzyć czas tylko dla dwojga.",
        "Najlepszy krótki wyjazd łączy kilka prostych przyjemności: przytulny pokój, obsługę restauracyjną, spokojny wieczór, saunę lub hammam i brak pośpiechu. Taki format sprawdza się przy rocznicach, urodzinach lub spontanicznych weekendach.",
        "Hotel Gentleman koło Tarnopola oferuje wygodne miejsce dla par, które chcą odpocząć, zjeść kolację i spędzić spokojny weekend w eleganckim kompleksie hotelowo-restauracyjnym."
      ]
    }
  }
}
```

### `src/i18n/cs.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Jak vybrat hotel u Ternopilu pro pohodlný pobyt",
      "summary": "Praktický průvodce výběrem pohodlného hotelu u Ternopilu se zaměřením na polohu, parkování, pokoje, restauraci, komfort a bezpečnost.",
      "category": "Hotel",
      "publishedAt": "Květen 2026",
      "body": [
        "Při výběru hotelu u Ternopilu je poloha jednou z prvních věcí, které je dobré zvážit. Dobrý hotel by měl být snadno dostupný, pohodlný pro hosty přijíždějící autem a vhodný jak pro návštěvy města, tak pro klidný odpočinek mimo rušné centrum.",
        "Komfort závisí na detailech: čisté pokoje, spolehlivé Wi‑Fi, klimatizace, hlídané parkování, vstřícný servis a možnost najíst se bez opuštění komplexu. Hotel s vlastní restaurací a barem je obzvlášť praktický pro rodiny, páry i obchodní cestující.",
        "Hotel Gentleman spojuje ubytování, restaurační služby, parkování a další možnosti relaxace na jednom místě, takže je pohodlnou volbou pro hosty, kteří oceňují komfort, klidnou atmosféru a kompletní servis."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna a hammam: ideální způsob odpočinku po náročném týdnu",
      "summary": "Zjistěte, proč jsou sauna a hammam ideální pro regeneraci, klidné večery, soukromý relax a kompletní hotelovo-restaurační zážitek.",
      "category": "Spa",
      "publishedAt": "Květen 2026",
      "body": [
        "Po náročném týdnu potřebují tělo i mysl jednoduchý způsob, jak zpomalit. Sauna nebo hammam mohou proměnit obyčejný večer v plnohodnotný relaxační rituál s teplem, klidem a odstupem od každodenních povinností.",
        "Tento typ odpočinku je obzvlášť příjemný v kombinaci s návštěvou restaurace nebo pobytem v hotelu. Hosté si mohou užít klidnou atmosféru, zotavit se po cestě či práci a strávit čas s přáteli, rodinou nebo partnerem.",
        "V Hotelu Gentleman sauna a hammam doplňují hotelovo-restaurační zážitek a vytvářejí pohodlné místo pro odpočinek, wellness a soukromou relaxaci u Ternopilu."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel pro služební cestu: co by měl mít každý pokoj",
      "summary": "Krátký seznam pro obchodní cestující: spolehlivé Wi‑Fi, tiché pokoje, klimatizace, hlídané parkování, bezpečnost, komfort a rychlý přístup do města.",
      "category": "Hotel",
      "publishedAt": "Květen 2026",
      "body": [
        "Pro obchodní cestující je hotelový pokoj víc než jen místo na spaní. Měl by podporovat práci, odpočinek i přípravu na další den. Spolehlivé Wi‑Fi, klidné prostředí, dobré osvětlení a klimatizace jsou zásadní.",
        "Bezpečnost a pohodlí jsou stejně důležité. Hlídané parkování, jasný servis, restaurace nebo bar v areálu a rychlý přístup do města pomáhají hostům šetřit čas a vyhnout se zbytečnému stresu během služební cesty.",
        "Hotel Gentleman nabízí klíčové prvky, které obchodní hosté obvykle potřebují: pohodlné pokoje, přístup k internetu, bezpečné parkování, restaurační služby a klidnou polohu u Ternopilu."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantický víkend u Ternopilu: hotel, večeře a relaxace",
      "summary": "Nápad na klidný pobyt ve dvou u Ternopilu s pohodlným pokojem, večeří v restauraci, saunou nebo hammamem a příjemnou atmosférou.",
      "category": "Cestování",
      "publishedAt": "Květen 2026",
      "body": [
        "Romantický víkend nemusí vždy znamenat dlouhou cestu. Někdy stačí pohodlný hotel u města, příjemná večeře a klidná atmosféra, aby vznikl čas jen pro dva.",
        "Nejlepší krátký pobyt spojuje několik jednoduchých radostí: útulný pokoj, restaurační servis, pomalý večer, saunu nebo hammam a žádný spěch. Tento formát se hodí pro výročí, narozeniny i spontánní víkendy.",
        "Hotel Gentleman u Ternopilu nabízí pohodlné prostředí pro páry, které chtějí relaxovat, povečeřet a strávit klidný víkend v elegantním hotelovo-restauračním komplexu."
      ]
    }
  }
}
```

### `src/i18n/es.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Cómo elegir un hotel cerca de Ternopil para una estancia cómoda",
      "summary": "Una guía práctica para elegir un hotel cómodo cerca de Ternopil, teniendo en cuenta ubicación, aparcamiento, habitaciones, restaurante, confort y seguridad.",
      "category": "Hotel",
      "publishedAt": "Mayo 2026",
      "body": [
        "Al elegir un hotel cerca de Ternopil, la ubicación es una de las primeras cosas que conviene considerar. Un buen hotel debe ser fácil de encontrar, cómodo para quienes llegan en coche y adecuado tanto para visitar la ciudad como para descansar fuera del centro concurrido.",
        "La comodidad depende de los detalles: habitaciones limpias, Wi‑Fi fiable, aire acondicionado, aparcamiento vigilado, atención amable y posibilidad de comer sin salir del complejo. Un hotel con restaurante y bar propios es especialmente práctico para familias, parejas y viajeros de negocios.",
        "Hotel Gentleman combina alojamiento, servicio de restaurante, aparcamiento y opciones adicionales de relajación en un solo lugar, por lo que es una opción conveniente para quienes valoran el confort, la tranquilidad y un servicio completo."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna y hammam: la forma perfecta de relajarse después de una semana intensa",
      "summary": "Descubre por qué la sauna y el hammam son ideales para recuperarse, disfrutar de tardes tranquilas, relajarse en privado y completar la experiencia de hotel y restaurante.",
      "category": "Spa",
      "publishedAt": "Mayo 2026",
      "body": [
        "Después de una semana intensa, el cuerpo y la mente necesitan una forma sencilla de bajar el ritmo. Una sauna o un hammam pueden convertir una tarde normal en un verdadero ritual de descanso con calor, calma y distancia de las tareas diarias.",
        "Este tipo de descanso es especialmente agradable cuando se combina con una visita al restaurante o una estancia en el hotel. Los huéspedes pueden disfrutar de una atmósfera tranquila, recuperarse después del viaje o del trabajo y pasar tiempo con amigos, familia o pareja.",
        "En Hotel Gentleman, la sauna y el hammam complementan la experiencia de hotel y restaurante, creando un lugar cómodo para el descanso, el bienestar y la relajación privada cerca de Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel para un viaje de negocios: qué debe incluir cada habitación",
      "summary": "Una breve lista para viajeros de negocios: Wi‑Fi fiable, habitaciones tranquilas, aire acondicionado, aparcamiento vigilado, seguridad, comodidad y acceso rápido a la ciudad.",
      "category": "Hotel",
      "publishedAt": "Mayo 2026",
      "body": [
        "Para los viajeros de negocios, una habitación de hotel es más que un lugar para dormir. Debe ayudar a trabajar, descansar y prepararse para el día siguiente. Wi‑Fi fiable, ambiente tranquilo, buena iluminación y climatización son esenciales.",
        "La seguridad y la comodidad también son importantes. Aparcamiento vigilado, servicio claro, restaurante o bar en el territorio y acceso rápido a la ciudad ayudan a ahorrar tiempo y evitar estrés innecesario durante un viaje de negocios.",
        "Hotel Gentleman ofrece los elementos clave que suelen necesitar los huéspedes de negocios: habitaciones cómodas, acceso a internet, aparcamiento seguro, servicio de restaurante y una ubicación tranquila cerca de Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Fin de semana romántico cerca de Ternopil: hotel, cena y relajación",
      "summary": "Una idea para una escapada tranquila en pareja cerca de Ternopil con habitación cómoda, cena en restaurante, sauna o hammam y una atmósfera agradable.",
      "category": "Viajes",
      "publishedAt": "Mayo 2026",
      "body": [
        "Un fin de semana romántico no siempre requiere un viaje largo. A veces basta con un hotel cómodo cerca de la ciudad, una buena cena y un ambiente tranquilo para crear tiempo solo para dos.",
        "La mejor escapada corta combina varios placeres sencillos: una habitación acogedora, servicio de restaurante, una tarde sin prisas, sauna o hammam y nada de estrés. Este formato funciona bien para aniversarios, cumpleaños o fines de semana espontáneos.",
        "Hotel Gentleman cerca de Ternopil ofrece un entorno conveniente para parejas que desean relajarse, cenar y pasar un fin de semana tranquilo en un elegante complejo hotelero y gastronómico."
      ]
    }
  }
}
```

### `src/i18n/fr.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Comment choisir un hôtel près de Ternopil pour un séjour confortable",
      "summary": "Un guide pratique pour choisir un hôtel confortable près de Ternopil, en tenant compte de l’emplacement, du parking, des chambres, du restaurant, du confort et de la sécurité.",
      "category": "Hôtel",
      "publishedAt": "Mai 2026",
      "body": [
        "Lors du choix d’un hôtel près de Ternopil, l’emplacement est l’un des premiers critères à considérer. Un bon hôtel doit être facile d’accès, pratique pour les clients arrivant en voiture et adapté aussi bien aux visites en ville qu’au repos au calme hors du centre animé.",
        "Le confort dépend des détails : chambres propres, Wi‑Fi fiable, climatisation, parking surveillé, service attentif et possibilité de manger sans quitter le complexe. Un hôtel avec son propre restaurant et bar est particulièrement pratique pour les familles, les couples et les voyageurs d’affaires.",
        "L’Hotel Gentleman réunit hébergement, service de restauration, parking et options de détente supplémentaires au même endroit, ce qui en fait un choix pratique pour les clients qui apprécient le confort, le calme et un service complet."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna et hammam : la façon idéale de se détendre après une semaine chargée",
      "summary": "Découvrez pourquoi le sauna et le hammam sont parfaits pour récupérer, passer des soirées calmes, se détendre en privé et compléter l’expérience hôtel-restaurant.",
      "category": "Spa",
      "publishedAt": "Mai 2026",
      "body": [
        "Après une semaine chargée, le corps et l’esprit ont besoin d’un moyen simple de ralentir. Un sauna ou un hammam peut transformer une soirée ordinaire en véritable rituel de détente, avec chaleur, calme et pause loin des tâches quotidiennes.",
        "Ce type de repos est particulièrement agréable lorsqu’il est associé à un repas au restaurant ou à un séjour à l’hôtel. Les clients peuvent profiter d’une atmosphère paisible, récupérer après un voyage ou le travail et passer du temps avec des amis, la famille ou leur partenaire.",
        "À l’Hotel Gentleman, le sauna et le hammam complètent l’expérience hôtel-restaurant et créent un lieu pratique pour le repos, le bien-être et la détente privée près de Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hôtel pour voyage d’affaires : ce que chaque chambre devrait offrir",
      "summary": "Une courte liste pour les voyageurs d’affaires : Wi‑Fi fiable, chambres calmes, climatisation, parking surveillé, sécurité, confort et accès rapide à la ville.",
      "category": "Hôtel",
      "publishedAt": "Mai 2026",
      "body": [
        "Pour les voyageurs d’affaires, une chambre d’hôtel est plus qu’un endroit où dormir. Elle doit permettre de travailler, de se reposer et de préparer la journée suivante. Un Wi‑Fi fiable, un environnement calme, un bon éclairage et la climatisation sont essentiels.",
        "La sécurité et la commodité sont tout aussi importantes. Un parking surveillé, un service clair, un restaurant ou un bar sur place et un accès rapide à la ville aident les clients à gagner du temps et à éviter le stress pendant un déplacement professionnel.",
        "L’Hotel Gentleman offre les éléments clés dont les clients d’affaires ont généralement besoin : chambres confortables, accès internet, parking sécurisé, service de restauration et emplacement calme près de Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Week-end romantique près de Ternopil : hôtel, dîner et détente",
      "summary": "Une idée d’escapade paisible en couple près de Ternopil avec chambre confortable, dîner au restaurant, sauna ou hammam et atmosphère agréable.",
      "category": "Voyage",
      "publishedAt": "Mai 2026",
      "body": [
        "Un week-end romantique ne demande pas toujours un long voyage. Parfois, un hôtel confortable près de la ville, un beau dîner et une atmosphère calme suffisent pour créer un moment à deux.",
        "La meilleure courte escapade réunit quelques plaisirs simples : une chambre accueillante, un service de restauration, une soirée sans précipitation, un sauna ou un hammam et aucune urgence. Ce format convient aux anniversaires, aux fêtes ou aux week-ends spontanés.",
        "L’Hotel Gentleman près de Ternopil offre un cadre pratique pour les couples qui souhaitent se détendre, dîner et passer un week-end paisible dans un élégant complexe hôtelier et restaurant."
      ]
    }
  }
}
```

### `src/i18n/it.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Come scegliere un hotel vicino a Ternopil per un soggiorno confortevole",
      "summary": "Una guida pratica per scegliere un hotel comodo vicino a Ternopil, con attenzione a posizione, parcheggio, camere, ristorante, comfort e sicurezza.",
      "category": "Hotel",
      "publishedAt": "Maggio 2026",
      "body": [
        "Quando si sceglie un hotel vicino a Ternopil, la posizione è una delle prime cose da valutare. Un buon hotel dovrebbe essere facile da raggiungere, comodo per gli ospiti che arrivano in auto e adatto sia alle visite in città sia al riposo tranquillo fuori dal centro affollato.",
        "Il comfort dipende dai dettagli: camere pulite, Wi‑Fi affidabile, aria condizionata, parcheggio custodito, servizio disponibile e possibilità di mangiare senza lasciare il complesso. Un hotel con ristorante e bar propri è particolarmente pratico per famiglie, coppie e viaggiatori d’affari.",
        "Hotel Gentleman unisce alloggio, servizio ristorante, parcheggio e ulteriori opzioni di relax in un unico luogo, diventando una scelta comoda per gli ospiti che apprezzano comfort, atmosfera tranquilla e servizio completo."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna e hammam: il modo perfetto per rilassarsi dopo una settimana intensa",
      "summary": "Scopri perché sauna e hammam sono ideali per recuperare, trascorrere serate tranquille, rilassarsi in privato e completare l’esperienza hotel-ristorante.",
      "category": "Spa",
      "publishedAt": "Maggio 2026",
      "body": [
        "Dopo una settimana intensa, corpo e mente hanno bisogno di un modo semplice per rallentare. Una sauna o un hammam possono trasformare una serata ordinaria in un vero rituale di relax, con calore, calma e distanza dagli impegni quotidiani.",
        "Questo tipo di riposo è particolarmente piacevole se abbinato a una visita al ristorante o a un soggiorno in hotel. Gli ospiti possono godere di un’atmosfera tranquilla, recuperare dopo il viaggio o il lavoro e passare tempo con amici, famiglia o partner.",
        "All’Hotel Gentleman, sauna e hammam completano l’esperienza hotel-ristorante, creando un luogo comodo per riposo, benessere e relax privato vicino a Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel per un viaggio di lavoro: cosa dovrebbe includere ogni camera",
      "summary": "Una breve lista per viaggiatori d’affari: Wi‑Fi affidabile, camere silenziose, aria condizionata, parcheggio custodito, sicurezza, comfort e rapido accesso alla città.",
      "category": "Hotel",
      "publishedAt": "Maggio 2026",
      "body": [
        "Per chi viaggia per lavoro, una camera d’hotel è più di un posto dove dormire. Dovrebbe aiutare a lavorare, riposare e prepararsi al giorno successivo. Wi‑Fi affidabile, ambiente tranquillo, buona illuminazione e climatizzazione sono essenziali.",
        "Sicurezza e comodità sono altrettanto importanti. Parcheggio custodito, servizio chiaro, ristorante o bar all’interno della struttura e rapido accesso alla città aiutano a risparmiare tempo ed evitare stress durante un viaggio di lavoro.",
        "Hotel Gentleman offre gli elementi chiave di cui gli ospiti business hanno di solito bisogno: camere confortevoli, accesso a internet, parcheggio sicuro, servizio ristorante e una posizione tranquilla vicino a Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Weekend romantico vicino a Ternopil: hotel, cena e relax",
      "summary": "Un’idea per una fuga tranquilla di coppia vicino a Ternopil con camera confortevole, cena al ristorante, sauna o hammam e atmosfera rilassata.",
      "category": "Viaggi",
      "publishedAt": "Maggio 2026",
      "body": [
        "Un weekend romantico non richiede sempre un lungo viaggio. A volte bastano un hotel confortevole vicino alla città, una bella cena e un’atmosfera tranquilla per creare tempo solo per due.",
        "La migliore breve fuga combina piaceri semplici: una camera accogliente, servizio ristorante, una serata lenta, sauna o hammam e nessuna fretta. Questo formato funziona bene per anniversari, compleanni o weekend spontanei.",
        "Hotel Gentleman vicino a Ternopil offre un ambiente comodo per le coppie che vogliono rilassarsi, cenare e trascorrere un weekend sereno in un elegante complesso hotel-ristorante."
      ]
    }
  }
}
```

### `src/i18n/pt.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Como escolher um hotel perto de Ternopil para uma estadia confortável",
      "summary": "Um guia prático para escolher um hotel confortável perto de Ternopil, com atenção à localização, estacionamento, quartos, restaurante, conforto e segurança.",
      "category": "Hotel",
      "publishedAt": "Maio 2026",
      "body": [
        "Ao escolher um hotel perto de Ternopil, a localização é uma das primeiras coisas a considerar. Um bom hotel deve ser fácil de alcançar, confortável para hóspedes que chegam de carro e adequado tanto para visitas à cidade como para descanso tranquilo fora do centro movimentado.",
        "O conforto depende dos detalhes: quartos limpos, Wi‑Fi confiável, ar condicionado, estacionamento vigiado, atendimento prestativo e a possibilidade de comer sem sair do complexo. Um hotel com restaurante e bar próprios é especialmente prático para famílias, casais e viajantes de negócios.",
        "O Hotel Gentleman combina alojamento, serviço de restaurante, estacionamento e opções adicionais de relaxamento num só lugar, tornando-se uma escolha conveniente para hóspedes que valorizam conforto, ambiente calmo e serviço completo."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna e hammam: a forma perfeita de relaxar depois de uma semana intensa",
      "summary": "Descubra por que sauna e hammam são ideais para recuperação, noites tranquilas, relaxamento privado e uma experiência completa de hotel e restaurante.",
      "category": "Spa",
      "publishedAt": "Maio 2026",
      "body": [
        "Depois de uma semana intensa, o corpo e a mente precisam de uma forma simples de desacelerar. Uma sauna ou hammam pode transformar uma noite comum num ritual completo de relaxamento, com calor, calma e distância das tarefas diárias.",
        "Este tipo de descanso é especialmente agradável quando combinado com uma visita ao restaurante ou uma estadia no hotel. Os hóspedes podem desfrutar de um ambiente tranquilo, recuperar depois da viagem ou do trabalho e passar tempo com amigos, família ou parceiro.",
        "No Hotel Gentleman, sauna e hammam complementam a experiência de hotel e restaurante, criando um lugar conveniente para descanso, bem-estar e relaxamento privado perto de Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel para viagem de negócios: o que cada quarto deve incluir",
      "summary": "Uma breve lista para viajantes de negócios: Wi‑Fi confiável, quartos tranquilos, ar condicionado, estacionamento vigiado, segurança, conforto e acesso rápido à cidade.",
      "category": "Hotel",
      "publishedAt": "Maio 2026",
      "body": [
        "Para viajantes de negócios, um quarto de hotel é mais do que um lugar para dormir. Deve apoiar o trabalho, o descanso e a preparação para o dia seguinte. Wi‑Fi confiável, ambiente calmo, boa iluminação e climatização são essenciais.",
        "Segurança e conveniência são igualmente importantes. Estacionamento vigiado, serviço claro, restaurante ou bar no local e acesso rápido à cidade ajudam os hóspedes a poupar tempo e evitar stress desnecessário durante uma viagem de negócios.",
        "O Hotel Gentleman oferece os elementos principais que os hóspedes de negócios normalmente precisam: quartos confortáveis, acesso à internet, estacionamento seguro, serviço de restaurante e uma localização tranquila perto de Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Fim de semana romântico perto de Ternopil: hotel, jantar e relaxamento",
      "summary": "Uma ideia para uma escapadinha tranquila a dois perto de Ternopil, com quarto confortável, jantar no restaurante, sauna ou hammam e ambiente calmo.",
      "category": "Viagem",
      "publishedAt": "Maio 2026",
      "body": [
        "Um fim de semana romântico nem sempre exige uma viagem longa. Às vezes, um hotel confortável perto da cidade, um bom jantar e um ambiente calmo são suficientes para criar tempo só para dois.",
        "A melhor escapadinha curta combina prazeres simples: um quarto acolhedor, serviço de restaurante, uma noite sem pressa, sauna ou hammam e ausência de correria. Este formato funciona bem para aniversários, datas especiais ou fins de semana espontâneos.",
        "O Hotel Gentleman perto de Ternopil oferece um ambiente conveniente para casais que querem relaxar, jantar e passar um fim de semana tranquilo num elegante complexo de hotel e restaurante."
      ]
    }
  }
}
```

### `src/i18n/nl.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Hoe kies je een hotel bij Ternopil voor een comfortabel verblijf",
      "summary": "Een praktische gids voor het kiezen van een comfortabel hotel bij Ternopil, met aandacht voor locatie, parking, kamers, restaurant, comfort en veiligheid.",
      "category": "Hotel",
      "publishedAt": "Mei 2026",
      "body": [
        "Bij het kiezen van een hotel bij Ternopil is de locatie een van de eerste dingen om te bekijken. Een goed hotel moet makkelijk bereikbaar zijn, comfortabel voor gasten die met de auto komen en geschikt voor zowel stadsbezoeken als rustige ontspanning buiten het drukke centrum.",
        "Comfort zit in de details: schone kamers, betrouwbare Wi‑Fi, airconditioning, bewaakte parking, behulpzame service en de mogelijkheid om te eten zonder het complex te verlaten. Een hotel met een eigen restaurant en bar is vooral praktisch voor gezinnen, koppels en zakenreizigers.",
        "Hotel Gentleman combineert verblijf, restaurantservice, parking en extra ontspanningsmogelijkheden op één plek, waardoor het een handige keuze is voor gasten die comfort, rust en complete service waarderen."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Sauna en hammam: de perfecte manier om te ontspannen na een drukke week",
      "summary": "Ontdek waarom sauna en hammam ideaal zijn voor herstel, rustige avonden, privéontspanning en een complete hotel- en restaurantervaring.",
      "category": "Spa",
      "publishedAt": "Mei 2026",
      "body": [
        "Na een drukke week hebben lichaam en geest een eenvoudige manier nodig om te vertragen. Een sauna of hammam kan een gewone avond veranderen in een volledig ontspanningsritueel met warmte, rust en afstand van dagelijkse taken.",
        "Dit type rust is extra aangenaam wanneer het wordt gecombineerd met een restaurantbezoek of hotelverblijf. Gasten kunnen genieten van een rustige sfeer, herstellen na reis of werk en tijd doorbrengen met vrienden, familie of partner.",
        "Bij Hotel Gentleman vullen sauna en hammam de hotel- en restaurantervaring aan en creëren ze een comfortabele plek voor rust, wellness en privéontspanning bij Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel voor een zakenreis: wat elke kamer moet bieden",
      "summary": "Een korte checklist voor zakenreizigers: betrouwbare Wi‑Fi, stille kamers, airconditioning, bewaakte parking, veiligheid, comfort en snelle toegang tot de stad.",
      "category": "Hotel",
      "publishedAt": "Mei 2026",
      "body": [
        "Voor zakenreizigers is een hotelkamer meer dan een plek om te slapen. Ze moet werk, rust en voorbereiding op de volgende dag ondersteunen. Betrouwbare Wi‑Fi, een rustige omgeving, goede verlichting en klimaatregeling zijn essentieel.",
        "Veiligheid en gemak zijn net zo belangrijk. Bewaakte parking, duidelijke service, een restaurant of bar op het terrein en snelle toegang tot de stad helpen gasten tijd te besparen en onnodige stress tijdens een zakenreis te vermijden.",
        "Hotel Gentleman biedt de belangrijkste elementen die zakelijke gasten meestal nodig hebben: comfortabele kamers, internettoegang, veilige parking, restaurantservice en een rustige locatie bij Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantisch weekend bij Ternopil: hotel, diner en ontspanning",
      "summary": "Een idee voor een rustige getaway met z’n tweeën bij Ternopil, met comfortabele kamer, diner in het restaurant, sauna of hammam en een aangename sfeer.",
      "category": "Reizen",
      "publishedAt": "Mei 2026",
      "body": [
        "Een romantisch weekend hoeft niet altijd een lange reis te zijn. Soms zijn een comfortabel hotel bij de stad, een mooi diner en een rustige sfeer genoeg om tijd alleen voor twee te creëren.",
        "De beste korte getaway combineert enkele eenvoudige genoegens: een gezellige kamer, restaurantservice, een rustige avond, sauna of hammam en geen haast. Dit format past goed bij jubilea, verjaardagen of spontane weekends.",
        "Hotel Gentleman bij Ternopil biedt een handige setting voor koppels die willen ontspannen, dineren en een rustig weekend doorbrengen in een elegant hotel- en restaurantcomplex."
      ]
    }
  }
}
```

### `src/i18n/ro.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Cum să alegi un hotel lângă Ternopil pentru un sejur confortabil",
      "summary": "Un ghid practic pentru alegerea unui hotel confortabil lângă Ternopil, cu atenție la locație, parcare, camere, restaurant, confort și siguranță.",
      "category": "Hotel",
      "publishedAt": "Mai 2026",
      "body": [
        "Când alegi un hotel lângă Ternopil, locația este unul dintre primele lucruri de luat în considerare. Un hotel bun trebuie să fie ușor accesibil, confortabil pentru oaspeții care sosesc cu mașina și potrivit atât pentru vizite în oraș, cât și pentru odihnă liniștită în afara centrului aglomerat.",
        "Confortul depinde de detalii: camere curate, Wi‑Fi stabil, aer condiționat, parcare păzită, servicii atente și posibilitatea de a lua masa fără a părăsi complexul. Un hotel cu restaurant și bar propriu este deosebit de practic pentru familii, cupluri și călători de afaceri.",
        "Hotel Gentleman combină cazarea, serviciile de restaurant, parcarea și opțiunile suplimentare de relaxare într-un singur loc, fiind o alegere convenabilă pentru oaspeții care apreciază confortul, atmosfera calmă și serviciile complete."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Saună și hammam: modul perfect de relaxare după o săptămână aglomerată",
      "summary": "Descoperă de ce sauna și hammamul sunt ideale pentru recuperare, seri liniștite, relaxare privată și o experiență completă de hotel și restaurant.",
      "category": "Spa",
      "publishedAt": "Mai 2026",
      "body": [
        "După o săptămână aglomerată, corpul și mintea au nevoie de o modalitate simplă de a încetini ritmul. O saună sau un hammam poate transforma o seară obișnuită într-un ritual complet de relaxare, cu căldură, liniște și pauză de la sarcinile zilnice.",
        "Acest tip de odihnă este deosebit de plăcut atunci când este combinat cu o vizită la restaurant sau cu un sejur la hotel. Oaspeții se pot bucura de o atmosferă liniștită, se pot reface după drum sau muncă și pot petrece timp cu prietenii, familia sau partenerul.",
        "La Hotel Gentleman, sauna și hammamul completează experiența de hotel și restaurant, creând un loc convenabil pentru odihnă, wellness și relaxare privată lângă Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel pentru o călătorie de afaceri: ce ar trebui să includă fiecare cameră",
      "summary": "O scurtă listă pentru călătorii de afaceri: Wi‑Fi stabil, camere liniștite, aer condiționat, parcare păzită, siguranță, confort și acces rapid la oraș.",
      "category": "Hotel",
      "publishedAt": "Mai 2026",
      "body": [
        "Pentru călătorii de afaceri, camera de hotel este mai mult decât un loc de dormit. Ea trebuie să susțină munca, odihna și pregătirea pentru ziua următoare. Wi‑Fi-ul stabil, mediul liniștit, iluminarea bună și climatizarea sunt esențiale.",
        "Siguranța și comoditatea sunt la fel de importante. Parcarea păzită, serviciile clare, restaurantul sau barul din complex și accesul rapid la oraș ajută oaspeții să economisească timp și să evite stresul inutil în timpul unei călătorii de afaceri.",
        "Hotel Gentleman oferă elementele cheie de care oaspeții business au de obicei nevoie: camere confortabile, acces la internet, parcare sigură, servicii de restaurant și o locație liniștită lângă Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Weekend romantic lângă Ternopil: hotel, cină și relaxare",
      "summary": "O idee pentru o escapadă liniștită în doi lângă Ternopil, cu o cameră confortabilă, cină la restaurant, saună sau hammam și o atmosferă plăcută.",
      "category": "Călătorii",
      "publishedAt": "Mai 2026",
      "body": [
        "Un weekend romantic nu necesită întotdeauna o călătorie lungă. Uneori, un hotel confortabil lângă oraș, o cină frumoasă și o atmosferă calmă sunt suficiente pentru a crea timp doar pentru doi.",
        "Cea mai bună escapadă scurtă combină câteva plăceri simple: o cameră primitoare, servicii de restaurant, o seară fără grabă, saună sau hammam și lipsa presiunii timpului. Acest format este potrivit pentru aniversări, zile de naștere sau weekenduri spontane.",
        "Hotel Gentleman lângă Ternopil oferă un cadru convenabil pentru cuplurile care vor să se relaxeze, să ia cina și să petreacă un weekend liniștit într-un complex elegant de hotel și restaurant."
      ]
    }
  }
}
```

### `src/i18n/hu.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Hogyan válasszunk hotelt Ternopil közelében kényelmes pihenéshez",
      "summary": "Gyakorlati útmutató egy kényelmes hotel kiválasztásához Ternopil közelében, figyelve az elhelyezkedésre, parkolásra, szobákra, étteremre, komfortra és biztonságra.",
      "category": "Hotel",
      "publishedAt": "2026. május",
      "body": [
        "Hotel választásakor Ternopil közelében az elhelyezkedés az egyik első szempont. Egy jó hotel legyen könnyen megközelíthető, kényelmes az autóval érkező vendégeknek, és alkalmas mind városi programokra, mind csendes pihenésre a nyüzsgő központon kívül.",
        "A kényelem a részleteken múlik: tiszta szobák, megbízható Wi‑Fi, légkondicionálás, őrzött parkoló, segítőkész kiszolgálás és étkezési lehetőség a komplexum elhagyása nélkül. Saját étteremmel és bárral rendelkező hotel különösen praktikus családoknak, pároknak és üzleti utazóknak.",
        "A Hotel Gentleman egy helyen kínál szállást, éttermi szolgáltatást, parkolást és további relaxációs lehetőségeket, ezért kényelmes választás azoknak, akik értékelik a komfortot, a nyugodt hangulatot és a teljes körű szolgáltatást."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Szauna és hammam: tökéletes pihenés egy mozgalmas hét után",
      "summary": "Tudd meg, miért ideális a szauna és a hammam regenerálódáshoz, nyugodt estékhez, privát pihenéshez és teljes hotel-étterem élményhez.",
      "category": "Spa",
      "publishedAt": "2026. május",
      "body": [
        "Egy mozgalmas hét után a testnek és az elmének egyszerű módra van szüksége a lelassuláshoz. A szauna vagy hammam egy átlagos estét teljes relaxációs rituálévá alakíthat meleggel, nyugalommal és távolsággal a mindennapi feladatoktól.",
        "Ez a pihenési forma különösen kellemes, ha éttermi látogatással vagy hotelszállással párosul. A vendégek nyugodt környezetben kapcsolódhatnak ki, regenerálódhatnak utazás vagy munka után, és időt tölthetnek barátokkal, családdal vagy partnerükkel.",
        "A Hotel Gentlemanben a szauna és a hammam kiegészíti a hotel- és éttermi élményt, kényelmes helyet teremtve pihenésre, wellnessre és privát kikapcsolódásra Ternopil közelében."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotel üzleti útra: mit kell tartalmaznia minden szobának",
      "summary": "Rövid ellenőrzőlista üzleti utazóknak: megbízható Wi‑Fi, csendes szobák, légkondicionálás, őrzött parkoló, biztonság, kényelem és gyors városi elérés.",
      "category": "Hotel",
      "publishedAt": "2026. május",
      "body": [
        "Az üzleti utazók számára a hotelszoba több, mint alvóhely. Támogatnia kell a munkát, a pihenést és a következő napra való felkészülést. A megbízható Wi‑Fi, a csendes környezet, a jó világítás és a klíma alapvető.",
        "A biztonság és a kényelem ugyanilyen fontos. Az őrzött parkoló, az átlátható kiszolgálás, a helyszíni étterem vagy bár és a város gyors elérése segít időt spórolni és elkerülni a felesleges stresszt egy üzleti út során.",
        "A Hotel Gentleman biztosítja azokat az alapvető elemeket, amelyekre az üzleti vendégeknek általában szükségük van: kényelmes szobák, internetelérés, biztonságos parkolás, éttermi szolgáltatás és nyugodt elhelyezkedés Ternopil közelében."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantikus hétvége Ternopil közelében: hotel, vacsora és pihenés",
      "summary": "Ötlet egy nyugodt páros kikapcsolódáshoz Ternopil közelében kényelmes szobával, éttermi vacsorával, szaunával vagy hammammal és kellemes hangulattal.",
      "category": "Utazás",
      "publishedAt": "2026. május",
      "body": [
        "Egy romantikus hétvége nem mindig igényel hosszú utazást. Néha egy kényelmes hotel a város közelében, egy szép vacsora és nyugodt hangulat elég ahhoz, hogy időt teremtsen csak kettőtöknek.",
        "A legjobb rövid kikapcsolódás egyszerű örömöket kapcsol össze: otthonos szobát, éttermi szolgáltatást, lassú estét, szaunát vagy hammamot és kapkodásmentes pihenést. Ez a forma jól működik évfordulókra, születésnapokra vagy spontán hétvégékre.",
        "A Ternopil közelében található Hotel Gentleman kényelmes környezetet kínál pároknak, akik pihenni, vacsorázni és nyugodt hétvégét tölteni szeretnének egy elegáns hotel-étterem komplexumban."
      ]
    }
  }
}
```

### `src/i18n/sv.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Så väljer du hotell nära Ternopil för en bekväm vistelse",
      "summary": "En praktisk guide till att välja ett bekvämt hotell nära Ternopil med fokus på läge, parkering, rum, restaurang, komfort och säkerhet.",
      "category": "Hotell",
      "publishedAt": "Maj 2026",
      "body": [
        "När du väljer hotell nära Ternopil är läget en av de första sakerna att tänka på. Ett bra hotell ska vara lätt att nå, bekvämt för gäster som kommer med bil och passa både för stadsbesök och lugn vila utanför den livliga stadskärnan.",
        "Komfort handlar om detaljer: rena rum, pålitligt Wi‑Fi, luftkonditionering, bevakad parkering, hjälpsam service och möjlighet att äta utan att lämna området. Ett hotell med egen restaurang och bar är särskilt praktiskt för familjer, par och affärsresenärer.",
        "Hotel Gentleman kombinerar boende, restaurangservice, parkering och extra avkopplingsmöjligheter på en plats, vilket gör det till ett bekvämt val för gäster som uppskattar komfort, lugn atmosfär och komplett service."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Bastu och hammam: det perfekta sättet att koppla av efter en hektisk vecka",
      "summary": "Upptäck varför bastu och hammam är idealiska för återhämtning, lugna kvällar, privat avkoppling och en komplett hotell- och restaurangupplevelse.",
      "category": "Spa",
      "publishedAt": "Maj 2026",
      "body": [
        "Efter en hektisk vecka behöver kropp och sinne ett enkelt sätt att varva ner. Bastu eller hammam kan förvandla en vanlig kväll till en fullständig avslappningsritual med värme, lugn och paus från vardagens uppgifter.",
        "Denna typ av vila är särskilt behaglig när den kombineras med ett restaurangbesök eller en hotellvistelse. Gäster kan njuta av en lugn atmosfär, återhämta sig efter resa eller arbete och tillbringa tid med vänner, familj eller partner.",
        "På Hotel Gentleman kompletterar bastu och hammam hotell- och restaurangupplevelsen och skapar en bekväm plats för vila, wellness och privat avkoppling nära Ternopil."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Hotell för affärsresa: vad varje rum bör innehålla",
      "summary": "En kort checklista för affärsresenärer: pålitligt Wi‑Fi, tysta rum, luftkonditionering, bevakad parkering, säkerhet, komfort och snabb tillgång till staden.",
      "category": "Hotell",
      "publishedAt": "Maj 2026",
      "body": [
        "För affärsresenärer är ett hotellrum mer än en plats att sova på. Det ska stödja arbete, vila och förberedelser inför nästa dag. Pålitligt Wi‑Fi, lugn miljö, bra belysning och klimatkontroll är viktiga.",
        "Säkerhet och bekvämlighet är lika viktiga. Bevakad parkering, tydlig service, restaurang eller bar på området och snabb tillgång till staden hjälper gäster att spara tid och undvika onödig stress under en affärsresa.",
        "Hotel Gentleman erbjuder de viktigaste delarna som affärsgäster vanligtvis behöver: bekväma rum, internetåtkomst, säker parkering, restaurangservice och ett lugnt läge nära Ternopil."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Romantisk helg nära Ternopil: hotell, middag och avkoppling",
      "summary": "En idé för en lugn parhelg nära Ternopil med bekvämt rum, restaurangmiddag, bastu eller hammam och en behaglig atmosfär.",
      "category": "Resor",
      "publishedAt": "Maj 2026",
      "body": [
        "En romantisk helg kräver inte alltid en lång resa. Ibland räcker ett bekvämt hotell nära staden, en fin middag och en lugn atmosfär för att skapa tid bara för två.",
        "Den bästa korta utflykten kombinerar några enkla nöjen: ett mysigt rum, restaurangservice, en långsam kväll, bastu eller hammam och ingen stress. Detta passar bra för årsdagar, födelsedagar eller spontana helger.",
        "Hotel Gentleman nära Ternopil erbjuder en bekväm miljö för par som vill koppla av, äta middag och tillbringa en lugn helg i ett elegant hotell- och restaurangkomplex."
      ]
    }
  }
}
```

### `src/i18n/el.json`

```json
{
  "articles": {
    "hotel-near-ternopil-comfortable-stay": {
      "title": "Πώς να επιλέξετε ξενοδοχείο κοντά στο Τερνόπιλ για άνετη διαμονή",
      "summary": "Ένας πρακτικός οδηγός για την επιλογή άνετου ξενοδοχείου κοντά στο Τερνόπιλ, με έμφαση στην τοποθεσία, το πάρκινγκ, τα δωμάτια, το εστιατόριο, την άνεση και την ασφάλεια.",
      "category": "Ξενοδοχείο",
      "publishedAt": "Μάιος 2026",
      "body": [
        "Όταν επιλέγετε ξενοδοχείο κοντά στο Τερνόπιλ, η τοποθεσία είναι ένα από τα πρώτα πράγματα που πρέπει να εξετάσετε. Ένα καλό ξενοδοχείο πρέπει να είναι εύκολα προσβάσιμο, άνετο για επισκέπτες που φτάνουν με αυτοκίνητο και κατάλληλο τόσο για επισκέψεις στην πόλη όσο και για ήρεμη ξεκούραση έξω από το πολυσύχναστο κέντρο.",
        "Η άνεση εξαρτάται από τις λεπτομέρειες: καθαρά δωμάτια, αξιόπιστο Wi‑Fi, κλιματισμός, φυλασσόμενο πάρκινγκ, εξυπηρετικό προσωπικό και δυνατότητα φαγητού χωρίς να φύγετε από το συγκρότημα. Ένα ξενοδοχείο με δικό του εστιατόριο και μπαρ είναι ιδιαίτερα πρακτικό για οικογένειες, ζευγάρια και επαγγελματίες ταξιδιώτες.",
        "Το Hotel Gentleman συνδυάζει διαμονή, εστιατορική εξυπηρέτηση, πάρκινγκ και επιπλέον επιλογές χαλάρωσης σε ένα μέρος, αποτελώντας άνετη επιλογή για επισκέπτες που εκτιμούν την άνεση, την ήρεμη ατμόσφαιρα και την ολοκληρωμένη εξυπηρέτηση."
      ]
    },
    "sauna-and-hammam-weekend-relax": {
      "title": "Σάουνα και χαμάμ: ο ιδανικός τρόπος χαλάρωσης μετά από μια γεμάτη εβδομάδα",
      "summary": "Ανακαλύψτε γιατί η σάουνα και το χαμάμ είναι ιδανικά για αποκατάσταση, ήρεμα βράδια, ιδιωτική χαλάρωση και μια ολοκληρωμένη εμπειρία ξενοδοχείου και εστιατορίου.",
      "category": "Spa",
      "publishedAt": "Μάιος 2026",
      "body": [
        "Μετά από μια γεμάτη εβδομάδα, το σώμα και το μυαλό χρειάζονται έναν απλό τρόπο να χαλαρώσουν. Μια σάουνα ή ένα χαμάμ μπορεί να μετατρέψει ένα συνηθισμένο βράδυ σε ολοκληρωμένο τελετουργικό ξεκούρασης με ζεστασιά, ηρεμία και απόσταση από τις καθημερινές υποχρεώσεις.",
        "Αυτός ο τρόπος ξεκούρασης είναι ιδιαίτερα ευχάριστος όταν συνδυάζεται με επίσκεψη στο εστιατόριο ή διαμονή στο ξενοδοχείο. Οι επισκέπτες μπορούν να απολαύσουν ήρεμη ατμόσφαιρα, να ανακάμψουν μετά από ταξίδι ή εργασία και να περάσουν χρόνο με φίλους, οικογένεια ή σύντροφο.",
        "Στο Hotel Gentleman, η σάουνα και το χαμάμ συμπληρώνουν την εμπειρία ξενοδοχείου και εστιατορίου, δημιουργώντας έναν άνετο χώρο για ξεκούραση, ευεξία και ιδιωτική χαλάρωση κοντά στο Τερνόπιλ."
      ]
    },
    "business-trip-hotel-room-essentials": {
      "title": "Ξενοδοχείο για επαγγελματικό ταξίδι: τι πρέπει να έχει κάθε δωμάτιο",
      "summary": "Μια σύντομη λίστα για επαγγελματίες ταξιδιώτες: αξιόπιστο Wi‑Fi, ήσυχα δωμάτια, κλιματισμός, φυλασσόμενο πάρκινγκ, ασφάλεια, άνεση και γρήγορη πρόσβαση στην πόλη.",
      "category": "Ξενοδοχείο",
      "publishedAt": "Μάιος 2026",
      "body": [
        "Για τους επαγγελματίες ταξιδιώτες, ένα δωμάτιο ξενοδοχείου είναι κάτι περισσότερο από ένα μέρος για ύπνο. Πρέπει να υποστηρίζει την εργασία, την ξεκούραση και την προετοιμασία για την επόμενη ημέρα. Αξιόπιστο Wi‑Fi, ήσυχο περιβάλλον, καλός φωτισμός και κλιματισμός είναι απαραίτητα.",
        "Η ασφάλεια και η ευκολία είναι εξίσου σημαντικές. Φυλασσόμενο πάρκινγκ, σαφής εξυπηρέτηση, εστιατόριο ή μπαρ στον χώρο και γρήγορη πρόσβαση στην πόλη βοηθούν τους επισκέπτες να εξοικονομούν χρόνο και να αποφεύγουν περιττό άγχος κατά τη διάρκεια επαγγελματικού ταξιδιού.",
        "Το Hotel Gentleman προσφέρει τα βασικά στοιχεία που συνήθως χρειάζονται οι επαγγελματίες επισκέπτες: άνετα δωμάτια, πρόσβαση στο διαδίκτυο, ασφαλές πάρκινγκ, εστιατορική εξυπηρέτηση και ήρεμη τοποθεσία κοντά στο Τερνόπιλ."
      ]
    },
    "romantic-weekend-near-ternopil": {
      "title": "Ρομαντικό Σαββατοκύριακο κοντά στο Τερνόπιλ: ξενοδοχείο, δείπνο και χαλάρωση",
      "summary": "Μια ιδέα για ήρεμη απόδραση ζευγαριού κοντά στο Τερνόπιλ με άνετο δωμάτιο, δείπνο σε εστιατόριο, σάουνα ή χαμάμ και ευχάριστη ατμόσφαιρα.",
      "category": "Ταξίδι",
      "publishedAt": "Μάιος 2026",
      "body": [
        "Ένα ρομαντικό Σαββατοκύριακο δεν απαιτεί πάντα μακρινό ταξίδι. Μερικές φορές ένα άνετο ξενοδοχείο κοντά στην πόλη, ένα όμορφο δείπνο και μια ήρεμη ατμόσφαιρα αρκούν για να δημιουργηθεί χρόνος μόνο για δύο.",
        "Η καλύτερη σύντομη απόδραση συνδυάζει απλές απολαύσεις: ένα ζεστό δωμάτιο, εστιατορική εξυπηρέτηση, ένα αργό βράδυ, σάουνα ή χαμάμ και καθόλου βιασύνη. Αυτή η επιλογή ταιριάζει σε επετείους, γενέθλια ή αυθόρμητα Σαββατοκύριακα.",
        "Το Hotel Gentleman κοντά στο Τερνόπιλ προσφέρει ένα άνετο περιβάλλον για ζευγάρια που θέλουν να χαλαρώσουν, να δειπνήσουν και να περάσουν ένα ήρεμο Σαββατοκύριακο σε ένα κομψό ξενοδοχειακό και εστιατορικό συγκρότημα."
      ]
    }
  }
}
```

## Remaining language files

For these files, add the same 4 article keys and translate naturally:

- `src/i18n/bg.json` only if it exists in the project
- Any other existing project language file only if already present

Required files from the task are already listed above. Do not create extra languages unless the project already uses them.

## Quality checks

After implementation:

1. Validate all JSON files.
2. Confirm `src/data/articles.json` exists and contains exactly the 4 selected articles unless the project already has other articles that must be preserved.
3. Confirm article listing page displays titles, summaries, categories and dates.
4. Confirm `/article/hotel-near-ternopil-comfortable-stay`, `/article/sauna-and-hammam-weekend-relax`, `/article/business-trip-hotel-room-essentials`, and `/article/romantic-weekend-near-ternopil` work.
5. Confirm language switching shows translated article content.
6. List all changed files and summarize changes.

