import React, { Component } from 'react';F
import { StyleSheet, text, View } from "react-native";

class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    현재상태 : {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    온도 : {this.props.temp}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast;