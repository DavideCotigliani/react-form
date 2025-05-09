import { useState } from "react"

const Articles = () => {
    const myArticles = ["Shampoo", "Deodorante", "Detergente", "Sapone"]

    const [newArticle, setNewArticle] = useState('')
    return (
        <>
            <ul>
                {myArticles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
            <p>Il nuovo articolo è {newArticle}</p>
            <input type="text" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
        </>

    )
}

export default Articles
