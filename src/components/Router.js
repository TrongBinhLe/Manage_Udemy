import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Router, Scene, Actions} from 'react-native-router-flux';
import EmployeeList from './EmployeeList';
import Creator from './EmployeeCreator'
import LoginForm from './LoginForm';
import EmployeeCreator from './EmployeeCreator';
import EmployeeEdit from './EmployeeEdit';
import { saveSuccess } from '../actions'


const RouterComponent = ()=>{
    
    // onRightButtonAdd = () =>{
    //     this.props.saveSuccess();
    //     Actions.creatEmployee({type : 'reset'});
    // }
    
    return(
        <Router>
            <Scene key = 'root'>
                <Scene key = 'auth'>
                    <Scene key = 'login' component = {LoginForm} title = 'Please Login' ></Scene>
                </Scene>
                <Scene key = 'main'>
                    <Scene
                      rightTitle = 'Add'
                      onRight = {()=> Actions.creatEmployee()}
                      key = 'employeeList' 
                      component = {EmployeeList} 
                      title = 'Employee List' 
                      initial = {true}
                    />
                    <Scene 
                      key = 'creatEmployee' 
                      component = {Creator} 
                      title = 'Add New Employee'
                      // initial = {true}
                    />
                    <Scene
                      key = 'editEmployee'
                      component = {EmployeeEdit}
                      title = 'Edit Employee'
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default connect(null,{saveSuccess})(RouterComponent);