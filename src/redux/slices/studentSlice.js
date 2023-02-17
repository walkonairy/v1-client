import { createSlice } from "@asow/core/redux";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    id: 10001,
  },
  reducers: {
    updateStudentId(state, action) {
      const { payload } = action;
      state.id = payload;
    },
  },
});

export const { updateStudentId } = studentSlice.actions;
export default studentSlice.reducer;
