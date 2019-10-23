import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'

export default class NewDeck extends Component {
    state = {
        input: ''
    }
    handleChange = (input) => {
        this.setState({ input })
    }
    onPress = () => {

    }
    render() {
        const { input } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of the new Deck?</Text>
                <TextInput onChange={this.handleChange} value={input} style={styles.input} />
                <TouchableOpacity onPress={this.submit} style={
                    Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
                }>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        color: "black",
        width: "80%",
        borderRadius: 5,
        borderColor: "gray",
        padding: 10

    },
    iosSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50
    },
    AndroidSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
});