import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import {combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer, //reducer untuk authentication
    recipe: recipeReducer, // reducer untuk resep
    firestore: firestoreReducer // reducer untuk firestore
});

export default rootReducer
