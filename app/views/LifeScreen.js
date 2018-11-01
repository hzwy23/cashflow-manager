import React from 'react';
import { ScrollView, View } from 'react-native';
import {createStackNavigator} from "react-navigation";
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import MenuItemBlock from "../components/MenuItemBlock";

class LifeScreen extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <MenuItemBlock name='计划消费'/>
                    <MenuItemBlock name='我要借钱'/>
                    <MenuItemBlock name='人情债'/>
                    <MenuItemBlock name='小目标'/>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <MenuItemBlock name='信用卡还款'/>
                    <MenuItemBlock name='手机充值'/>
                    <MenuItemBlock name='美好时光'/>
                    <MenuItemBlock name='纪念日'/>
                </View>
            </ScrollView>
        );
    }
}

const LifeScreenStack = createStackNavigator({
    Home: { screen: LifeScreen },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        title: '生活服务',
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: HEADER_BG_COLOR
        },
        headerTintColor: '#fff',
        headerTitleStyle: {color: HEADER_TEXT_COLOR},
        tabBarOptions: {
            indicatorStyle: {height: 0},
        }
    }
});

export default LifeScreenStack;