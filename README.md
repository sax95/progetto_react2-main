# Generatore di Consigli

Piccola applicazione React (creata con Vite) per raccogliere consigli e mostrarne uno a caso.

## Funzionalità

- **Aggiungi consigli**: scrivi un consiglio nel campo e premi "Aggiungi". I duplicati vengono ignorati.
- **Elenco**: il pannello mostra i primi 5 consigli della lista.
- **Genera consiglio**: estrae un consiglio casuale e lo mostra in evidenza.
- **Visualizzazioni**: un contatore tiene traccia di quante estrazioni sono state fatte.
- **Elimina**: rimuove dalla lista il consiglio mostrato.

## Concetti React utilizzati

- **Context API** (`AdviceContext`) per condividere stato e funzioni tra i componenti.
- **Hook**: `useState`, `useEffect`, `useContext`, `useRef`.
- **Higher-Order Component** (`withAdviceLimit`) per limitare il numero di consigli mostrati.
- **Componente di layout** (`Layout`) che usa `children`.
- **Form controllato** per l'inserimento dei consigli.

## Struttura del progetto

```
src/
├── App.jsx                    # Componente principale
├── App.css                    # Stili dell'applicazione
├── main.jsx                   # Punto di avvio
├── context/
│   └── AdviceContext.jsx      # Stato condiviso e azioni
└── components/
    ├── Layout.jsx             # Griglia a due colonne
    ├── AdvicePanel.jsx        # Form e lista dei consigli
    ├── AdviceViewer.jsx       # Consiglio estratto, contatore ed eliminazione
    └── withAdviceLimit.jsx    # HOC che limita la lista
```

## Avvio

Serve [Node.js](https://nodejs.org/) installato.

```bash
npm install      # installa le dipendenze
npm run dev      # avvia il server di sviluppo
```

Poi apri nel browser l'indirizzo indicato nel terminale (di solito http://localhost:5173).

## Altri comandi

```bash
npm run build    # crea la versione di produzione nella cartella dist
npm run preview  # mostra in anteprima la build di produzione
npm run lint     # controlla il codice con ESLint
```
