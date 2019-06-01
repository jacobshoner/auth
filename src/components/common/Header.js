// Import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        width: "100%",
        height: 80,
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

// Make the component available to other parts of the app
export { Header };
