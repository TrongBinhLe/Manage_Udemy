import React,{Component} from 'react';
import { View, Text, Picker } from 'react-native';
import {  Card,
          CardSection,
          Input,
          Button
        }from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions'

class EmployeeCreactor extends Component {
  onButtonPress = () => {
    const {name, phone, position, shift} = this.props;
    this.props.employeeCreate({name, phone, position : position || 'Staff' , shift : shift  || 'Monday' })
  }
    render(){
      console.log(this.props.employee)
      const {container} = styles
        return(
          <View style = {container}> 
            <Card>
              <CardSection>
                <Button onPress = {this.onButtonPress}>Create</Button>
              </CardSection>  
            </Card>   
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

export default connect(mapStateToProps,{ employeeUpdate, employeeCreate })(EmployeeCreactor)