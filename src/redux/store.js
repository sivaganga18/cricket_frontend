import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { authReducer } from "./auth/authSlice";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY_REDUX || "cricket",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const combinedReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

// TODO: for future use - if we want to remove store from localstorage
// const rootReducer = (state, action) => {
//
//     // when a logout action is dispatched it will reset redux state
//     if (action.type === 'auth/logOut') {
//         state = undefined;
//     }

//     return appReducer(state, action);
// };

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

const persistor = persistStore(store); // used to create the persisted store, persistore will be used in the next step

export { store, persistor };
