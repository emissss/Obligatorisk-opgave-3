import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import NotePage from "./Components/NotePage";
import SettingsPage from "./Components/SettingsPage";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import { AntDesign,Entypo } from '@expo/vector-icons';


const bottomTabNavigator = createBottomTabNavigator(
    {


        Note: {
            screen: NotePage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <AntDesign name="filetext1" size={24} color={'black'}/>
                )
            }
        },
        Settings: {
            screen: SettingsPage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <AntDesign name="setting" size={24} color={'black'}/>
                )
            }
        }
    }
);

const AppNav = createAppContainer(bottomTabNavigator);
export default AppNav;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
