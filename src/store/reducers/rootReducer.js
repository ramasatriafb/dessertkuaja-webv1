import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import {combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer, //reducer untuk authentication
    recipe: recipeReducer, // reducer untuk resep
    firestore: firestoreReducer, // reducer untuk firestore
    firebase: firebaseReducer //reducer untuk firebase
});

export default rootReducer
