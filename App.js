import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons'
import Decks from './components/Decks';
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import Constants from 'expo-constants'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers';
import middleware from './middleware'
import { createStackNavigator } from 'react-navigation-stack';
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'


const Tabs = createAppContainer(createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='list-alt' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'green' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'green',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}));

const MainNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: { width: Dimensions.get("window").width },
      title: 'Card Detail'
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: { width: Dimensions.get("window").width },
      title: 'Add Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: { width: Dimensions.get("window").width },
      title: 'Quiz'
    }
  }
}));

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
export default class App extends Component {

  render() {
    const store = createStore(reducer, middleware);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={'green'} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  }
});

