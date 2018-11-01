import React from 'react';
import { Text, ScrollView } from 'react-native';


class CurrentPaymentScreen extends React.Component{
    render(){
        return (
            <ScrollView>
                <Text>本期待还本息明细</Text>
            </ScrollView>
        )
    }
}

export default CurrentPaymentScreen;