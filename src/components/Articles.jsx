
const Articles = () => {
    const myArticles = ["Shampoo", "Deodorante", "Detergente", "Sapone"]
    return (
        <ul>
            {myArticles.map((article, index) => (
                <li key={index}>{article}</li>
            ))}
        </ul>
    )
}

export default Articles
