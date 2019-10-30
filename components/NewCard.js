import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native'
import TextButton from './TextButton'
import { handleAddCardToDeck } from '../actions'
import { connect } from 'react-redux'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    handleChange = (name) => {
        return (input) => {
            this.setState((prevState) => ({ ...prevState, [name]: input }))
        }
    }

    submit = () => {
        const { question, answer } = this.state;
        if (question.trim() == '' || answer.trim() == '') {
            return alert("The question and answer fields are required.");
        }
        this.props.dispatch(handleAddCardToDeck(this.props.title, { question, answer }));
        this.props.navigation.goBack();

    }

    render() {
        const { question, answer } = this.state
        return (
            <View style={styles.container}>
                <TextInput onChangeText={this.handleChange('question')} value={question} style={styles.input} placeholder='Question' />
                <TextInput onChangeText={this.handleChange('answer')} value={answer} style={styles.input} placeholder='Answer' />
                <TextButton onPress={this.submit}>Submit</TextButton>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    input: {
        borderWidth: 1,
        color: "black",
        justifyContent: 'flex-start',
        borderRadius: 5,
        borderColor: "gray",
        height: 45,
        marginBottom: 10,
        padding: 5

    }
});

function mapStateToProps(state, { navigation }) {
    return {
        title: navigation.state.params.title
    }
}

export default connect(mapStateToProps)(NewCard)