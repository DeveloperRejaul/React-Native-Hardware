import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

interface cameraState {
  images: string[];
}

const initialState: cameraState = {
  images: [''],
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.images.unshift(action.payload);
    },

    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload.reverse();
    },
  },
});

export const {setImage, setImages} = cameraSlice.actions;
export const selectImages = (state: RootState) => state.camera.images;
export default cameraSlice.reducer;
