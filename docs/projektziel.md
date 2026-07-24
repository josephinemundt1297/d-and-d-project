# Projektziel

## Ausgangslage

Rinaboth ist aktuell eine statische, deutschsprachige Informationsseite für
eine private Dungeons-&-Dragons-Kampagne. Die Seite stellt die Helden, die Welt
und die bisherige Geschichte vor. Das vorhandene Design, die Texte und die
Bilder bilden den zu erhaltenden Ausgangsstand.

Der aktuelle Branch verwendet Vite, semantisches HTML, Tailwind CSS und
DaisyUI. React, TypeScript und Supabase sind auf diesem Branch noch nicht
eingerichtet.

## Ziel

Die statische Seite wird schrittweise zu einer privaten Webanwendung
weiterentwickelt. Die Anwendung soll später Folgendes ermöglichen:

- persönliche Benutzerkonten;
- individuelle Charakterprofile;
- private Logbücher;
- gemeinsam sichtbare Kampagneninformationen;
- eine Übersicht für den Spielleiter;
- das Hochladen und Anzeigen eigener Charakterbilder.

Die öffentliche Rinaboth-Seite und ihre vorhandenen Inhalte bleiben während
der Migration erreichbar. Designänderungen sind kein Bestandteil der ersten
Migrationsschritte.

## Qualitätsziele

- Die Anwendung ist auf mobilen und großen Bildschirmen bedienbar.
- Semantische Struktur, Tastaturbedienung und sichtbare Fokuszustände bleiben
  erhalten.
- Private Daten werden nicht nur im Frontend, sondern durch Supabase Row Level
  Security geschützt.
- Änderungen werden in kleinen, nachvollziehbaren Arbeitspaketen umgesetzt.
- Neue technische Konzepte werden verständlich erklärt und geprüft.
- Vorhandene Inhalte und Bilder gehen bei der Migration nicht verloren.

## Umfang

Zum geplanten Umfang gehören:

- React und TypeScript mit Vite;
- React Router;
- Tailwind CSS und DaisyUI;
- Supabase Auth, PostgreSQL und Storage;
- Row Level Security;
- Vitest und React Testing Library;
- deutsche Projekt- und Nutzerdokumentation.

Nicht Teil des ersten Migrationspakets sind ein Redesign, der Austausch
vorhandener Inhalte oder eine endgültige Authentifizierungs- und
Berechtigungsstrategie.

## Erfolgskriterien

Das Projektziel ist erreicht, wenn:

1. die vorhandene öffentliche Seite ohne sichtbaren Inhaltsverlust in React
   läuft;
2. registrierte Benutzer ausschließlich ihre dafür freigegebenen privaten
   Daten lesen und ändern können;
3. gemeinsame Kampagneninformationen für berechtigte Gruppenmitglieder
   verfügbar sind;
4. der Spielleiter die vereinbarten Verwaltungsfunktionen besitzt;
5. Charakterbilder sicher gespeichert und angezeigt werden;
6. zentrale Benutzerabläufe automatisiert getestet sind;
7. Build, TypeScript-Prüfung, Tests und Accessibility-Prüfungen erfolgreich
   sind.
