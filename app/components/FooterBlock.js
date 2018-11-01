import React from 'react';
import { View, Text } from 'react-native'


class FooterBlock extends React.Component{
    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', marginTop: 3, marginBottom: 3}}>
                <Text style={{height: 24, lineHeight: 24, textAlign: 'center',  color: '#858585'}}>到底线啦！</Text>
            </View>
        )
    }
}

export default FooterBlock;