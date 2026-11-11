// Fornisce una cornice unica e riutilizzabile ai contenuti della dashboard.
export default function Layout({ children }) {

    return (
        // La classe dashboard applica la griglia CSS; children inserisce qui i pannelli.
        <div className="dashboard">
            {children}
        </div>
    );
}