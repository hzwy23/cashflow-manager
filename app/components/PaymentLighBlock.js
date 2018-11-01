import React from 'react'
import { View, Text,Image, TouchableHighlight } from 'react-native'
import Icon from "react-native-vector-icons/Entypo"

class PaymentLightBlock extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={{
                    marginTop: 6,
                }}
                onPress={this.props.onPress}>
                <View style={{
                    height: this.props.height,
                    backgroundColor: '#f7f7f7',
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 7 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                marginTop: 23,
                                fontSize: 16,
                                marginLeft: 24,
                                color: '#4c4c4c',
                            }}>还款日期：{this.props.date}</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            marginTop: 6,
                            flexDirection: 'row'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginLeft:22,
                            }} source={require('../images/cny-black.png')}/>
                            <Text style={{
                                color: '#4c4c4c',
                                fontSize: 16,
                                position: 'relative' }}>:  </Text>
                            <Text style={{
                                color: '#4c4c4c',
                                fontSize: 16,
                                position: 'relative' }}>{ this.props.amount }</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name='chevron-thin-right'
                              size={20}
                              style={{
                                  marginTop: 36,
                              }}
                              color='#cccccc' />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default PaymentLightBlock;