import * as React from 'react';
import { Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName=''
        >

        </Tab.Navigator>
    )
}