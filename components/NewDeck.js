import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import { handleSaveDeckTitle } from '../actions';
import { connect } from 'react-redux'

class NewDeck extends Component {
    state = {
        input: ''
    }
    handleChange = (input) => {
        this.setState({ input })
    }
    submit = () => {
        this.props.dispatch(handleSaveDeckTitle(this.state.input));
        this.props.navigation.goBack();
    }
    render() {
        const { input } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of the new Deck?</Text>
                <TextInput onChangeText={this.handleChange} value={input} style={styles.input} />
                <TouchableOpacity onPress={this.submit} style={
                    Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
                }>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        padding: 20

    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        color: "black",
        justifyContent: 'flex-start',
        borderRadius: 5,
        borderColor: "gray",
        height: 45,

    },
    iosSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,

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
        marginTop: 50,

    },
});

export default connect()(NewDeck);