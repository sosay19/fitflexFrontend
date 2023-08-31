// store/member/memberSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MemberState {
    id: number;
    name: string;
    // Other member-related properties
}

const initialState: MemberState = {
    id: 0,
    name: '',
    // Initialize other properties
};

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setMemberData(state, action: PayloadAction<MemberState>) {
            return action.payload;
        },
        // Other member-related actions
    },
});

export const { setMemberData } = memberSlice.actions;

export default memberSlice.reducer;
