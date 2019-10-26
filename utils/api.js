import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'


// export function getDeck(id) {
//  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//         .then(result => (result[id]));

// }

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export function saveDeckTitle(newTitle) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {
      title: newTitle,
      questions: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: [card]
    }
  }))
}