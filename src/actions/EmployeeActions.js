import firebase from 'firebase';
import {EMPLOYEE_UPDATE} from './type'

export const employeeUpdate = ({ prop, value})=>{
 return {
   type : EMPLOYEE_UPDATE,
   payload : { prop, value}  
 };
}
export const employeeCreate = ({name, phone, position, shift}) =>{
  const {currentUser} = firebase.auth()

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name , phone, position,shift })
}