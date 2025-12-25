interface IHeader {
    texto: string
}

export const Header = ({texto}: IHeader) => {
    return (
        <header>{texto}</header>
    )
}