import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { ListView, View, Text} from 'react-native';
import {employeeFetch} from '../actions/EmployeeActions'

class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch();
    }

    render(){
        return(
            <View style ={{flex : 1, marginTop : 60}}>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        );
    }
}

export default connect(null,{ employeeFetch })(EmployeeList);