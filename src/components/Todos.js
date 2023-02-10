import Todo from "./Todo"

export default function Todos({todoStart}){
    return (
        <main className="main-content">
            {todoStart.map((todo) => (
                <Todo key={todo.id} title={todo.title} content={todo.content} />
            ))}
        </main>
    )
}