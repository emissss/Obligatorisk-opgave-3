import * as React from 'react';
import {Text, View, StyleSheet, Alert, Button, TouchableOpacity, ScrollView,} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import MainTextInput from "./MainTextInput";





export default class NotePage extends React.Component {
    state = {
        hasBiometricHardware: null,
        hasBiometricData: null,
        isRequestingBiometricLogin: false,
        isLoggedInBiometic: false
    };


    componentDidMount = () => {
        this.checkBiometricAvailability();
    };

    checkBiometricAvailability = async () => {
        const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
        const hasBiometricData = await LocalAuthentication.isEnrolledAsync();
        this.setState({
            hasBiometricHardware,
            hasBiometricData,
        });
    };

    requestBiometricLogin = async () => {
        try {
            this.setState({
                isRequestingBiometricLogin: true,
            });
            const response = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Use biometrics',
                fallbackLabel: 'Use password',
            });


            if (response.success) {
                this.setState({isLoggedInBiometic: true})
            } else {
                Alert.alert('Failure');
            }
            this.setState({
                isRequestingBiometricLogin: false,
            });
            if (response.error) {
                Alert.alert(response.error);
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    cancelBiometricLogin = () => {
        LocalAuthentication.cancelAuthenticate();
    };

    logout = () => {
        this.setState({isLoggedInBiometic: false})
    }

    // Fra øvelse 10
    render() {
        const {isLoggedInBiometic} = this.state;

        if (!isLoggedInBiometic) {
            const {
                hasBiometricData,
                hasBiometricHardware,
                isRequestingBiometricLogin,
            } = this.state;
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                      Press the button to open notes
                    </Text>
                    {hasBiometricData && hasBiometricHardware && (
                        <Button
                            title="Login"
                            onPress={this.requestBiometricLogin}
                        />
                    )}

                    {isRequestingBiometricLogin && Platform.OS === 'android' && (
                        <View>
                            <Text>Use fingerprint scanner</Text>
                            <Button title="Cancel" onPress={this.cancelBiometricLogin}/>
                        </View>
                    )}
                </View>
            );
        } else {
            return (
                <View><MainTextInput/></View>


            )
        }

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
