// Higher-order component: aggiunge un limite alla lista senza cambiare AdvicePanel.
function withAdviceLimit(Component, maxItems) {

    return function LimitedComponent(props) {

        // slice restituisce una copia con gli elementi dall'inizio fino al limite,
        // senza modificare l'array originale conservato nel contesto.
        const limitedAdvices =
            props.advices.slice(0, maxItems);

        // Riutilizza il componente ricevuto mantenendo tutte le sue props originali.
        return (
            <Component
                {...props}
                advices={limitedAdvices}
            />
        );
    };
}

export default withAdviceLimit;