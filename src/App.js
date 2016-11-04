import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyDRVxv58bbjTylR-CJHGvFW_tqW5HN8wvU',
      authDomain: 'udemy-manager-6ec84.firebaseapp.com',
      databaseURL: 'https://udemy-manager-6ec84.firebaseio.com',
      storageBucket: 'udemy-manager-6ec84.appspot.com',
      messagingSenderId: '1090422992771'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
