const counterReducer = (state,action) =>{
    switch(action.type){
        case "+":
        return(state + 1);
        case "-":
        return(state - 1);
    }
}

export {counterReducer}