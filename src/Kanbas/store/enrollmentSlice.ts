import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: string[]; 
}

const loadStateFromLocalStorage = (): string[] => {
  const storedEnrollments = localStorage.getItem("enrollments");
  return storedEnrollments ? JSON.parse(storedEnrollments) : [];
};

const initialState: EnrollmentState = {
  enrollments: loadStateFromLocalStorage(),
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollInCourse: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      if (!state.enrollments.includes(courseId)) {
        state.enrollments.push(courseId);
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },
    unenrollFromCourse: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.enrollments = state.enrollments.filter((id) => id !== courseId);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;