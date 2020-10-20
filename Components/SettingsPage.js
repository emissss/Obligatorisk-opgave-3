import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Alert, LogBox, Switch} from 'react-native';
import Switches from "./SettingsSwitch";
export default class SettingsPage extends Component {

    // Disse switches er ikke implementeret ordenligt endnu.
    render() {
        return (
            <View style={styles.container}>
                <Text>Use biometric login</Text>
                <Switches/>
                <Text>Delete all text on app close</Text>
                <Switches/>
                <Text>Store data in cloud</Text>
                <Switches/>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    switch: {}
});
