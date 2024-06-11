import { useParams } from "react-router-dom"

export function Product() {
    const { id } = useParams()

    return (
        <div>{id}</div>
    )
}