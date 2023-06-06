//import{configureStore}from "@reduxjs/toolkit"
// personReducer from"./slices/personSlice"
import{createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from"./components/redux/reducers/personReducer"
import personReducer from "./components/redux/reducers/personReducer"
//export default configureStore({reducer:{person:personReducer}})
export default createStore(rootReducer, compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))



//export default configureStore({reducer:{person:personReducer}})
