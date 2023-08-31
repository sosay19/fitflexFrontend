// store/rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import memberReducer from './member/memberSlice'; // Import your member slice

const rootReducer = combineReducers({
  auth: authReducer,
  member: memberReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
