import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import {createStackNavigator} from "react-navigation";
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import SubMenuBlock from "../components/SubMenuBlock";
import DebtLightBlock from "../components/DebtLightBlock";
import FixedIncomeScreen from "./assets/FixedIncomeScreen";
import CreditCardScreen from "./debt/CreditCardScreen";
import InstallmentLoanScreen from "./debt/InstallmentLoanScreen";
import SumPrincipalInterestScreen from "./debt/SumPrincipalInterestScreen";
import DebtPrincipalScreen from "./debt/DebtPrincipalScreen";
import DebtInterestScreen from "./debt/DebtInterestScreen";
import CustomHeaderDateTitle from "../components/CustomHeaderDateTitle";

class DebtScreen extends React.Component{
    render() {
        return (
            <ScrollView>
                <DebtLightBlock onPress={() => {
                    this.props.navigation.navigate('SumPrincipalInterest')
                }} name='负债本息合计' amount={10000} height={styles.height}/>
                <DebtLightBlock onPress={() => {
                    this.props.navigation.navigate('DebtPrincipal')
                }} name='负债本金' amount={9000} height={styles.height}/>
                <DebtLightBlock onPress={() => {
                    this.props.navigation.navigate('DebtInterest')
                }} name='负债利息' amount={1000} height={styles.height}/>
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('CreditCard')
                }} name='信用卡账单' icon='grooveshark' />
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('InstallmentLoan')
                }} name='分期贷款' icon='heart' />
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('FixedExpenditure')
                }} name='固定支出' icon='houzz' />
                <SubMenuBlock onPress={() => {
                    this.props.navigation.navigate('FixedExpenditure')
                }} name='欠亲友款项' icon='houzz' />
            </ScrollView>);
    }
}

const DebtScreenStack = createStackNavigator({
    Home: { screen: DebtScreen },
    CreditCard: {
        screen: CreditCardScreen,
        navigationOptions:()=> ({
            title: '信用卡账单',
            headerRight: <CustomHeaderDateTitle year={'2018'}/>,
        })
    },
    InstallmentLoan: {
        screen: InstallmentLoanScreen,
        navigationOptions:()=> ({
            title: '分期贷款',
            headerRight:<CustomHeaderDateTitle year={'2018'}/>,
        })
    },
    FixedExpenditure: {
        screen: FixedIncomeScreen,
        navigationOptions:()=> ({
            title: '固定支出',
        })
    },
    SumPrincipalInterest: {
        screen: SumPrincipalInterestScreen,
        navigationOptions:()=> ({
            title: '负债本息合计',
        })
    },
    DebtPrincipal: {
        screen: DebtPrincipalScreen,
        navigationOptions:()=> ({
            title: '负债本金',
        })
    },
    DebtInterest: {
        screen: DebtInterestScreen,
        navigationOptions:()=> ({
            title: '负债利息',
        })
    },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        title: '负债管理',
        headerRight:<CustomHeaderDateTitle year={'2018'}/>,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: HEADER_BG_COLOR
        },
        headerTintColor: '#fff',
        headerTitleStyle: {color: HEADER_TEXT_COLOR},
    }
});

const styles = StyleSheet.create({
    height: 70
})

export default DebtScreenStack;