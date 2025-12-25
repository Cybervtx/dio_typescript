import { Footer } from "./Footer"
import { Header } from "./Header/Header"


export const Layout = ({children}:any) => {
    return(
        <>
        <Header texto="Dio Bank" />
        {children}
        <Footer texto="By Diogo Caldas" />
        </>
    )
}