import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import carsReducer from './carsSlice';


const store =  configureStore({
	reducer: {
		register: registerReducer,
		cars: carsReducer,
	},
});

export type AppDispatch = typeof store.dispatch; 
export type RootState = ReturnType<typeof store.getState>;
export default store;