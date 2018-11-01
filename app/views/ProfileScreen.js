import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import SubMenuBlock from "../components/SubMenuBlock";
import ProfileLightBlock from "../components/PfofileLightBlock";
import FixedIncomeScreen from "./assets/FixedIncomeScreen";
import BankCardScreen from "./profiles/BankCardScreen";
import SafeSettingScreen from "./profiles/SafeSettingScreen";
import ProfileDetailsScreen from "./profiles/ProfileDetailsScreen";

class ProfileScreen extends React.Component{
    render() {
        return (
            <ScrollView>
                <ProfileLightBlock
                    onPress={() => {
                        this.props.navigation.navigate('ProfileDetailsScreen')
                    }}
                    height={styles.height}/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('BankCardScreen')
                }} name='银行卡管理' icon='infinity'/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('SafeSettingScreen')
                }} name='安全设置' icon='flickr-with-circle'/>
            </ScrollView>
        );
    }
}

const ProfileScreenStack = createStackNavigator({
    Home: { screen: ProfileScreen },
    BankCardScreen: {
        screen: BankCardScreen,
        navigationOptions:()=> ({
            title: '银行卡管理',
        })
    },
    SafeSettingScreen: {
        screen: SafeSettingScreen,
        navigationOptions:()=> ({
            title: '安全设置',
        })
    },
    ProfileDetailsScreen: {
        screen: ProfileDetailsScreen,
        navigationOptions:()=> ({
            title: '个人中心',
        })
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        title: '我的信息',
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: HEADER_BG_COLOR,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {color: HEADER_TEXT_COLOR},
    }
});

const styles = StyleSheet.create({
    height: 100
})

export default ProfileScreenStack;