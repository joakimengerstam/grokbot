# Grok Bot

En statisk webbplats för grokbot.se om att sätta upp Grok Bots (Cursor/xAI desktop-assistenter).

## Lokal utveckling

### Krav

- Node.js 18+ och npm

### Installera och kör lokalt

```bash
# Installera dependencies
npm install

# Starta dev-server
npm run dev
```

Dev-servern körs på `http://localhost:4321`

### Bygg för produktion

```bash
npm run build
```

Bygger siten till `dist/` mappen.

## Deploy till GitHub Pages

### Steg 1: Aktivera GitHub Pages

1. Gå till ditt GitHub-repo → Settings → Pages
2. Under "Build and deployment":
   - Source: `GitHub Actions`
3. GitHub Actions workflow (`.github/workflows/deploy.yml`) kommer automatiskt deploya när du pushar till `main`

### Steg 2: Sätt upp custom domain (grokbot.se)

#### I GitHub:

1. Gå till repo Settings → Pages
2. Under "Custom domain", skriv: `grokbot.se`
3. Klicka Save
4. Vänta några minuter, sedan bocka i "Enforce HTTPS" när den blir tillgänglig

#### Hos one.com (DNS-inställningar):

Du behöver lägga till följande DNS-records i one.com's kontrollpanel för grokbot.se:

**Variant A: CNAME (rekommenderat för GitHub Pages)**

```
Type: CNAME
Name: @ (eller lämna tomt för root-domänen)
Value: <ditt-github-username>.github.io
TTL: 3600 (eller default)
```

```
Type: CNAME
Name: www
Value: <ditt-github-username>.github.io
TTL: 3600 (eller default)
```

**OBS:** Ersätt `<ditt-github-username>` med ditt faktiska GitHub-användarnamn.

**Variant B: A-records (alternativ)**

Om CNAME inte fungerar för root-domänen hos one.com, använd A-records istället:

```
Type: A
Name: @ (eller lämna tomt för root-domänen)
Value: 185.199.108.153
TTL: 3600
```

```
Type: A
Name: @ (eller lämna tomt)
Value: 185.199.109.153
TTL: 3600
```

```
Type: A
Name: @ (eller lämna tomt)
Value: 185.199.110.153
TTL: 3600
```

```
Type: A
Name: @ (eller lämna tomt)
Value: 185.199.111.153
TTL: 3600
```

Och för www-subdomänen:

```
Type: CNAME
Name: www
Value: <ditt-github-username>.github.io
TTL: 3600
```

#### Viktigt om MX-records (mail):

Om du har mail-hosting hos one.com för grokbot.se, **radera INTE** dina befintliga MX-records. 
DNS kan ha både A/CNAME (för webben) och MX (för mail) samtidigt. Lämna MX-records orörda.

Exempel på MX-records (om de finns, lämna dem):
```
Type: MX
Name: @ (eller grokbot.se)
Value: mailcluster.one.com (eller liknande)
Priority: 10
```

#### DNS-propagering

DNS-ändringar kan ta några minuter till 48 timmar att spridas globalt. Oftast tar det 15-30 minuter.

Testa med:
```bash
# Kolla DNS
dig grokbot.se
dig www.grokbot.se

# Eller med nslookup
nslookup grokbot.se
```

### Steg 3: Verifiera deployment

När DNS-propagering är klar, besök:
- `https://grokbot.se`
- `https://www.grokbot.se`

Båda ska visa din site med grönt hänglås (HTTPS).

## Projektstruktur

```
/
├── public/
│   ├── CNAME              # Custom domain för GitHub Pages
│   └── favicon.svg        # Site ikon
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Huvudlayout
│   ├── pages/
│   │   ├── index.astro           # Hem
│   │   ├── installning.astro     # Setup-guide
│   │   ├── best-practices.astro  # Best practices
│   │   ├── exempel.astro         # Bot-exempel
│   │   └── om.astro              # Om/disclaimer
│   └── styles/
│       └── global.css     # Global CSS
├── astro.config.mjs       # Astro-config
└── package.json
```

## Teknikstack

- **Astro** - Static site generator
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## Innehåll

Siten innehåller:
- **Hem**: Vad är en Grok Bot och varför sätta upp en
- **Installning**: Steg-för-steg guide från installation till första boten
- **Best Practices**: Hur man skriver tighta personas, väljer triggmetoder, undviker misstag
- **Exempel**: Konkreta bot-idéer (Chief of Staff, Inbox, Sales, SEO, Content, Research, Life Admin)
- **Om/Disclaimer**: Viktig info om att projektet är inofficiellt och ej affilierat med xAI/Cursor

## Disclaimer

Detta är ett inofficiellt projekt. Ej affilierat med xAI eller Cursor. 
Grok och Grok Bot är varumärken tillhörande sina respektive ägare.

Skapad av Joakim Engerstam / [roore.se](https://roore.se)

## Licens

Innehållet på denna site är skapat av Joakim Engerstam. Källkoden (Astro/struktur) är öppen för andras användning.
