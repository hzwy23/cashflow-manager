import React from 'react';
import { ScrollView, View } from 'react-native';
import BottomButtonAddBlock from "../../components/BottomButtonAddBlock";

class FixedIncomeScreen extends React.Component{
    render(){
        return (
            <ScrollView>
                <View>
                    <BottomButtonAddBlock onPress={() => {}} name='添加' />
                </View>
            </ScrollView>
        )
    }
}

export default FixedIncomeScreen;