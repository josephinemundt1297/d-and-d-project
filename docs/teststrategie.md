# Teststrategie

## Ziele

Die Tests schützen vorhandene Inhalte, Accessibility-Grundlagen,
Benutzerabläufe und spätere Zugriffsregeln. Die Testtiefe wächst gemeinsam mit
der Anwendung; der aktuelle statische Branch besitzt noch keine automatisierte
Testsuite.

## Teststufen

### Komponenten- und Integrationstests

Vitest und React Testing Library werden nach der React-Migration eingerichtet.
Geprüft werden insbesondere:

- Rendern der wichtigsten Überschriften und Inhaltsbereiche;
- Navigation zu den Bereichen Helden, Welt und Geschichte;
- zugängliche Namen von Links, Schaltflächen und Formularfeldern;
- Lade-, Fehler- und Leerzustände;
- Formulareingaben und Validierung;
- geschützte Routen und rollenabhängige Bedienelemente.

### Service-Tests

Supabase-Zugriffe werden über klar abgegrenzte Services angesprochen. Tests
prüfen Erfolgs-, Fehler- und Berechtigungsfälle, ohne echte Produktionsdaten
zu verwenden.

### Datenbank- und RLS-Tests

Für jede Tabelle werden mindestens folgende Fälle geprüft:

- nicht angemeldeter Zugriff;
- Zugriff auf eigene Daten;
- Zugriff auf fremde private Daten;
- Schreiben mit erlaubter Rolle;
- Schreiben mit nicht erlaubter Rolle.

Ein Test gilt nur dann als erfolgreich, wenn unberechtigter Zugriff tatsächlich
von der Datenbank abgelehnt wird.

### Manuelle Prüfungen

- Tastaturbedienung einschließlich Skip-Link und sichtbarer Fokuszustände;
- Überschriftenreihenfolge und Landmarken;
- Kontraste im hellen und dunklen Theme;
- Layout bei schmalen, mittleren und großen Viewports;
- Bilddarstellung und Alternativtexte;
- Verhalten mit `prefers-reduced-motion`;
- Offline- und Aktualisierungsverhalten des Service Workers.

## Reihenfolge der Prüfungen

1. einzelner betroffener Test;
2. Tests des geänderten Features;
3. TypeScript-Prüfung;
4. Linting;
5. vollständige Tests;
6. Produktions-Build.

Bei einer reinen Dokumentationsänderung ersetzen Markdown-Strukturprüfung,
Linkprüfung und Diff-Kontrolle die Anwendungstests.

## Mindestprüfung für die React-Migration

- Die Anwendung startet mit `npm run dev`.
- `npm run typecheck` ist erfolgreich.
- `npm run build` ist erfolgreich.
- Alle vorhandenen Texte, IDs, Bilder und Links bleiben erhalten.
- Die Browserkonsole enthält keine Laufzeitfehler.
- Die Seite ist vollständig per Tastatur erreichbar.

## Testdaten und Datenschutz

- Tests verwenden erfundene Benutzer- und Kampagnendaten.
- Geheimnisse und Service-Role-Schlüssel werden nicht in Fixtures gespeichert.
- Lokale Umgebungsvariablen werden nicht committed.
- Screenshots und Fehlerprotokolle dürfen keine privaten Kampagneninhalte oder
  Zugangsdaten enthalten.
