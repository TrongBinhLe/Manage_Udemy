import {
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/type'

const INIT_STATE = {

}

export default (state = INIT_STATE, action) => {
    switch (action.type){
				case EMPLOYEES_FETCH_SUCCESS:
					console.log(action.type)
					return action.payload
        default :
          return state;
    }
}