export const createRecipe = (recipe) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('recipes').add({
            ...recipe,
            namadepanAuthor: 'Natasya',
            namaBelakangAuthor: 'Adela',
            authorId: 123456,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPE', recipe}) //-> diolah CREATE_RECIPE ke recipe Reducer
        }).catch((err)=> {
            dispatch({ type: 'CREATE_RECIPE_ERROR', err}) ////-> diolah CREATE_RECIPE ke recipe Reducer
        })
        
    }
};

// disini state diolah untuk diinputkan ke database firebase