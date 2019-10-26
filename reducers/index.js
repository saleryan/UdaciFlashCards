import { RECEIVE_DECKS, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from "../actions";

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS: return state;
        case SAVE_DECK_TITLE:

            return {
                [action.title]:
                {
                    title: action.title,
                    questions: []
                },
                ...state
            }
        case ADD_CARD_TO_DECK:

            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: [...state[action.title].questions, card]
                }

            }
        default: return state;
    }
}

