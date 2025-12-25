interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({id, paragraph, details}: ICard) => {
    return (
        <div>
            <p>{id}</p>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    )
}