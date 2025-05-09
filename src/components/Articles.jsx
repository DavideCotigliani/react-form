import { useState } from "react"

const Articles = () => {
    // il primo state contiene il mio array di stringhe
    const [myArticles, setMyArticles] = useState(["Shampoo", "Deodorante", "Detergente", "Sapone"])
    // Il secondo state salva ciò l'utente andrà a scrivere
    const [newArticle, setNewArticle] = useState('');

    // funzione per aggiungere articolo
    const addArticle = e => {
        e.preventDefault();
        const updatedArticle = [...myArticles, newArticle];
        setMyArticles(updatedArticle);
        setNewArticle('')
    }
    return (
        <>
            <ul>
                {myArticles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
            <form onSubmit={addArticle}>
                <input type="text" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
                <button>Invia</button>
            </form>
        </>

    )
}

export default Articles
