# Datenmodell

## Status

Auf dem aktuellen Branch gibt es noch keine Datenbank und keine
Supabase-Konfiguration. Dieses Dokument beschreibt einen Arbeitsentwurf. Die
öffentliche Datenbankstruktur, Authentifizierungsstrategie und RLS-Regeln
dürfen erst nach ausdrücklicher Freigabe umgesetzt werden.

## Fachliche Objekte

| Objekt | Zweck | Sichtbarkeit |
|---|---|---|
| Benutzerprofil | Anzeigename und kampagnenbezogene Profildaten | Benutzer selbst, teilweise Gruppe |
| Charakter | Name, Beschreibung, Klasse und zugehöriges Bild | Besitzer und freigegebene Gruppenmitglieder |
| Kampagne | Gemeinsamer Rahmen der Spielgruppe | Mitglieder der Kampagne |
| Kampagnenmitglied | Verknüpft Benutzer, Kampagne und Rolle | Mitglieder, Verwaltung durch berechtigte Rolle |
| Logbucheintrag | Persönliche Notizen eines Benutzers | Ausschließlich Besitzer |
| Kampagneninformation | Gemeinsam sichtbare Orte, Ereignisse oder Hinweise | Mitglieder der Kampagne |
| Charakterbild | Datei und Metadaten im Supabase Storage | Gemäß Charakterfreigabe |

## Vorläufige Beziehungen

- Ein Benutzer kann mehrere Charaktere besitzen.
- Ein Benutzer kann Mitglied einer oder mehrerer Kampagnen sein.
- Eine Kampagne hat mehrere Mitglieder.
- Eine Kampagne kann mehrere Charaktere und Kampagneninformationen enthalten.
- Ein Logbucheintrag gehört genau einem Benutzer und optional einer Kampagne
  oder einem Charakter.
- Ein Charakterbild gehört zu einem Charakter und wird von dessen Besitzer
  verwaltet.

## Offene Entscheidungen

Vor einer Datenbankmigration müssen mindestens folgende Fragen beantwortet
werden:

1. Können Benutzer mehreren Kampagnen gleichzeitig angehören?
2. Darf ein Charakter mehreren Benutzern zugeordnet werden?
3. Welche Inhalte darf der Spielleiter im privaten Logbuch sehen?
4. Sind Kampagneninformationen für alle Mitglieder gleich sichtbar?
5. Werden gelöschte Charaktere endgültig gelöscht oder archiviert?
6. Welche Dateitypen und Größen sind für Charakterbilder erlaubt?

## Sicherheitsanforderungen

- Private Logbucheinträge dürfen nur vom Eigentümer gelesen und verändert
  werden.
- Berechtigungen werden in Row Level Security abgebildet und nicht nur in
  React-Komponenten.
- Ein Service-Role-Schlüssel darf niemals im Browser verwendet werden.
- Storage-Pfade müssen Benutzer- oder Charakterzuordnungen eindeutig
  erkennen lassen.
- Jede erreichbare Tabelle benötigt dokumentierte RLS-Regeln und negative
  Testfälle.

## Voraussetzungen für eine Migration

Vor jeder Datenbankänderung werden Tabelle, Spalten, Beziehungen, Rollen,
RLS-Regeln, Testfälle und mögliche Auswirkungen auf vorhandene Daten
dokumentiert. Erst danach wird eine versionierte Supabase-Migration erstellt.
