import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducer';
import { apiSlice } from '../Components/api/apiSlice';

import authReducer from '../Components/auth/authSlice';

import thunk from "redux-thunk"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ArticleReducer from './reducer/ArticleReducer';


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
export default store

// export  const store = configureStore({
//   reducer:{
//     rootreducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth : authReducer,
    
   
//   },
//   middleware: getDefaultMiddleware=>
//   getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// })