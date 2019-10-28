import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton';

class DeckDetail extends Component {
    addCard = () => {
        this.props.navigation.navigate('NewCard',
            { title: this.props.title })
    }
    startQuiz = () => {
        this.props.navigation.navigate('Quiz',
            { title: this.props.title })
    }
    render() {
        const { title, cards } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{cards} cards</Text>
                <TextButton onPress={this.addCard} >
                    Add Card
            </TextButton>
                <TextButton onPress={this.startQuiz}>
                    Start Quiz
            </TextButton>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        color: 'black'
    },
    subTitle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },

});

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params

    return {
        title,
        cards: state[title].questions.length
    }
}

export default connect(mapStateToProps)(DeckDetail);
