const startLoader = (dispatch,a)=>{
    return dispatch({ type: "START_LOADER" });
}
  
const stopLoader = (dispatch)=>{
    return dispatch({ type: "STOP_LOADER" });
}

export const addNodeValue = (data) => dispatch => {
    console.log(data);
    return new Promise(function(resolve, reject) {
        startLoader(dispatch,1);
        var contaniernodes = [];
        contaniernodes = JSON.parse(localStorage.getItem('nodesArr')) || [];
        if(data.is_parent){
            var parent_node = {
                _id         : contaniernodes.length+ 1,
                parent_id    : null,
                nodename    : data.nodeval,
                is_leaf     : data.is_leaf ,
            }
        }else{
            var parent_id = data.parent_id;
            var parent_node = {
                _id         : contaniernodes.length+ 1,
                parent_id    : parent_id,
                nodename    : data.nodeval,
                is_leaf     : data.is_leaf ,
            }
        }
        contaniernodes.push(parent_node);
        localStorage.setItem('nodesArr', JSON.stringify(contaniernodes));
        
        stopLoader(dispatch);
        dispatch({
            type: "ADD_CONTANIER_NODES",
            payload: {
                contaniernodes : contaniernodes
            }
        });
        resolve(true);
    })
}


export const getContanierNodes = () => dispatch =>{
    startLoader(dispatch,1);
    var contaniernodes = [];
    contaniernodes = JSON.parse(localStorage.getItem('nodesArr')) || [];
        
    stopLoader(dispatch);
    return dispatch({
        type: "ADD_CONTANIER_NODES",
        payload: {
            contaniernodes : contaniernodes
        }
    });
}


export const getChildNodes = (data) => dispatch =>{
    startLoader(dispatch,1);
    var contaniernodes = [];
    contaniernodes = JSON.parse(localStorage.getItem('nodesArr')) || [];
  
    var childnodes = contaniernodes.filter(obj=>obj.parent_id === data.parent_id);
    
    return new Promise(function(resolve, reject) {
        stopLoader(dispatch);
        resolve(childnodes);
    })
}

export const getEditorContent = () => dispatch =>{
    startLoader(dispatch,1);
    var editorcontent = [];
    editorcontent = JSON.parse(localStorage.getItem('editordata')) || [];
    
    if(editorcontent.length == 0){
        //storing for initial content
        editorcontent = [
            {
                topic_name : 'Topic 1',
                topic_content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+ 
                +'Ut enim ad a veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '+
                +'dolor in reprehenderit in voluptate velit esse cilluma dolore eu fugiat nulla pariatur.'
            },{
                topic_name : 'Topic 2',
                topic_content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+ 
                +'Ut enim ad a veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '+
                +'dolor in reprehenderit in voluptate velit esse cilluma dolore eu fugiat nulla pariatur.'
            }
        ]
       localStorage.setItem('editordata', JSON.stringify(editorcontent));
    }
    
    stopLoader(dispatch);
    return dispatch({
        type: "FETCH_EDITOR_CONTENT",
        payload: {
            editorcontent : editorcontent
        }
    });  
}