import './Header.css'

interface IHeader {
    texto: string
}

export const Header = ({texto}: IHeader) => {
    return (
        <header className='header'>{texto}</header>
    )
}