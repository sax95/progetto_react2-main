import { useContext, useEffect, useRef } from "react";
import { AdviceContext } from "../context/AdviceContext";

// Mostra un'estrazione casuale, il numero di estrazioni e l'azione di rimozione.
export default function AdviceViewer() {

    // I valori provengono dal contesto, così i pulsanti agiscono sullo stesso stato
    // che alimenta anche la lista nel pannello degli altri consigli.
    const {
        selectedAdvice,
        randomAdvice,
        removeAdvice,
        views
    } = useContext(AdviceContext);

    // useRef conserva il valore tra i render senza causarne uno nuovo.
    const previousAdvice = useRef(null);

    useEffect(() => {

        // L'effetto viene rieseguito quando cambia selectedAdvice.
        if (selectedAdvice) {
            console.log(
                "Consiglio mostrato:",
                selectedAdvice
            );
        }

    }, [selectedAdvice]);

    useEffect(() => {

        // Confronta la selezione corrente con quella precedente per segnalare
        // in console quando l'estrazione casuale restituisce lo stesso elemento.
        if (
            previousAdvice.current === selectedAdvice &&
            selectedAdvice
        ) {
            console.log(
                "Consiglio mostrato nuovamente"
            );
        }

        // Aggiorna il riferimento dopo il confronto, pronto per il render successivo.
        previousAdvice.current =
            selectedAdvice;

    }, [selectedAdvice]);

    useEffect(() => {

        // La funzione restituita da useEffect viene eseguita alla rimozione del componente.
        return () => {
            console.log(
                "Componente AdviceViewer smontato"
            );
        };

    }, []);

    return (
        <div className="viewer">

            <h2>Consiglio del momento</h2>

            {/* Estrae un consiglio casuale dalla lista condivisa. */}
            <button
                onClick={randomAdvice}
                className="btn-main"
            >
                Genera Consiglio
            </button>

            <h3>
                Visualizzazioni: {views}
            </h3>

            {/* L'operatore && evita di mostrare contenuti finché non esiste una selezione. */}
            {
                selectedAdvice &&
                <div className="advice-box">
                    {selectedAdvice}
                </div>
            }

            {
                selectedAdvice &&
                <button
                    className="remove"
                    onClick={removeAdvice}
                >
                    Elimina
                </button>
            }

        </div>
    );
}