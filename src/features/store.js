import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import carsReducer from './carsSlice';


export default configureStore({
	reducer: {
		register: registerReducer,
		cars: carsReducer,
	},
});