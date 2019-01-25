import React , { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { CardSection } from "./common";
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress = ()=> {
      Actions.creatEmployee({employee: this.props.employee});
    }
    render(){
        const {name} = this.props.employee;
        return(
          <TouchableOpacity onPress={this.onRowPress}>
            <CardSection>
              <Text style = {styles.titleStyle}>{name}</Text>
            </CardSection>
          </TouchableOpacity>
        );    
    }
}
const styles = {
    titleStyle : {
        fontSize: 18,
        paddingLeft: 20,
    }
}
export default ListItem;