import { darkRed, softGray, softGreen, softRed } from "@ifeelblue/color-kit";
import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

export enum E_NotificationType {
    Error,
    Information,
    Success
}
export interface I_Notification {
    type: E_NotificationType
    message: string,
    click: () => void
}

const Notification: React.FC<I_Notification> = ({ message, type, click }) => {
    return (
        <View style={type === E_NotificationType.Error ? errorStyles.container : successStyles.container}>
            <Text style={type === E_NotificationType.Error ? errorStyles.msg : successStyles.msg}>
                {message}
            </Text>

            <TouchableHighlight style={mutualStyles.clickBtn} onPress={click} >
                <Text style={mutualStyles.clickMsg}>
                    X
                </Text>
            </TouchableHighlight>
        </View>)
}

export default Notification

const errorStyles = StyleSheet.create({
    container: {
        backgroundColor: softRed.hex,
        padding: 13,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    msg: {
        fontSize: 20,
        color: "red"
    },
})
const successStyles = StyleSheet.create({
    container: {
        backgroundColor: softGreen.hex,
        padding: 13,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    msg: {
        fontSize: 20,
        color: "green"
    }
})
const mutualStyles = StyleSheet.create({
    clickBtn: {
        borderRadius: 25,
        paddingHorizontal: 10,
        padding: 5,
        alignSelf: "flex-start",
        backgroundColor: "white"
    },
    clickMsg: {
        fontWeight: "bold"
    }
})