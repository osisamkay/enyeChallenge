const initialState = {
    firstName:"",
    lastName:"",
    age:" ",
    hobby:"",
    birthday:"",
    list:[]
};


export const rootReducer = (state = initialState, { type ,payload}) => {
    switch (type) {
       
        case "firstName":
            return {...state, firstName: payload };
        case "lastName":
            return {...state, lastName: payload };
        case "age":
            return { ...state, age: payload };
        case "hobby":
            return { ...state, hobby: payload };
        case "birthday":
            return { ...state, birthday: payload };
        case "submit":
            return {list: [...state.list,payload] };
        default:
            return state;
    }
};

