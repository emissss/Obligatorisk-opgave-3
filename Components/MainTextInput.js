import React, {Component} from 'react'
import {View, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text} from 'react-native'


export default class MainTextInput extends Component {


    inputText


    handleButtonPressing = () => {
        this.setState({empty: ''})
        this.inputText = ''
    }

    render() {
        return (
            <View style={styles.container}>
                {/*Her starter topbaren*/}
                <View style={styles.topBar}>


                    {/*Her er teksten*/}
                    <View style={styles.buttonContainer}>
                        <Text style={styles.paragraph}>
                            Easy Note
                        </Text>
                    </View>

                    {/*Her er 2. button. */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.handleButtonPressing}>
                            <Text>Delete Note</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Her er input området*/}
                <View style={styles.textBox}>
                    <ScrollView style={{paddingTop: 2}}>
                        <TextInput style={{
                            height: 1920,
                            paddingTop: 3,
                            paddingBottom: 5,
                            textAlignVertical: 'top'
                        }} multiline={true} numberOfLines={64} value={this.inputText}
                        />
                    </ScrollView>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textBox: {
        paddingBottom: 3,
        paddingTop: 3,
        paddingRight: 5,
        paddingLeft: 5,
        textAlignVertical: 'top',
        backgroundColor: '#fcfcfc',


    },
    topBar: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1

    },
    button: {
        borderRadius: 15,
        padding: 25,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#dbdbdb'
    }
});
