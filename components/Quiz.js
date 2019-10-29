import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';
import { clearLocalNotification } from '../utils/helpers'

class Quiz extends Component {
    state = {
        index: 0,
        score: 0,
        showAnswer: false,
        bounceValue: new Animated.Value(1),
    }
    correct = () => {
        const { bounceValue } = this.state;
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start()

        this.setState((prevState) => (
            {
                index: prevState.index + 1,
                score: prevState.score + 1,
                showAnswer: false
            }));


    }
    incorrect = () => {
        const { bounceValue } = this.state;
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start()

        this.setState((prevState) => (
            {
                ...prevState,
                index: prevState.index + 1,
                showAnswer: false
            }
        ));

    }

    showAnswer = () => {
        this.setState((prevState) => (
            {
                ...prevState,
                showAnswer: !prevState.showAnswer
            }
        ));
    }
    restart = () => {
        this.setState({
            index: 0,
            score: 0,
            showAnswer: false
        })
    }

    render() {
        const { questions } = this.props;
        const { showAnswer, index, score, bounceValue } = this.state

        if (questions.length === 0) {
            return (
                <View style={styles.noCardsContainer}>
                    <Text style={styles.normalText}>sorry, you cannot take a quiz because there are no cards in this deck.</Text>

                </View>
            )
        }
        if (index > questions.length - 1) {
            clearLocalNotification();
            const percentScore = (score / questions.length * 100).toFixed(2);
            return (
                <View style={styles.noCardsContainer}>
                    {percentScore >= 80 ? <FontAwesome name="trophy" size={100} style={{ color: 'gold', textAlign: 'center' }} /> :
                        <FontAwesome name="meh-o" size={100} style={{ color: 'gold', textAlign: 'center' }} />
                    }
                    <Text style={styles.normalText}>{percentScore >= 80 ? 'congratulations' : 'Try again'}! You got {score} {score === 1 ? 'question' : 'questions'} correct</Text>
                    <Text style={styles.normalText}>Your score is {percentScore} % </Text>
                    <TextButton onPress={this.restart}>Restart Quiz</TextButton>
                    <TextButton onPress={() => { this.props.navigation.goBack() }}>Back to Deck</TextButton>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                {!showAnswer && <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
                    <Text style={styles.title}>{questions[index].question}</Text>
                    <TouchableOpacity onPress={this.showAnswer}>
                        <Text style={styles.answerBtn}>Answer</Text>
                    </TouchableOpacity>
                </Animated.View>
                }
                {showAnswer &&
                    <View>
                        <Text style={styles.title}>{questions[index].answer}</Text>
                        <TouchableOpacity onPress={this.showAnswer}>
                            <Text style={styles.answerBtn}>Question</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{index + 1} / {questions.length}</Text>
                    <TouchableOpacity style={styles.correctBtn} onPress={this.correct}>
                        <Text style={{ color: 'white' }}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectBtn} onPress={this.incorrect}>
                        <Text style={{ color: 'white' }}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    noCardsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },

    correctBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",

    },
    incorrectBtn: {
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        color: 'black'
    },
    answerBtn: {
        fontSize: 25,
        textAlign: 'center',
        color: 'red'
    },
    normalText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
        marginBottom: 10
    }


});

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;
    return {
        questions: state[title].questions
    }
}

export default connect(mapStateToProps)(Quiz);