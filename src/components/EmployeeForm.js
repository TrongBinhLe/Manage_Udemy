import React, { Component } from 'react';
import {View, Picker} from 'react-native';
import { CardSection, Input } from './common'
import { connect } from 'react-redux';
import { employeeUpdate, } from '../actions'

class EmployeeForm extends Component {
    render(){
        return(
          <View>  
            <CardSection>
                <Input 
                  value = {this.props.name}
                  label = 'Name' 
                  placeholder = 'TrongBinh'
                  onChangeText = {(value)=>this.props.employeeUpdate({prop: 'name' , value})}/>
              </CardSection>
              
              <CardSection>
                <Input 
                  value =  {this.props.phone}
                  label = 'Phone'
                  placeholder = '079 901 2530'
                  onChangeText = {(value)=>this.props.employeeUpdate({prop: 'phone', value})}/>
              </CardSection>

              <CardSection >
                <Text style ={styles.pickerTextStyle}>Position</Text>
                <Picker 
                  style = {{flex: 3}}
                  selectedValue = {this.props.position}
                  onValueChange = {(position)=>{this.props.employeeUpdate({prop : 'position', value : position})}}
                >
                  <Picker.Item label = 'Staff' value ='Staff'/>
                  <Picker.Item label = 'Senior Staff' value ='Senior Staff'/>
                  <Picker.Item label = 'Assistant Manager' value ='Assistant Manager'/>
                  <Picker.Item label = 'Manager' value ='Manager'/>
                  <Picker.Item label = 'Senior Manager' value ='Senior Manager'/>
                </Picker>  
              </CardSection>
              <CardSection >
                <Text style ={styles.pickerTextStyle}>Shift</Text>
                <Picker 
                  style = {{flex: 3}}
                  selectedValue = {this.props.shift}
                  onValueChange = {(day)=>{this.props.employeeUpdate({prop :'shift', value : day})}}
                >
                  <Picker.Item label = 'Monday' value ='Monday'/>
                  <Picker.Item label = 'Tuesday' value ='Tuesday'/>
                  <Picker.Item label = 'Wednesday' value ='Wednesday'/>
                  <Picker.Item label = 'Thursday' value ='Thursday'/>
                  <Picker.Item label = 'Friday' value ='Friday'/>
                  <Picker.Item label = 'Saturday' value ='Saturday'/>
                  <Picker.Item label = 'Sunday' value ='Sunday'/>
                </Picker>  
              </CardSection>
            </View>  

        );
    }
}
const styles = {
  container : {
      flex: 1,
      marginTop: 60,
  },
  pickerTextStyle : {
    flex : 2,
    fontSize : 20,
    paddingLeft: 20,
    paddingTop: 8,
  }
}

const mapStateToProps = (state, ownProps) => {
const { name, phone, position, shift } = state.createEmployee;
return {
  name : name,
  phone : phone,
  position : position,
  shift : shift,
}
}
export default cEmployeeForm;