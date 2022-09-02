import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { E_Page } from "./Layout";
import React from "react";
import { darkGray } from "@ifeelblue/color-kit";

export interface I_Header {
    currentPage: E_Page,
    setCurrentPage: (page: E_Page) => void
}

const Header: React.FC<I_Header> = ({ currentPage, setCurrentPage }) => {

    return <View style={styles.container}>
        {currentPage === E_Page.Game ?
            <>
                <View style={styles.logo}>
                    <Image
                        source={require('../assets/splash2.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>AlgoMaze</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { setCurrentPage(E_Page.About) }}>
                    <Text style={styles.aboutBtnTitle}>About</Text>
                </TouchableOpacity>
            </>
            :
            <>
                <TouchableOpacity
                    onPress={() => { setCurrentPage(E_Page.Game) }}>
                    <Image
                        source={require('../assets/arrow.png')}
                        style={styles.leftArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.about}>About</Text>
            </>
        }

        <StatusBar style="light" />
    </View >
}
export default React.memo(Header, (prev, curr) => {
    return prev.currentPage === curr.currentPage
})

const styles = StyleSheet.create({
    container: {
        color: "white",
        height: 110,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 15,
        paddingBottom: 15,
        backgroundColor: darkGray.hex,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logo: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row"
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 7,
        marginRight: 5
    },
    leftArrow: {
        height: 30,
        width: 60
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    about: {
        fontSize: 20,
        color: "white",
        alignSelf: "center"
    },
    aboutBtnTitle: {
        fontSize: 20,
        color: "white"
    }
})