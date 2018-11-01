import React from 'react';
import {ScrollView, Text, View} from "react-native";

class TitleItemBlock extends React.Component{
    render() {
        return (
            <View style={{
                paddingLeft: 12,
                marginTop: 6}}>
                <Text style={{
                    height: 24,
                    lineHeight: 24,
                    fontSize: 12,
                    color: '#7d7d7d',
                    fontWeight: '400'
                }}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export default TitleItemBlock;