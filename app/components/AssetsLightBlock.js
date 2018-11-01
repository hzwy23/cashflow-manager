import React from 'react'
import { View, Text,Image, TouchableHighlight } from 'react-native'
import {HEADER_BG_COLOR, HEADER_TEXT_COLOR} from "../constants/Styles";
import Icon from "react-native-vector-icons/Entypo"

class AssetsLightBlock extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={ this.props.onPress }>
                <View style={{
                    height: this.props.height,
                    backgroundColor: HEADER_BG_COLOR,
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 7 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                marginTop: 24,
                                fontSize: 18,
                                marginLeft: 24,
                                color: '#ffffff',
                            }}>{ this.props.name }：</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginLeft:22,
                            }} source={require('../images/cny.png')}/>
                            <Text style={{
                                color: HEADER_TEXT_COLOR,
                                fontSize: 16,
                                position: 'relative' }}>:  </Text>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 18,
                                fontWeight: '800',
                                position: 'relative' }}>{ this.props.amount }</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name='chevron-thin-right'
                              size={20}
                              style={{
                                  marginTop: 38,
                              }}
                              color='#ffffff' />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default AssetsLightBlock;