import React, {Component} from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { Card, CardSection, Button } from './common';
import Employee from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete, saveSuccess } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee,(value, prop)=>{
            this.props.employeeUpdate({value,prop})
        })        
    }
    onButtonSaveChanges = ()=>{
        const {name, phone, position, shift} = this.props;
        this.props.employeeSave({name, phone, position, shift ,uid: this.props.employee.uid});
        Actions.employeeList({type : 'reset'});
        this.props.saveSuccess();
    }
    onButtonDelete = ()=>{
        this.props.employeeDelete({uid : this.props.employee.uid})
        Actions.employeeList({type: 'reset'});
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
                        <Button onPress = {this.onButtonDelete}>Delete</Button>
                    </CardSection>
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

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete, saveSuccess})(EmployeeEdit);

