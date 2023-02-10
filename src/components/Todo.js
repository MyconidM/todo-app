import Button from "./Button"
export default function Todo({title, content}){
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <Button />
        </article>
    )
}