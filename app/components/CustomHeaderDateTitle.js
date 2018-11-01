import React from 'react';
import { View, Button } from 'react-native'

class CustomHeaderDateTitle extends React.Component{
    render() {
        return (
            <View style={{ flex: 1}}>
                <Button
                    onPress={()=>{
                        //TODO 待完善
                    }}
                    color={'#ffffff'}
                    title={this.props.year + '年'}>
                </Button>
            </View>
        )
    }
}

export default CustomHeaderDateTitle;