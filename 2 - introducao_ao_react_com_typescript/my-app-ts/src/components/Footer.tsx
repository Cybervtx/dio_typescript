interface IFooter{
    texto: string
}

export const Footer = ({texto}: IFooter) => {
    return (
        <footer>{texto}</footer>
    )
}