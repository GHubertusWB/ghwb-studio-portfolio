# E-Mail-Konfiguration für Portfolio Website

Die Website verwendet jetzt eine automatische E-Mail-Funktion. Beim Absenden der Kontaktformulare wird automatisch eine E-Mail an office@ghwbstudio.de gesendet.

## SMTP-Einstellungen konfigurieren

Die E-Mail-Konfiguration erfolgt über die `.env.local` Datei im Hauptverzeichnis. Diese Datei wurde bereits erstellt, Sie müssen nur die Werte anpassen:

### Schritt 1: .env.local bearbeiten

Öffnen Sie die Datei `.env.local` und tragen Sie Ihre SMTP-Daten ein:

```
SMTP_HOST=ihr-smtp-server.de
SMTP_PORT=587
SMTP_USER=ihre-email@example.com
SMTP_PASSWORD=ihr-app-passwort
```

### Schritt 2: Provider-spezifische Einstellungen

#### Gmail (empfohlen für Entwicklung)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ihre-gmail@gmail.com
SMTP_PASSWORD=ihr-app-passwort
```

**Wichtig:** Für Gmail benötigen Sie ein App-Passwort:
1. Gehen Sie zu https://myaccount.google.com/security
2. Aktivieren Sie die 2-Faktor-Authentifizierung
3. Generieren Sie ein App-Passwort für "Mail"
4. Verwenden Sie dieses App-Passwort, nicht Ihr normales Passwort

#### 1&1/IONOS
```
SMTP_HOST=smtp.1und1.de
SMTP_PORT=587
SMTP_USER=office@ghwbstudio.de
SMTP_PASSWORD=ihr-email-passwort
```

#### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=ihre-email@outlook.com
SMTP_PASSWORD=ihr-passwort
```

### Schritt 3: Funktionalität testen

1. Starten Sie die Entwicklungsumgebung: `npm run dev`
2. Öffnen Sie eine der Kontaktseiten
3. Füllen Sie das Formular aus und senden Sie es ab
4. Prüfen Sie, ob die E-Mail bei office@ghwbstudio.de ankommt

### Sicherheit

- Die `.env.local` Datei ist bereits in `.gitignore` und wird nicht ins Repository hochgeladen
- Verwenden Sie niemals normale Passwörter in der Konfiguration, sondern immer App-Passwörter
- Bei Produktionsumgebungen (Vercel) müssen Sie die Umgebungsvariablen im Vercel Dashboard konfigurieren

### Vercel Deployment

Für die Live-Website müssen Sie die Umgebungsvariablen in Vercel konfigurieren:

1. Gehen Sie zu Ihrem Vercel Dashboard
2. Wählen Sie Ihr Projekt aus
3. Gehen Sie zu "Settings" > "Environment Variables"
4. Fügen Sie die folgenden Variablen hinzu:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`

### Funktionen

Die E-Mail-Funktion bietet folgende Features:

1. **Automatischer Versand**: E-Mails werden direkt gesendet, ohne dass der Benutzer seinen E-Mail-Client öffnen muss
2. **Betreff-Integration**: Ausgewählte Betreff-Karten werden automatisch in den Betreff eingebaut
3. **Varianten-Unterstützung**: Unterschiedliche Prefixe für Art, UX/UI und Fotografie
4. **HTML-Format**: E-Mails werden sowohl als Text als auch als HTML versendet
5. **Fehlerbehandlung**: Bei Problemen wird eine entsprechende Fehlermeldung angezeigt

Alle Kontaktformulare in der Website verwenden jetzt diese automatische E-Mail-Funktion:
- Haupt-ContactForm (Art-Variante)
- ContactFormLight (Art-Seite)
- ContactFormPhotography (Fotografie-Seite)
- ContactFormUXUI (Design-Seite)
- ContactFormUXUIDark (Design-Seite Dark Mode)
