import Layout from "./components/Layout";
import AdviceViewer from "./components/AdviceViewer";
import AdvicePanel from "./components/AdvicePanel";

import withAdviceLimit
from "./components/withAdviceLimit";

import {
    AdviceProvider,
    AdviceContext
} from "./context/AdviceContext";

import { useContext } from "react";

// Compone la schermata principale usando lo stato condiviso dal provider.
function Content() {

    // Legge l'elenco dal contesto: quando cambia, React aggiorna il pannello.
    const { advices } =
        useContext(AdviceContext);

    // Il wrapper limita la lista passata al pannello ai primi cinque elementi.
    const LimitedPanel =
        withAdviceLimit(
            AdvicePanel,
            5
        );

    return (
        // Layout contiene le due aree affiancate e gestisce la struttura visiva.
        <Layout>

            {/* Elenco dei consigli disponibili, limitato dal componente wrapper. */}
            <LimitedPanel
                advices={advices}
            />

            {/* Area per estrarre e gestire il consiglio del momento. */}
            <AdviceViewer />

        </Layout>
    );
}

export default function App() {

    return (
        // Il provider mantiene i dati condivisi e li rende accessibili a Content
        // e ai suoi componenti discendenti tramite AdviceContext.
        <AdviceProvider>
            <Content />
        </AdviceProvider>
    );
}