import Footer from "./Footer"
import Header from "./Header"
import { View, StyleSheet } from "react-native"
import { darkWhite, midGray, softGray, softGreen, softWhite } from "@ifeelblue/color-kit"

export enum E_Page {
    Game,
    About
}

export interface I_Layout {
    children: JSX.Element,
    currentPage: E_Page,
    setCurrentPage: (page: E_Page) => void
}

const Layout: React.FC<I_Layout> = ({ children, currentPage, setCurrentPage }) => {
    return <View style={styles.container}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {children}
        {currentPage === E_Page.About && <Footer />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: midGray.hex,
    }
})

export default Layout
