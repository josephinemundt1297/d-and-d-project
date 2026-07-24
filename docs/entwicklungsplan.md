# Entwicklungsplan

## Ziel des zweiwöchigen Zeitraums

Die vorhandene statische Seite wird schrittweise in eine stabile
React-TypeScript-Grundlage überführt. Bestehende Inhalte und das sichtbare
Design bleiben erhalten. Supabase wird nur vorbereitet, wenn Datenmodell,
Rollen und Sicherheitsanforderungen vorher geprüft und freigegeben wurden.

## Tag 1: Bestand und Arbeitsgrundlage

- [x] Arbeitsbranch `refactor/react-typescript` erstellen und veröffentlichen.
- [x] Statischen Ausgangsstand durch Branch und Commit-Historie sichern.
- [x] Projektstruktur und aktuellen technischen Zustand dokumentieren.
- [x] Inhalte, Bilder, Icons und externe Quellen inventarisieren.
- [x] `AGENTS.md` mit Projekt- und Arbeitsregeln bereitstellen.
- [x] Deutsche Grunddokumentation anlegen und mit Ausgangsinhalten füllen.

### Akzeptanzkriterien für Tag 1

- Der Arbeitsbranch existiert auf GitHub.
- Keine Anwendungscodedatei wurde für die Dokumentationsarbeit verändert.
- Alle sechs in `AGENTS.md` geforderten Dokumente enthalten verwertbare
  Ausgangsinformationen.
- `docs/architektur.md` enthält Struktur-, Inhalts- und Asset-Inventar.
- Zielzustände sind eindeutig von bereits implementierten Funktionen
  getrennt.

## Tage 2 bis 3: React- und TypeScript-Grundlage

1. React, React DOM, TypeScript und benötigte Typdefinitionen begründet
   installieren.
2. TypeScript-Konfiguration und React-Einstiegspunkt anlegen.
3. Bestehende Seite ohne sichtbare Designänderung in React rendern.
4. TypeScript-Prüfung und Produktions-Build ausführen.
5. Texte, IDs, Bilder und Links mit dem Ausgangsstand vergleichen.

## Tage 4 bis 5: Komponenten und Inhalte

- `App.tsx` und eine erste Seitenschicht anlegen.
- Navigation, Inhaltsbereiche und Footer schrittweise trennen.
- Wiederkehrende Inhaltsdaten typisieren.
- Nur tatsächlich wiederverwendbare UI nach Atomic Design einordnen.
- Komponenten mit React Testing Library absichern.

## Tage 6 bis 7: Routing und Accessibility

- React Router einrichten.
- Öffentliche Startseite und Platzhalter für geschützte Bereiche definieren.
- Fokusführung, mobile Navigation und Sprungziele prüfen.
- Kontraste in beiden DaisyUI-Themes messen.
- Regressionstests für zentrale öffentliche Inhalte ergänzen.

## Tage 8 bis 9: Supabase-Vorbereitung

- Offene Fragen aus Datenmodell und Rollenmodell klären.
- Tabellen, Beziehungen und Storage-Struktur entwerfen.
- RLS-Regeln und negative Sicherheitstests spezifizieren.
- Umgebungsvariablen und `.env`-Ausschlüsse planen.

Authentifizierungsstrategie, Rollenmodell, RLS-Regeln und öffentliche
Datenbankstruktur werden erst nach ausdrücklicher Freigabe umgesetzt.

## Tag 10: Stabilisierung

- fokussierte Tests und vollständige Tests ausführen;
- TypeScript, Linting und Produktions-Build prüfen;
- Layout und Tastaturbedienung manuell prüfen;
- Git-Diff auf unbeauftragte Änderungen kontrollieren;
- Dokumentation auf den tatsächlich erreichten Stand aktualisieren;
- verbleibende Risiken und nächste Arbeitspakete festhalten.

## Definition of Done für jedes Arbeitspaket

- Ist- und Soll-Zustand sind beschrieben.
- Es wurden höchstens fünf Umsetzungsschritte geplant.
- Akzeptanzkriterien und Teststrategie sind festgelegt.
- Nur die angekündigten Dateien wurden verändert.
- Relevante Prüfungen sind erfolgreich.
- Der Diff enthält keine unbeauftragten Änderungen.
- Dokumentation und Abschlussbericht stimmen mit dem Ergebnis überein.
