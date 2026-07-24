# Architektur

## Aktueller technischer Stand

Der Branch `refactor/react-typescript` enthält eine React-Anwendung mit
TypeScript und Vite. `index.html` stellt Metadaten und das Wurzelelement
`#root` bereit. `src/main.tsx` startet React; der bisherige sichtbare
Seiteninhalt liegt zunächst vollständig in `src/App.tsx`.

| Bereich      | Aktueller Stand                                          |
| ------------ | -------------------------------------------------------- |
| Build-System | Vite 7                                                   |
| Markup       | Semantisches JSX in `src/App.tsx`                        |
| Styling      | Tailwind CSS 4 und DaisyUI 5                             |
| Themes       | `garden` als Standard, `abyss` bei bevorzugtem Dark Mode |
| JavaScript   | Service-Worker-Dateien und Offline-Cache vorhanden       |
| React        | React-Einstieg mit `main.tsx` und `App.tsx`              |
| TypeScript   | Strikte Prüfung über `tsconfig.json` und `typecheck`      |
| Routing      | Sprungmarken innerhalb einer Seite                       |
| Backend      | Noch nicht eingerichtet                                  |
| Tests        | Noch nicht eingerichtet                                  |

## Bestehende Projektstruktur

```text
.
├── AGENTS.md
├── README.md
├── docs/
│   ├── architektur.md
│   ├── datenmodell.md
│   ├── entwicklungsplan.md
│   ├── projektziel.md
│   ├── rollenUndRechte.md
│   └── teststrategie.md
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── assets/
│   ├── icons/
│   ├── service-worker.js
│   └── site.webmanifest
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── register-sw.js
│   └── style.css
├── tsconfig.json
└── vite.config.js
```

`src/App.tsx` enthält Navigation, Startbereich, Helden, Welt, Geschichte und
Footer. `src/style.css` bindet Tailwind und DaisyUI ein. Die vorhandene
Service-Worker-Datei verwendet für Navigation, Skripte und Styles eine
Network-first-Strategie und für Bilder und Schriftarten
Stale-while-revalidate.

## Inhaltsinventar

| Bereich        | Erhaltenswerte Inhalte                                           |
| -------------- | ---------------------------------------------------------------- |
| Navigation     | Rinaboth, Helden, Die Welt, Die Geschichte                       |
| Startbereich   | Titel „Das Versiegeln der Tore“ und Einleitung zur Mission       |
| Helden         | Avra, Lahar und Acnologika mit Beschreibung und D&D-Beyond-Link  |
| Welt           | Entstehung Rinaboths, Ära der Sieben Lords, Städte und Herrscher |
| Geschichte     | Fünf historische Abschnitte und visuelle Zeitleiste              |
| Externe Quelle | World-Anvil-Seite zu Rinaboth                                    |
| Footer         | Urheberangaben zu SL Voltikun und Josephine Mundt                |
| Metadaten      | Deutsche SEO-, Open-Graph- und Twitter-Beschreibungen            |

Die vorhandenen Abschnitts-IDs `home`, `heroes`, `world` und `history` sowie
`main-content` und die Überschriften-IDs wurden bei der Migration beibehalten.

## Asset-Inventar

Stand des Inventars: Branch `refactor/react-typescript`.

| Pfad                                      | Zweck                                            |         Abmessungen |        Größe |
| ----------------------------------------- | ------------------------------------------------ | ------------------: | -----------: |
| `public/assets/background.webp`           | Hintergrund des Startbereichs und Social Preview |          1240 × 914 |  95.822 Byte |
| `public/assets/dashboard.webp`            | Vorschau der Website in der README               |          1852 × 954 | 100.766 Byte |
| `public/assets/avra.webp`                 | Charakterbild Avra                               |           544 × 615 |  44.184 Byte |
| `public/assets/lahar.webp`                | Charakterbild Lahar                              |         1000 × 1337 |  67.930 Byte |
| `public/assets/acnologika.webp`           | Charakterbild Acnologika                         |           150 × 150 |  10.382 Byte |
| `public/assets/rinaboth.webp`             | Weltkarte von Rinaboth                           |         2600 × 1500 | 702.554 Byte |
| `public/assets/location.webp`             | Karte des aktuellen Aufenthaltsorts              |          1009 × 666 |  25.216 Byte |
| `public/assets/d20.ico`                   | D20-Logo in der Navigation                       |             64 × 64 |  16.958 Byte |
| `public/icons/android-chrome-192x192.png` | Android-App-Icon                                 |           192 × 192 |  79.781 Byte |
| `public/icons/android-chrome-512x512.png` | Android-App-Icon                                 |           512 × 512 | 498.080 Byte |
| `public/icons/apple-touch-icon.png`       | Apple-Touch-Icon                                 |           180 × 180 |  70.917 Byte |
| `public/icons/favicon-16x16.png`          | Browser-Favicon                                  |             16 × 16 |     968 Byte |
| `public/icons/favicon-32x32.png`          | Browser-Favicon                                  |             32 × 32 |   3.039 Byte |
| `public/icons/favicon.ico`                | Mehrformat-Browser-Favicon                       | 16, 32 und 48 Pixel |  15.406 Byte |

Die Weltkarte ist das größte Inhaltsbild. Vor einer Optimierung muss geprüft
werden, ob feine Kartenbeschriftungen erhalten bleiben.

## Bekannte technische Risiken

- Die Manifest-Einträge verweisen auf Icons in der Web-Wurzel, während die
  Dateien unter `public/icons` liegen.
- Die Pfade in `index.html` wurden an Vites öffentliche Web-Wurzel angepasst;
  die abweichenden Icon-Pfade im Manifest müssen separat geprüft werden.
- Der Service Worker kann während der Entwicklung veraltete Dateien anzeigen;
  `register-sw.js` entfernt deshalb Registrierungen und Caches außerhalb der
  Produktion.
- Komponenten dürfen keine zusätzlichen Layout-Wrapper einführen, die
  vorhandene Flexbox- oder DaisyUI-Strukturen verändern.
- Kontraste beider Themes müssen gemessen und nicht nur visuell bewertet
  werden.

## Geplante Zielstruktur

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── features/
│   ├── auth/
│   ├── campaign/
│   ├── characters/
│   ├── gameMaster/
│   └── logbook/
├── pages/
├── services/
├── types/
├── App.tsx
├── main.tsx
└── style.css
```

Allgemeine UI-Komponenten werden nur dann nach Atomic Design eingeordnet,
wenn sie tatsächlich wiederverwendbar sind. Fachlogik bleibt innerhalb des
jeweiligen Features. Supabase-Zugriffe liegen unter `src/services`, gemeinsame
Typen unter `src/types`.

Die Zielstruktur wird schrittweise angelegt. Leere Ordner werden nicht vorab
erstellt.
