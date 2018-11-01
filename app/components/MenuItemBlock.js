import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

class MenuItemBlock  extends React.Component{
    render() {
        return (
            <View style={{
                minHeight: 64,
                minWidth: 64,
                marginTop: 6,
                paddingBottom: 6,
                paddingTop: 6,
                flex: 1,
                backgroundColor: '#f7f7f7'}}>
                <Icon name='earth'
                      size={42}
                      style={{
                          alignItems: 'center',
                          textAlign: 'center',
                          justifyContent: 'center',
                      }}
                      color='#cccccc' />
                <Text style={{ textAlign: 'center', marginTop: 6 }}>{this.props.name}</Text>
            </View>
        )
    }
}

export default MenuItemBlock;