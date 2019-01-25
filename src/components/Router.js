import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import EmployeeList from './EmployeeList';
import Creator from './EmployeeCreator'
import LoginForm from './LoginForm';

const RouterComponent = ()=>{

    return(
        <Router>
            <Scene key = 'root'>
                <Scene key = 'auth'>
                    <Scene key = 'login' component = {LoginForm} title = 'Please Login' ></Scene>
                </Scene>
                <Scene key = 'main'>
                    <Scene
                      rightTitle = 'Add'
                      onRight = {()=>{Actions.creatEmployee()}}
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
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent