import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flexDirection: "column",
        position: "absolute",
        top: 30,
        right: 0,
        left: 0,
        bottom: 0,
    },
    base: {
        borderColor: "#000000" /* 선색 */,
        borderWidth: 1 /* 선 두깨 */
    },
    topBlock: {
        flexDirection: "row" /* 맨위 정렬 기준 */
        , flex: 5 /*  높이*/
    },
    leftCol: { flex: 1 /* 두깨 */ },
    bottomBlock: { flex: 2, flexDirection: "row" },
    bottomRight: { flexDirection: "column", flex: 2 },
    cellOne: { flex: 1, borderBottomWidth: 15 },
    cellTwo: { flex: 3 },
    cellThree: { flex: 5, backgroundColor: '#FF0000' },
    cellFour: { flex: 3, backgroundColor: '#0000FF' },
    cellFive: { flex: 6 },
    cellSix: { flex: 1 },
    cellSeven: { flex: 1, backgroundColor: '#FFFF00' },
})

export default styles;