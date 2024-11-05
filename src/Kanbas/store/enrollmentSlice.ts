import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: string[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollInCourse: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      if (!state.enrollments.includes(courseId)) {
        state.enrollments.push(courseId);
      }
    },
    unenrollFromCourse: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.enrollments = state.enrollments.filter((id) => id !== courseId);
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
