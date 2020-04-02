const initialState = {
    loading : false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case 'START_LOADER' : {
            return {...state,
                loading : true
            }
        }
        
        case 'STOP_LOADER' : {
            return {...state,
                loading : false
            }
        }

        case 'ADD_CONTANIER_NODES' : {
            return {
                ...state,
                contaniernodes : action.payload.contaniernodes
            }
        }

        case "FETCH_EDITOR_CONTENT":{
            return {
                ...state,
                editorcontent :action.payload.editorcontent
            }
        }
    
        default:
            return state;
    }
}