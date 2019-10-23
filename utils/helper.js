import {AsyncStorage} from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'
function getDeck(id) {
 AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(result => (result[id]));
              
}

function getDecks() {
return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

function saveDeckTitle(title) {
 AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [title]: {
        title: title,
        questions: []
    }
  }))
}

function addCardToDeck(title, card) {
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
        [title]: {
            title: title,
            questions: [card]
        }
      }))
}