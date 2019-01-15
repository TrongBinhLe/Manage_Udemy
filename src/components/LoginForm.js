import React , {Component} from 'react';
import { connect } from 'react-redux'
import { emailChanged,passwordChanged,loginUser } from '../actions';
import {View,Text} from 'react-native'
import {
    Card,
    CardSection,
    Input,
    Button  
} from './common';

class Loginform extends Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text)
        console.log(text)
    }

    onPasswordChange= (text)=> {
        this.props.passwordChanged(text)
        console.log(text)
    }

    onButtonPress = () =>{
        const {email, password} = this.props
        this.props.loginUser({email,password});
    }

    renderError = ()=>{
        const {error} = this.props

        if(error){
            return(
                <View style = {{backgroundColor : 'white'}}>
                    <Text style={styles.errorTextStyle}>{error}</Text>
                </View>
            )
        }

    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label = 'Email'
                        placeholder = 'email@gmail.com'
                        onChangeText = {this.onEmailChange}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry = {true}
                        label = 'Password'
                        placeholder = 'password'
                        onChangeText = {this.onPasswordChange}
                        value = {this.props.password}
                    />                   
                </CardSection>
                 {this.renderError()}   
                <CardSection>
                    <Button onPress = {this.onButtonPress}>Login</Button>
                </CardSection>
            </Card>
            
        );
    }
}
const styles = {
    errorTextStyle : {
        fontSize : 20,
        alignSelf: 'center',
        color : 'red'
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        email : state.auth.email,
        password : state.auth.password,
        error : state.auth.error
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(Loginform)