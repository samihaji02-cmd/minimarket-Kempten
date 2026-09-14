# Bild-Assets Mini Market Kempten

Drei Ordner, mit klarer Aufgabenteilung:

| Ordner | Inhalt |
|---|---|
| `photos/` | **Wird von der Website eingebunden.** Zugeschnittene, komprimierte Ableitungen. |
| `fonts/` | Selbst gehostete Schriften (woff2, latin-Subset). |
| `store-photos-2026-09/` | Originale der Aufnahmen vom September 2026, je 2000×1333. Quelle für `photos/`. |
| `store-photos/` | Älterer Satz vom September 2026 (1600×1067). Bis auf drei Motive abgelöst. |
| `aktion/` | Produktbild fürs Aktions-Banner. |

## Keine Verbindungen zu Dritten

Die Seite lädt beim Aufruf **nichts** von fremden Servern – kein Google Fonts,
keine eingebettete Karte. Deshalb kommt sie ohne Einwilligungsbanner aus.
Beim Ändern darauf achten, dass das so bleibt:

- Schriften kommen aus `fonts/` über `@font-face` in `styles.css`, nicht über
  einen `<link>` auf fonts.googleapis.com.
- Der Standort ist ein **statisches Bild** (`photos/karte-standort.jpg`), das
  auf Google Maps verlinkt. Kein iframe.

## Zwei Größen pro Bild

Zu jedem Bild in `photos/` gehört eine 700 px breite Fassung nach dem Muster
`name-700.jpg`. Die Seite bindet beide über `srcset` ein: Handys laden die
kleine, Desktops die große. Das drückt das Bildgewicht auf dem Handy von
2,6 MB auf rund 0,8 MB. Wer ein Bild austauscht, muss beide Größen erzeugen –
sonst laden Handys unnötig die große Datei.

Im Sortiment und im Ablauf stehen ausschließlich eigene Aufnahmen vom Automaten.
Einzige Ausnahme ist das Aktions-Banner: dort läuft bewusst ein Hersteller-Produktbild.

## Was die Website aktuell benutzt

| Datei in `photos/` | Quelle | Verwendung |
|---|---|---|
| `aussen-tag.jpg` | 2026-09/02 | Hero |
| `ankommen.jpg` | 2026-09/02 (anderer Ausschnitt) | Ablauf, Schritt 01 |
| `touchscreen.jpg` | 2026-09/10 | Ablauf, Schritt 02 |
| `terminal.jpg` | 2026-09/01 | Bezahlen, Nachweis kontaktlos |
| `terminal-nah.jpg` | 2026-09/01 (enger) | Ablauf, Schritt 03 |
| `bargeld.jpg` | 2026-09/08 | Bezahlen, Nachweis Bargeld |
| `kat-suesses.jpg` | 2026-09/06 | Kategorie Süßes |
| `kat-herzhaft.jpg` | 2026-09/03 | Kategorie Herzhaft |
| `kat-getraenke.jpg` | 2026-09/04 (unterer Ausschnitt) | Kategorie Getränke |
| `kat-energie.jpg` | 2026-09/04 (oberer Ausschnitt) | Kategorie Energie |
| `kat-bier.jpg` | 2026-09/09 | 18+ |
| `aktion-vapes.jpg` | `aktion/aktion-vapes.jpg` | Aktion des Monats |
| `karte-standort.jpg` | OpenStreetMap-Kacheln, Zoom 16 | Standort, verlinkt auf Google Maps |
| `kat-heissgetraenke.jpg` | store-photos/10 | Kategorie Heißgetränke |
| `kat-popcorn.jpg` | store-photos/09 | Kategorie Popcorn |

## Offen

- **Heißgetränke** und **Popcorn** laufen noch auf dem älteren Satz – für beide
  Automaten fehlt eine aktuelle Aufnahme.
- **Tabak & E-Zigaretten** und **Erotikartikel** haben kein eigenes Foto. Der
  Zigarettenausschnitt aus `2026-09/08` war zu unscharf, um ihn zu verwenden.
- Falls das Aktions-Banner auf eine echte Aufnahme umgestellt werden soll:
  `store-photos/12-vape-nahaufnahme.jpg` zeigt dasselbe Fach im Automaten.
- Unbenutzt, weil keine Kategorie dazu passt: `2026-09/05` (Proteinriegel),
  `2026-09/07` (Bonbons + Eiskaffee).

## Kartenbild neu erzeugen

`karte-standort.jpg` ist aus OpenStreetMap-Kacheln zusammengesetzt
(Zoom 16, Mittelpunkt 47.7219237 / 10.3055054), dunkel eingefärbt und mit
Markierung versehen. OSM-Daten stehen unter der ODbL – die Namensnennung
„© OpenStreetMap-Mitwirkende“ steht unter dem Bild und zusätzlich im
Impressum und muss dort bleiben.

## Zuschnitte neu erzeugen

Die Ableitungen in `photos/` sind Crops der Originale, umgerechnet auf 4:3
(Kategorien), 16:10 (Ablauf, Bezahlen) bzw. 3:2 (Hero) und als progressives
JPEG mit Qualität 84–85 gespeichert. Beim Austausch der Fotos denselben
Zuschnitt beibehalten, sonst springen die Kacheln im Raster.
