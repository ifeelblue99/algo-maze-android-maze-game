import { softBlue } from "@ifeelblue/color-kit";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>How To Play ?</Text>
            <Text style={styles.p}>
                The purpose of game is to open a path with black colored boxes between
                start (top left) and end (bottom right) corner.
            </Text>
            <Text style={styles.p}>
                - A box can only move 1 box distance to up, bottom, left, right.
            </Text>
            <Text style={styles.p}>
                - If you think you have solved the maze press `Test Maze` button to see the result.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                Linking.openURL("https://algorithmic-tile-game.netlify.app/")

            }} >
                <Text>See Web Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        margin: 15,
        fontSize: 25,
        textAlign: "center",
        color: "white"
    },
    p: {
        margin: 15,
        fontSize: 15,
        width: 300,
        color: "white"
    },
    btn: {
        borderRadius: 7,
        backgroundColor: softBlue.hex,
        padding: 10,
        fontWeight: "bold",
        margin: 10
    }
})