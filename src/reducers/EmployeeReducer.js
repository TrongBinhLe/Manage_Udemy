import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_RESET_FORM,

} from '../actions/type'

const INIT_STATE = {

    name : '',
    phone : '',
    position : '',
    shift : '',
    loading : false

};

export default (state = INIT_STATE, action) => {

    switch(action.type){
        case EMPLOYEE_UPDATE:
            return {
                // action.payload === {prop : 'name', value = 'jane'}
                ...state, [action.payload.prop] : action.payload.value , loading : false
            };
        case EMPLOYEE_CREATE:
            return {...INIT_STATE , loading : true};
        case EMPLOYEE_RESET_FORM:
            return INIT_STATE;
        default:
            return state;
    }
}