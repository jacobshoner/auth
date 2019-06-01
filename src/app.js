import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerSytle}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerSytle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default App;