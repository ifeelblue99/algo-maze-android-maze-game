import { Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { BOX_COUNT, BOX_SIZE, SELECTED_BOX_COLOR } from "../config"

export interface I_Box {
    bgColor: string,
    boxId: string,
    index: number,
    isSelected: boolean,
    click: (box: I_Box) => void
}

class Box extends React.Component<I_Box> {

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.click(this.props)}
                style={
                    this.props.isSelected ?
                        { margin: 1, borderRadius: 5, borderWidth: 15, borderColor: SELECTED_BOX_COLOR, backgroundColor: this.props.bgColor, width: BOX_SIZE, height: BOX_SIZE } :
                        { margin: 1, borderRadius: 5, backgroundColor: this.props.bgColor, width: BOX_SIZE, height: BOX_SIZE }
                }
            >
                {this.props.index === 0 && <Text style={styles.location} >START</Text>}
                {this.props.index === BOX_COUNT - 1 && <Text style={styles.location}>END</Text>}
            </TouchableOpacity>)
    }
}
export default React.memo(Box, (prev, curr) => {
    return prev.bgColor === curr.bgColor
})

const styles = StyleSheet.create({
    location: {
        margin: 4,
        borderRadius: 5,
        textAlign: "center",
        backgroundColor: "white",
        fontWeight: "bold"
    }
})