import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {
  ListView,
  View,
  Text,
  TouchableOpacity} from 'react-native';
import {employeeFetch} from '../actions/EmployeeActions' ;
import  ListItem  from './ListItem';
import { Actions } from 'react-native-router-flux'

class EmployeeList extends Component {
    
    componentWillMount(){
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource =  ds.cloneWithRows(employees);
    }

    renderRow = (employee)=> {
      return (
        <ListItem employee = {employee}/>  
      );
    }
    render(){
        return(
            <View style ={{flex : 1, marginTop : 60}}>
              <ListView 
                enableEmptySections
                dataSource = { this.dataSource }
                renderRow = {this.renderRow}
              />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const employees = _.map(state.employees,(val, uid)=>{
        return {...val, uid}; //{shift : "Monday",name : "S", id : "12jjfjsd"}
    });
    return {employees}

}
export default connect(mapStateToProps,{ employeeFetch })(EmployeeList);