import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Decks extends Component {
    renderData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.deck} onPress=
                {() => this.props.navigation.navigate(
                    'DeckDetail',
                    { title: item.title }
                )}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.cards} {item.cards === 1 ? 'card' : 'cards'}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { decks } = this.props;
        if (decks.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>There are no decks.</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList data={decks} renderItem={this.renderData} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
        marginBottom: 10
    },
    deck: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: 'orange',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,

    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        color: 'white'
    },
    subTitle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        decks: Object.keys(state)
            .map((data) =>
                ({
                    title: data,
                    cards: state[data].questions.length,
                    key: data
                }))
    }
}

export default connect(mapStateToProps)(Decks);
