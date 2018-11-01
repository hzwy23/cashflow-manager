import React from 'react';
import {Text, TouchableHighlight, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default class BottomButtonAddBlock extends React.Component{
    render() {
        return (
            <TouchableHighlight
                style={{
                    backgroundColor: '#f5f6fc',
                    position: 'absolute',
                    bottom:0,
                    flex: 1,
                    paddingTop: 18,
                    paddingBottom: 18,
                    flexDirection: 'row',
                    textAlign: 'center',
                }}
                onPress={this.props.onPress}>
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    position: 'relative',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon name='plus'
                          size={20}
                          style={{
                              textAlign: 'center',
                          }}
                          color='#5979fc'>
                    </Icon>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#5979fc',
                    }}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}