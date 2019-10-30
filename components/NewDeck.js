import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { handleSaveDeckTitle } from '../actions';
import { connect } from 'react-redux'
import TextButton from './TextButton'

class NewDeck extends Component {
    state = {
        input: ''
    }
    handleChange = (input) => {
        this.setState({ input })
    }
  
    submit = () => {
        const { input } = this.state;
        if (input.trim() == '') {
            return alert("Deck Title is required.")
        }

        this.props.dispatch(handleSaveDeckTitle(input));

        this.props.navigation.navigate(
            'DeckDetail',
            { title: input }
        );
        this.setState({ input: '' })

    }
    render() {
        const { input } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of the new Deck?</Text>
                <TextInput onChangeText={this.handleChange} value={input} style={styles.input} placeholder='Deck Title' />

                <TextButton onPress={this.submit}>Submit</TextButton>
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
        padding: 5

    }
});

export default connect()(NewDeck);