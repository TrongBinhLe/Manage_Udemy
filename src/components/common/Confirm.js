import React from 'react';
import {Text, View,Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({ children, visible, onAccept, onDecLine })=>{
    const { containerStyle, textStyle, carSectionStyle} = styles;

 return(
    <Modal
        visible = {visible}
        transparent
        animationType = 'slide'
        onRequestClose = {()=>{}}
    >
        <View style={containerStyle}>
            <CardSection style = {carSectionStyle}>
                <Text>{children}</Text>
            </CardSection>

            <CardSection style = {carSectionStyle}>
                <Button onPress = {onAccept}>
                    Yes
                </Button>
                <Button onPress = {onDecLine}>
                    No
                </Button>
            </CardSection>
        </View>
    </Modal> 
 );
}

const styles = {
    carSectionStyle : {
        justifyContent : 'center'
    },
    textStyle : {
        flex : 1,
        fontSize : 18,
        textAlign : 'center',
        lineHeight : 40,
    },
    containerStyle : {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position : 'relative',
        flex: 1,
        justifyContent : 'center',
    }
}

export {Confirm}