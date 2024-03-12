import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import coreSliceReducer from "@/store/CoreState/reducer";
import skillSliceReducer from "@/store/SkillState/reducer";
import modalSliceReducer from "@/store/ModalState/reducer";
import searchSliceReducer from "@/store/SearchSlice/reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["skills"],
};

const staticReducers = combineReducers({
  core: coreSliceReducer,
  search: searchSliceReducer,
  modals: modalSliceReducer,
  skills: skillSliceReducer,
});

// @ts-expect-error state type not defined yet
const rootReducer = (state, action) => {
  return staticReducers(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
