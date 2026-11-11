import { useContext, useState } from "react";
import { AdviceContext } from "../context/AdviceContext";

// Sezione che consente di aggiungere consigli e consultare quelli disponibili.
function AdvicePanel({ advices }) {

    // Stato locale del campo: value mostra text e onChange lo aggiorna mentre si scrive.
    const [text, setText] = useState("");

    // Recupera dal contesto l'azione che aggiorna la lista condivisa.
    const { addAdvice } =
        useContext(AdviceContext);

    // Gestisce l'invio del modulo dopo il click o la pressione di Invio.
    const handleSubmit = e => {

        // Evita il ricaricamento della pagina quando si invia il form.
        e.preventDefault();

        // trim controlla il contenuto senza spazi esterni e scarta i campi vuoti.
        if (text.trim() === "") return;

        // Delega al contesto l'aggiornamento dell'elenco condiviso.
        addAdvice(text);

        // Svuota il campo dopo aver aggiunto il consiglio.
        setText("");
    };

    return (
        <div className="panel">

            <h2>I tuoi consigli</h2>

            {/* Il form permette di inserire un nuovo consiglio nella lista condivisa. */}
            <form onSubmit={handleSubmit}>
                {/* Campo controllato: il valore mostrato è sempre quello nello stato text. */}
                <input
                    type="text"
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)
                    }
                />

                <button>
                    Aggiungi
                </button>
            </form>

            {/* map crea una voce per ogni consiglio; key aiuta React a riconciliare la lista. */}
            {
                advices.map((item, index) => (
                    <div
                        className="advice-item"
                        key={index}
                    >
                        {item}
                    </div>
                ))
            }

        </div>
    );
}

export default AdvicePanel;