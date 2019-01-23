import { EMPLOYEE_UPDATE } from '../actions/type'

const INIT_STATE = {
    
    name : '',
    phone : '',
    position : '',
    shift : '',

};

export default (state = INIT_STATE, action) => {

    switch(action.type){
        case EMPLOYEE_UPDATE:
        return {
            // action.payload === {prop : 'name', value = 'jane'}
            ...state, [action.payload.prop] : action.payload.value
        }
        default:
        return state
    }
}