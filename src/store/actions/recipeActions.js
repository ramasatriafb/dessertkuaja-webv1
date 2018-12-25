export const createRecipe = (recipe) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        dispatch({ type: 'CREATE_RECIPE', recipe})
    }
};

