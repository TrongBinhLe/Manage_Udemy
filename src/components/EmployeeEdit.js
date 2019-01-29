import React, {Component} from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { View } from 'react-native';
import { Card, CardSection, Button,Confirm } from './common';
import Employee from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete, resetAttitude } from '../actions';

class EmployeeEdit extends Component {
    state = { showModal: false}

    componentWillMount(){
        _.each(this.props.employee,(value, prop)=>{
            this.props.employeeUpdate({value,prop})
        })        
    }
    onButtonSaveChanges = ()=>{
        const {name, phone, position, shift} = this.props;
        this.props.employeeSave({name, phone, position, shift ,uid: this.props.employee.uid});
        Actions.employeeList({type : 'reset'});
        this.props.resetAttitude();
    }
    onButtonDelete = ()=>{
        this.props.employeeDelete({uid : this.props.employee.uid})
        Actions.employeeList({type: 'reset'});
        this.props.resetAttitude();
    }
    onButtonTextSchedule = ()=>{
        const { phone, shift } = this.props
        Communications.text(phone,`Your upcoming shift is on ${shift}`)
    }

    render(){
        const {container} = styles;
        return(
              <View style = {container}>
                <Card>
                    <Employee/>
                    <CardSection>
                        <Button onPress = {this.onButtonSaveChanges}>Save Changes</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress = {()=> this.setState({showModal : ! this.state.showModal})}>Fire Employee</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress = {this.onButtonTextSchedule}>Text Schedule</Button>
                    </CardSection>
                    <Confirm 
                        visible = {this.state.showModal}
                    >
                        Are you sure you want to delete this?
                    </Confirm>
                    
                </Card>
              </View>  
        );
    }
}

const styles = {
    container : {
        flex: 1,
        paddingTop: 60,
    }
}

const mapStateToProps = (state, ownProps) => {
    const {name ,phone, position, shift} = state.createEmployee
    return {
        name, phone, position, shift
    }
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete, resetAttitude})(EmployeeEdit);

