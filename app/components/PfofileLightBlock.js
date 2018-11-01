import React from 'react'
import { View, Text,Image, TouchableHighlight } from 'react-native'
import {HEADER_BG_COLOR} from "../constants/Styles";
import Icon from "react-native-vector-icons/Entypo"

class ProfileLightBlock extends React.Component {
    render() {
        return (
            <TouchableHighlight
                onPress={ this.props.onPress }>
                <View style={{
                    height: this.props.height,
                    backgroundColor: HEADER_BG_COLOR,
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 7, flexDirection: 'row' }}>
                        <View style={{ width: 48, height: 48 }}>
                            <Image style={{
                                width: 48,
                                height: 48,
                                marginLeft: 22,
                                marginTop: 22,
                            }} source={require('../images/profile-common.png')}/>
                        </View>
                        <View style={{ flex: 1, marginLeft: 48 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    marginTop: 24,
                                    fontSize: 18,
                                    color: '#ffffff',
                                }}>黄占威</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontSize: 18,
                                    position: 'relative' }}>18986****50</Text>
                            </View>
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

export default ProfileLightBlock;