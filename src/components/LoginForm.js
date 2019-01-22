import React , {Component} from 'react';
import { connect } from 'react-redux'
import { emailChanged,passwordChanged,loginUser } from '../actions';
import {View,Text} from 'react-native'
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
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
    renderButton = () =>{
        if(this.props.loading){
            return(
                <Spinner size = 'large' />
            )
        }else {
            return(
                <Button onPress = {this.onButtonPress}>Login</Button>
            )
        }
    }
    render(){
        const {container} = styles
        return(
        <View style = {container}>
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
                    {this.renderButton()}
                </CardSection>
            </Card>
        </View>
            
        );
    }
}
const styles = {
    container :{
        flex: 1,
        marginTop: 60,
    },
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
        error : state.auth.error,
        loading : state.auth.loading
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(Loginform)