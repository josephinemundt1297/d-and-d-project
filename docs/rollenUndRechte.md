# Rollen und Rechte

## Status

Das Rollenmodell ist noch nicht implementiert. Die folgende Übersicht ist ein
fachlicher Entwurf und keine Freigabe für Authentifizierung oder RLS-Regeln.

## Vorgesehene Rollen

| Rolle | Beschreibung |
|---|---|
| Gast | Nicht angemeldete Person auf der öffentlichen Rinaboth-Seite |
| Spieler | Angemeldetes Mitglied einer Kampagne |
| Spielleiter | Kampagnenmitglied mit zusätzlichen Verwaltungsaufgaben |

Eine globale Administratorrolle ist derzeit nicht vorgesehen. Falls sie
später benötigt wird, muss ihr Zweck getrennt dokumentiert und freigegeben
werden.

## Vorläufige Rechtematrix

| Aktion | Gast | Spieler | Spielleiter |
|---|:---:|:---:|:---:|
| Öffentliche Rinaboth-Inhalte lesen | Ja | Ja | Ja |
| Eigenes Profil lesen und bearbeiten | Nein | Ja | Ja |
| Eigenen Charakter verwalten | Nein | Ja | Ja |
| Eigenes Charakterbild verwalten | Nein | Ja | Ja |
| Freigegebene Kampagneninformationen lesen | Nein | Ja | Ja |
| Eigenes privates Logbuch verwalten | Nein | Ja | Ja |
| Private Logbücher anderer lesen | Nein | Nein | Nein |
| Gemeinsame Kampagneninformationen verwalten | Nein | Nein | Vorgesehen |
| Kampagnenmitglieder verwalten | Nein | Nein | Noch zu entscheiden |

## Sicherheitsprinzipien

- Der angemeldete Benutzer wird über Supabase Auth bestimmt.
- Rollen werden nicht aus frei änderbaren Browserdaten abgeleitet.
- Jede Abfrage wird zusätzlich durch Row Level Security geschützt.
- Das Ausblenden einer Schaltfläche ersetzt keine Berechtigungsprüfung.
- Ein Benutzer darf private Daten eines anderen Benutzers weder lesen noch
  verändern.
- Änderungen am Rollenmodell und an RLS-Regeln benötigen eine ausdrückliche
  Freigabe.

## Zu klärende Fragen

1. Wer darf einen Benutzer zum Spielleiter ernennen?
2. Darf ein Spielleiter Charaktere anderer Spieler bearbeiten oder nur lesen?
3. Welche Kampagneninformationen sind ausschließlich für den Spielleiter
   sichtbar?
4. Wie wird der Zugriff nach dem Verlassen einer Kampagne entzogen?
5. Welche Daten bleiben nach dem Löschen eines Benutzerkontos erhalten?
