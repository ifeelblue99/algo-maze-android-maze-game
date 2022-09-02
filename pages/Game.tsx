import React from "react";
import Box, { I_Box } from "../components/Box";
import createBoard from "../utils/createBoard";
import checkMatches from "../utils/maze/checkMatches";
import testMaze from "../utils/maze/testMaze";
import validateMove from "../utils/validateBoxMove";
import { darkBlue, softBlue } from "@ifeelblue/color-kit";
import { BOARD_WIDTH, BOX_COUNT, MOVE_COUNT } from "../config";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import showSolvedMaze from "../utils/maze/showSolvedMaze";
//import Notification, { E_NotificationType } from "../components/Notification";

export default class Game extends React.Component {

    state = {
        remainingMoves: MOVE_COUNT,
        board: [] as I_Box[],
        originBox: {} as I_Box,
        // Due to some performance issues, I could not added a complex notification
        // shouldShowNotification: false,
        // notifyType: E_NotificationType.Error,
        // notificationMessage: "You are out of moves"
    }
    resetGame() {
        const boardData = createBoard(BOX_COUNT, this.boxSelected)
        this.setState({
            board: checkMatches(boardData),
            remainingMoves: MOVE_COUNT,

        })
    }
    boxSelected = (selectedBox: I_Box) => {
        if (this.state.originBox === undefined) {
            this.setState({
                board: this.state.board.map(box => {
                    if (box.boxId === selectedBox.boxId)
                        return { ...box, isSelected: true }
                    return box
                }),
                originBox: selectedBox,
            })
        }
        else {
            if (validateMove(this.state.originBox, selectedBox)) {
                this.setState({
                    board: checkMatches(this.state.board, this.state.originBox, selectedBox),
                    originBox: undefined,
                    remainingMoves: this.state.remainingMoves - 1
                })
            }
            else {
                this.setState({
                    board: this.state.board.map(box => {
                        if (box.isSelected)
                            return { ...box, isSelected: false }
                        return box
                    }),
                    originBox: undefined,
                })
            }
        }
    }
    runMazeTest() {
        const testResult = testMaze(this.state.board)

        if (testResult === null || testResult === undefined)
            return alert("Your path is failed. \n You can not escape!")
        else
            this.setState({
                board: showSolvedMaze(this.state.board, testResult),
                remainingMoves: MOVE_COUNT
            })
    }
    componentDidMount() {
        this.resetGame()
    }
    componentDidUpdate() {
        if (this.state.remainingMoves === 0) {
            //this.setNotification(true)
            alert("You are out of moves but you can still continue to playing.")
        }

    }
    // Due to some performance issues, I could not added a complex controller
    // setNotification(shouldShow: boolean) {
    //     this.setState({
    //         shouldShowNotification: shouldShow
    //     })
    // }
    render() {
        // const { notifyType, notificationMessage, shouldShowNotification } = this.state
        return (
            <View style={styles.container}>
                {/* {shouldShowNotification
                    && <Notification click={() => this.setNotification(false)} type={notifyType} message={notificationMessage} />
                } */}
                <View style={styles.upperInfo}>
                    <Text style={styles.moves} >Moves: <Text style={styles.moveVal}>{this.state.remainingMoves}</Text></Text>
                </View>
                <View style={styles.game}>
                    {this.state.board?.map(({ boxId, click, isSelected, bgColor, index }) => {
                        return <Box key={boxId} index={index} click={click} isSelected={isSelected} bgColor={bgColor} boxId={boxId} />
                    })}
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity onPress={() => this.resetGame()} style={styles.button}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.runMazeTest()} style={styles.button}>
                        <Text style={styles.buttonText}>Test Maze</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    upperInfo: {
        borderRadius: 7,
        margin: 10,
        width: 300,
        alignSelf: "center",
        backgroundColor: darkBlue.hex
    },
    moves: {
        color: softBlue.hex,
        fontSize: 18,
        marginBottom: 5,
        textAlign: "center"
    },
    moveVal: {
        color: "white",
        fontWeight: "bold",
    },
    game: {
        alignSelf: "center",
        width: BOARD_WIDTH,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    controls: {
        alignSelf: "center",
        flexDirection: "row",
        width: 300,
        margin: 10,
    },
    button: {
        flexGrow: 1,
        backgroundColor: darkBlue.hex,
        padding: 13,
        marginHorizontal: 3,
        borderRadius: 7,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})