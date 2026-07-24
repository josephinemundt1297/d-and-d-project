# AGENTS.md

## Projekt

Rinaboth ist eine private Webanwendung für eine gemeinsame Dungeons-&-Dragons-Kampagne.

Die Anwendung ermöglicht:

- persönliche Benutzerkonten;
- individuelle Charakterprofile;
- private Logbücher;
- gemeinsam sichtbare Kampagneninformationen;
- eine Übersicht für den Spielleiter;
- das Hochladen und Anzeigen eigener Charakterbilder.

## Lernziel

Die Projektinhaberin lernt React, TypeScript und Backend-Grundlagen während der Umsetzung.

Der Agent darf deshalb nicht ausschließlich fertige Lösungen liefern.

Bei neuen technischen Konzepten muss er:

1. das Ziel kurz erklären;
2. den betreffenden Code in kleinen Schritten erstellen;
3. wichtige Entscheidungen begründen;
4. einen nachvollziehbaren Test nennen;
5. keine unnötige Abstraktion einführen.

## Sprache

- Dokumentation wird auf Deutsch geschrieben.
- Kommentare werden nur verwendet, wenn der Code nicht selbsterklärend ist.
- Variablen und technische Bezeichner dürfen Englisch verwenden.
- Nutzertexte werden auf Deutsch geschrieben.

## Technologien

Frontend:

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- DaisyUI

Backend:

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security

Tests:

- Vitest
- React Testing Library

Es dürfen keine zusätzlichen Abhängigkeiten ohne vorherige Begründung installiert werden.

## Dateinamen

- Dateien und Ordner grundsätzlich in camelCase.
- React-Komponenten in PascalCase.
- React-Komponenten mit JSX verwenden `.tsx`.
- Reine TypeScript-Dateien verwenden `.ts`.
- Tests verwenden `.test.ts` oder `.test.tsx`.
- Markdown-Dateien verwenden camelCase.
- Keine Leerzeichen oder Unterstriche in Dateinamen.

## Architektur

Allgemeine UI-Komponenten liegen unter:

- `src/components/atoms`
- `src/components/molecules`
- `src/components/organisms`

Fachliche Funktionen liegen unter:

- `src/features/auth`
- `src/features/characters`
- `src/features/campaign`
- `src/features/logbook`
- `src/features/gameMaster`

Seiten liegen unter `src/pages`.

Backend-Zugriffe liegen unter `src/services`.

Gemeinsame Typen liegen unter `src/types`.

Atomic Design wird nur für wiederverwendbare UI verwendet. Seiten, Services, Hooks und Fachlogik werden nicht künstlich als Atome, Moleküle oder Organismen eingeordnet.

## Dokumentation

Alle ausführlichen Dokumentationen liegen unter `docs`.

Mindestens vorhanden sein müssen:

- `docs/projektziel.md`
- `docs/architektur.md`
- `docs/datenmodell.md`
- `docs/rollenUndRechte.md`
- `docs/teststrategie.md`
- `docs/entwicklungsplan.md`

Technische Entscheidungen werden kurz unter `docs/entscheidungen` dokumentiert.

Die README bleibt eine kompakte Einstiegshilfe und dupliziert nicht die vollständige Dokumentation.

## Sicherheit

- Keine geheimen Schlüssel committen.
- `.env` darf nicht versioniert werden.
- Nur öffentliche Supabase-Schlüssel dürfen im Frontend verwendet werden.
- Service-Role-Schlüssel dürfen niemals im Browser verwendet werden.
- Für alle erreichbaren Datenbanktabellen muss Row Level Security geprüft werden.
- Benutzer dürfen private Daten anderer Benutzer nicht lesen oder verändern.
- Sicherheitsregeln dürfen nicht allein in React-Komponenten umgesetzt werden.
- Datenbankänderungen müssen als Migration dokumentiert werden.

## Arbeitsablauf

Vor jeder Änderung:

1. Relevante Dateien lesen.
2. Ist-Zustand und Soll-Zustand formulieren.
3. Betroffene Dateien nennen.
4. Höchstens fünf Umsetzungsschritte planen.
5. Akzeptanzkriterien festlegen.
6. Teststrategie nennen.
7. Noch keinen Code ändern, bis der Plan geprüft wurde.

Während der Umsetzung:

1. Nur ein Arbeitspaket bearbeiten.
2. Kleinste sinnvolle Änderung vornehmen.
3. Vorhandene Inhalte und Bilder erhalten.
4. Keine unbeauftragten Refactorings durchführen.
5. Keine Tests abschwächen oder überspringen.
6. Neue Konzepte verständlich erklären.

Nach der Umsetzung:

1. Relevante Tests ausführen.
2. TypeScript prüfen.
3. Linting prüfen.
4. Bei größeren Änderungen den Build prüfen.
5. Git-Diff auf unbeauftragte Änderungen kontrollieren.
6. Dokumentation aktualisieren.

## Testreihenfolge

1. Einzelner betroffener Test
2. Tests des Features
3. TypeScript-Prüfung
4. Linting
5. vollständige Tests
6. Produktions-Build

Nicht jede kleine Änderung benötigt sofort die vollständige Testsuite.

## Datenbankänderungen

Vor einer Datenbankänderung müssen dokumentiert werden:

- betroffene Tabelle;
- neue oder geänderte Spalten;
- Beziehungen;
- erlaubte Rollen;
- RLS-Regeln;
- erwartete Testfälle;
- mögliche Datenmigration.

## Abschlussbericht

Der Abschlussbericht enthält:

- Ergebnis;
- geänderte Dateien;
- durchgeführte Tests;
- Ergebnis der Tests;
- aktualisierte Dokumentation;
- verbleibende Risiken;
- einen sinnvollen nächsten Schritt.

## Nicht ohne ausdrückliche Freigabe ändern

- Authentifizierungsstrategie
- Rollenmodell
- RLS-Regeln
- Datenbankmigrationen mit Datenverlust
- Deployment-Konfiguration
- Umgebungsvariablen
- öffentliche Datenbankstruktur
- größere neue Abhängigkeiten

## Zusätzliche Informationen

- Commits beim hochladen ins GitHub ausschließlich mit aussagefähigen Anmerkungen
