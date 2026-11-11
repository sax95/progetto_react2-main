import { createContext, useState, useEffect } from "react";

// Contesto React usato per condividere dati e operazioni senza passare props
// manualmente attraverso tutti i componenti intermedi.
export const AdviceContext = createContext();

export function AdviceProvider({ children }) {

    // Stato principale: la lista iniziale viene poi aggiornata con le azioni utente.
    const [advices, setAdvices] = useState([
        "Bevi più acqua",
        "Fai attività fisica",
        "Leggi almeno 10 pagine"
    ]);

    // selectedAdvice è null finché non viene estratto un elemento.
    // views conta tutte le estrazioni, anche quando esce più volte lo stesso consiglio.
    const [selectedAdvice, setSelectedAdvice] = useState(null);
    const [views, setViews] = useState(0);

    // Aggiunge un consiglio alla lista; se è già presente non modifica lo stato.
    const addAdvice = (advice) => {

        // Il controllo evita duplicati esatti nel testo dei consigli.
        if (advices.includes(advice)) {
            console.log("Consiglio duplicato");
            return;
        }

        setAdvices([...advices, advice]);
    };

    // Estrae un consiglio dalla lista e registra una nuova visualizzazione.
    const randomAdvice = () => {

        // Non è possibile estrarre un elemento quando la lista è vuota.
        if (advices.length === 0) return;

        // Math.random produce un indice valido compreso tra zero e la lunghezza meno uno.
        const random =
            advices[Math.floor(Math.random() * advices.length)];

        setSelectedAdvice(random);
        // Usa la forma funzionale per incrementare il valore più recente del contatore.
        setViews(prev => prev + 1);
    };

    // Rimuove dalla lista il consiglio visualizzato e azzera la selezione.
    const removeAdvice = () => {

        // Esce dalla funzione se non è stato scelto nessun consiglio
        if (!selectedAdvice) return;

        console.log("Consiglio rimosso:", selectedAdvice);

        // filter crea una nuova lista senza il consiglio selezionato.
        setAdvices(
            advices.filter(a => a !== selectedAdvice)
        );

        // Nasconde il consiglio rimosso, così non rimane mostrato come selezione attiva.
        setSelectedAdvice(null);
    };

    // useEffect osserva la lista e stampa il suo nuovo valore solo dopo gli aggiornamenti.
    useEffect(() => {
        console.log("Lista aggiornata:", advices);
    }, [advices]);

    // Rende disponibili ai componenti figli lo stato e le funzioni del contesto
    return (
        <AdviceContext.Provider
            value={{
                advices,
                selectedAdvice,
                views,
                addAdvice,
                randomAdvice,
                removeAdvice
            }}
        >
            {children}
        </AdviceContext.Provider>
    );
}
