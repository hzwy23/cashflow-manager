import React from 'react'
import {ScrollView, StyleSheet, Alert, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import AssetsLightBlock from "../components/AssetsLightBlock";
import SubMenuBlock from '../components/SubMenuBlock';
import FixedIncomeScreen from "./assets/FixedIncomeScreen";
import TemporaryIncomeScreen from "./assets/TemporaryIncomeScreen";
import LendIncomeScreen from "./assets/LendIncomeScreen";
import TotalAssetsScreen from "./assets/TotalAssetsScreen";
import CustomHeaderDateTitle from "../components/CustomHeaderDateTitle";
import TitleItemBlock from "../components/TitleItemBlock";


class AssetsScreen extends React.Component{
    render() {
        return (
            <ScrollView>
                <AssetsLightBlock name={'本年总收入'} onPress={() => {
                    this.props.navigation.navigate('TotalAssets')
                }} amount={100000.00} height={styles.height}/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('FixedIncome')
                }} name='固定收入' icon='globe'/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('TemporaryIncome')
                }} name='临时收入' icon='github'/>
                <TitleItemBlock title={'资产管理'}/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('LendIncome')
                }} name='借出款项' icon='gauge'/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('LendIncome')
                }} name='固定资产管理' icon='gauge'/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('LendIncome')
                }} name='银行卡余额管理' icon='gauge'/>
            </ScrollView>
        );
    }
}


const AssetsScreenStack = createStackNavigator({
    Home: {
        screen: AssetsScreen
    },
    FixedIncome: {
        screen: FixedIncomeScreen,
        navigationOptions:()=> ({
            headerTitle: '固定收入',
            headerBackTitle: null,
        })
    },
    TemporaryIncome: {
        screen: TemporaryIncomeScreen,
        navigationOptions:()=> ({
            headerTitle: '临时收入',
            headerBackTitle: null,
        })
    },
    LendIncome: {
        screen: LendIncomeScreen,
        navigationOptions:()=> ({
            headerTitle: '借出款项',
            headerBackTitle: null,
        })
    },
    TotalAssets: {
        screen: TotalAssetsScreen,
        navigationOptions:()=> ({
            headerTitle: '总资产',
            headerBackTitle: null,
        })
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        title: '资产管理',
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: HEADER_BG_COLOR
        },
        headerTintColor: '#fff',
        headerRight:<CustomHeaderDateTitle year={'2018'}/>,
        headerTitleStyle: {color: HEADER_TEXT_COLOR},
    }
});

const styles = StyleSheet.create({
    height: 100
})

export default AssetsScreenStack;
