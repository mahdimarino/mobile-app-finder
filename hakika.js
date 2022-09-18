import react, { Component, component } from "react";
import { View, TextInput, Button, StyleSheet } from 'react';

export default class App extends Component {
    render() {
        <View style={style.ViewStyle}>
            <TextInput
                placeholder={"enter roll"}
                placeholderTextColor={"red"}
                KeyboardTye={"numeric"}
                style={style.txtstyle}
            />
            <Button
                title={"find record"}
            />
            <TextInput
                style={style.txtstyle} />
            <TextInput
                style={style.txtstyle} />
            <TextInput
                style={style.txtstyle} />
        </View>
    }
}
const style = StyleSheet.create({
    ViewStyle:
    {
        flex: 1,
        padding: 1,
        marginTop: 10,
    },
    txtstyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20
    }
})