import React from 'react';
import Icon from "react-native-vector-icons/Entypo"
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class SubMenuBlock extends React.Component{
    render() {
        return (
            <TouchableHighlight
                style={styles.item}
                onPress={this.props.onPress}>
                <View style={styles.itemView}>
                    <View style={{ flex: 7, flexDirection: 'row'}}>
                        <Icon name={this.props.icon}
                              size={20} />
                        <Text style={styles.textLabel}>
                            { this.props.name }
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon name='chevron-thin-right' size={20} color='#cccccc' />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        marginTop: 8
    },
    itemView : {
        height: 56,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        paddingLeft: 24,
        flexDirection: 'row'
    },
    textLabel: {
        marginLeft: 8,
        fontSize: 16
    }
})

export default SubMenuBlock;