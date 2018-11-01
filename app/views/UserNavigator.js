import React from 'react';
import { StyleSheet, Image } from 'react-native';
import CashFlowScreenStack from './CashFlowScreen';
import ProfileScreenStack from './ProfileScreen';
import AssetsScreenStack from './AssetsScreen';
import DebtScreenStack from './DebtScreen';
import LifeScreenStack from './LifeScreen';
import { createBottomTabNavigator } from 'react-navigation';
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";

const UserNavigator = createBottomTabNavigator({
    cashflow: {
        screen: CashFlowScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '现金流',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../images/cashflow.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        })
    },
    Debt: {
        screen: DebtScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '负 债',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../images/debt.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        })
    },
    Life: {
        screen: LifeScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '生 活',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../images/life.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        })
    },
    Assets: {
        screen: AssetsScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '资 产',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../images/assets.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        })
    },
    Profile: {
        screen: ProfileScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../images/profile.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        })
    },
}, {
    initialRouteName: 'Life',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: 'rgb(22,131,251)',
        inactiveTintColor: HEADER_TEXT_COLOR,
        pressColor: 'rgb(22,131,251)',
        style: {
            backgroundColor: HEADER_BG_COLOR,
            height: 52,
            borderTopColor:'#e6e6e6',
            borderTopWidth: 0,
            borderBottomWidth: 0,
        },
        indicatorStyle: {
            height: 0
        },
        showIcon: true,
        labelStyle: {
            fontSize: 12
        },
        iconStyle: {
            width: 24,
            height: 24
        }
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    }
});

export default UserNavigator;