
export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const SAVE_DECK_TITLE = "SAVE_DECK_TITLE"
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK"
import * as api from '../utils/api'


export function handleReceiveDecks(id) {
    return (dispatch) => {
        api.getDecks(id).then((decks) => {
            dispatch(receiveDecks(decks));
        })
    }
}

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function handleSaveDeckTitle(title) {
    return (dispatch) => {
        return api.saveDeckTitle(title).then(() =>
            dispatch(saveDeckTitle(title))
        );
    }
}

function saveDeckTitle(title) {
    return {
        type: SAVE_DECK_TITLE,
        title
    }
}
export function handleAddCardToDeck(title, question) {
    return (dispatch) => {
        return api.addCardToDeck(title, question).then(() => {
            dispatch(addCardToDeck(title, question));
        })
    }
}

function addCardToDeck(title, question) {
    return {
        type: ADD_CARD_TO_DECK,
        question,
        title
    }
}