import { useState } from "react"

const Articles = () => {
    const myArticles = ["Shampoo", "Deodorante", "Detergente", "Sapone"]

    const [newArticle, setNewArticle] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <>
            <ul>
                {myArticles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <p>Il nuovo articolo è {newArticle}</p>
                <input type="text" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
                <button>Invia</button>
            </form>
        </>

    )
}

export default Articles
