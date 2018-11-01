import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "react-navigation";
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import CashflowLightBlock from "../components/CashflowLightBlock";
import PaymentLightBlock from "../components/PaymentLighBlock";
import FooterBlock from "../components/FooterBlock";
import TitleItemBlock from "../components/TitleItemBlock";
import CreditCardScreen from "./debt/CreditCardScreen";
import MonthToReturnPrincipalAndInterestScreen from "./cashflow/MonthToReturnPrincipalAndInterestScreen";
import QuarterToReturnPrincipalAndInterestScreen from "./cashflow/QuarterToReturnPrincipalAndInterestScreen";
import YearToReturnPrincipalAndInterestScreen from "./cashflow/YearToReturnPrincipalAndInterestScreen";
import CurrentPaymentScreen from "./cashflow/CurrentPaymentScreen";

class CashFlowScreen extends React.Component{
    render() {
        return (
            <ScrollView>
                <CashflowLightBlock onPress={() => {
                    this.props.navigation.navigate('LatestToReturnPrincipalAndInterest')
                }} name='近7天待还本息' amount={5000} height={styles.height}/>
                <CashflowLightBlock onPress={() => {
                    this.props.navigation.navigate('MonthToReturnPrincipalAndInterest')
                }} name='本月待还本息' amount={15000} height={styles.height}/>
                <CashflowLightBlock onPress={() => {
                    this.props.navigation.navigate('QuarterToReturnPrincipalAndInterest')
                }} name='本季待还本息' amount={35000} height={styles.height}/>
                <CashflowLightBlock onPress={() => {
                    this.props.navigation.navigate('YearToReturnPrincipalAndInterest')
                }} name='本年待还本息' amount={55000} height={styles.height}/>
                <TitleItemBlock title={'详细现金流'}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2017-02-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2017-02-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2017-01-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2016-12-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2016-11-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2016-10-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2016-09-20' amount={100000.00} height={90}/>
                <PaymentLightBlock onPress={() => {
                    this.props.navigation.navigate('CurrentPayment')
                }} date='2016-08-20' amount={100000.00} height={90}/>
                <FooterBlock/>
            </ScrollView>
        );
    }
}

const CashFlowScreenStack = createStackNavigator({
    Home: { screen: CashFlowScreen },
    LatestToReturnPrincipalAndInterest: {
        screen: MonthToReturnPrincipalAndInterestScreen,
        navigationOptions:()=> ({
            title: '近7天待还本息',
        })
    },
    MonthToReturnPrincipalAndInterest: {
        screen: MonthToReturnPrincipalAndInterestScreen,
        navigationOptions:()=> ({
            title: '本月负债本息',
        })
    },
    QuarterToReturnPrincipalAndInterest: {
        screen: QuarterToReturnPrincipalAndInterestScreen,
        navigationOptions:()=> ({
            title: '本季负债本息',
        })
    },
    YearToReturnPrincipalAndInterest: {
        screen: YearToReturnPrincipalAndInterestScreen,
        navigationOptions:()=> ({
            title: '本年负债本息',
        })
    },
    CurrentPayment: {
        screen: CurrentPaymentScreen,
        navigationOptions:()=> ({
            title: '本期负债明细',
        })
    },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        title: '现金流管理',
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: HEADER_BG_COLOR,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: HEADER_TEXT_COLOR
        },
    }
});

const styles = StyleSheet.create({
    height: 70
})

export default CashFlowScreenStack;