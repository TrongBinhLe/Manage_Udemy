import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'; 
import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import combineReducers from './src/reducers';
import Loginform from './src/components/LoginForm';
import Router from './src/components/Router'
import firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDrh7CiehXG3yOVnZ8QVCGwRXGOpQ_AjZ4",
      authDomain: "manage-1d930.firebaseapp.com",
      databaseURL: "https://manage-1d930.firebaseio.com",
      projectId: "manage-1d930",
      storageBucket: "manage-1d930.appspot.com",
      messagingSenderId: "434735956512"
    };
    firebase.initializeApp(config);
  }

  render() { 
    const {container} = styles
    const store = createStore(combineReducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style = {{flex : 1}}>
          <Router/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
