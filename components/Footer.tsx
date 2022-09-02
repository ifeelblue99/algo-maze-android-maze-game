import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import openAccountLink from "../utils/openAccountLink";
import { E_DeveloperAccounts } from "../config";
import { darkGray, softGray } from "@ifeelblue/color-kit";
import React from "react";

const Footer: React.FC = () => {

    return <View style={styles.container}>
        <Text style={styles.title}>Developer.</Text>
        <View style={styles.iconHolder}>
            <TouchableOpacity onPress={() => openAccountLink(E_DeveloperAccounts.Github)}>
                <Image style={styles.icon} source={require("../assets/github.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openAccountLink(E_DeveloperAccounts.Linkedin)}>
                <Image style={styles.icon} source={require("../assets/linkedin.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openAccountLink(E_DeveloperAccounts.Twitter)}>
                <Image style={styles.icon} source={require("../assets/twitter.png")} />
            </TouchableOpacity>

        </View>
    </View>
}

export default React.memo(Footer)

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: softGray.hex,
        bottom: 0,
        width: "100%",
        position: "absolute"
    },
    iconHolder: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: darkGray.hex,
        borderRadius: 15,
        marginTop: 10,
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        color: darkGray.hex,
        fontSize: 20,
    },
    icon: {
        width: 55,
        height: 55
    }
})