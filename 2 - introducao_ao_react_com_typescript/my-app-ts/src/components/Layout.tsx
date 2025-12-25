import { Footer } from "./Footer"
import { Header } from "./Header"


export const Layout = ({children}:any) => {
    return(
        <>
        <Header texto="Curso Typescript" />
        {children}
        <Footer texto="By Software Engineer" />
        </>
    )
}