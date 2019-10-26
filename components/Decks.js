import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

class Decks extends Component {
    renderData = ({ item }) => {
        return (<View style={styles.deck}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.cards} cards</Text>
        </View>
        )
    }
    render() {
        const { decks } = this.props;
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
        textAlign:'center',
        color:'white'
    },
    subTitle: {
        fontSize:25,
        textAlign:'center',
        color:'white'
    }
});

function mapStateToProps(state) {
    return {
        decks: Object.keys(state)
        .map((data) => 
            ({
                 title: data, 
                 cards: state[data].questions.length,
                 key: data }))
    }
}

export default connect(mapStateToProps)(Decks);
