import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDNpNCstVyorjkjWKWYxjeC6hCRN-zdQoQ",
            authDomain: "authentication-30e04.firebaseapp.com",
            databaseURL: "https://authentication-30e04.firebaseio.com",
            projectId: "authentication-30e04",
            storageBucket: "authentication-30e04.appspot.com",
            messagingSenderId: "14206933576",
            appId: "1:14206933576:web:5c3cd07c7f8367cf"
          });
    }


    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;