import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose, } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';

import common from "./common";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // reducer 중에 whitelist reducer만 localstorage에 저장합니다.
  whitelist: ["common"],
  blacklist: []// -> 그것만 제외합니다
};



// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
  common
});
  
// export default persistReducer(persistConfig, rootReducer);
const rootPersistReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

//배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));


// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
export const store = createStore(rootPersistReducer, enhancer);