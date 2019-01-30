import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Router, Scene, Actions} from 'react-native-router-flux';
import EmployeeList from './EmployeeList';
import Creator from './EmployeeCreator'
import LoginForm from './LoginForm';
import EmployeeCreator from './EmployeeCreator';
import EmployeeEdit from './EmployeeEdit';
import { resetAttitude } from '../actions';

const RouterComponent = ()=>{

    onRightButtonAdd = ()=>{
        this.props.resetAttitude();
        Actions.creatEmployee({type : 'reset'});
		}    
		
    return(
        <Router>
            <Scene key = 'root'>
                <Scene key = 'auth'>
										<Scene 
											key = 'login' 
											component = {LoginForm} 
											title = 'Please Login' 
											navigationBarStyle = {{backgroundColor: 'rgba(224,255,224,0.75)'}} >
										</Scene>
                </Scene>
                <Scene key = 'main'>
                    <Scene
											rightTitle = 'Add'
											rightButtonTextStyle = {{color : 'white'}}
                      onRight = {()=>Actions.creatEmployee()}
                      key = 'employeeList' 
                      component = {EmployeeList} 
                      title = 'Employee List' 
                      initial = {true}
											navigationBarStyle = {{backgroundColor : 'rgba(85,141,209,0.95)'}}
                    />
										<Scene 
											key = 'creatEmployee' 											
											backTitle = 'Back'
											backButtonTextStyle = {{color : 'white'}}
                      component = {Creator} 
                      title = 'Add New Employee'
											navigationBarStyle = {{backgroundColor : 'rgba(85,141,209,0.95)'}}											
                      // initial = {true}
                    />
                    <Scene
											key = 'editEmployee'
											backTitle = 'Back'											
											backButtonTextStyle = {{color : 'white'}}
                      component = {EmployeeEdit}
                      title = 'Edit Employee'
											navigationBarStyle = {{backgroundColor : 'rgba(85,141,209,0.95)'}}										
											/>
                </Scene>
            </Scene>
        </Router>
    );
}

export default connect(null,{resetAttitude})(RouterComponent);