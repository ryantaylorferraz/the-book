import { BookCard } from "./BookCard"

export const BookList = () => {
    return (
        <div>
            <span>Livros listados</span>
            <ul>
                <BookCard />
            </ul>
        </div>
    )
}