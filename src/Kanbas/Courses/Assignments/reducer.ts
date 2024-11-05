
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; 

const initialState = {
  assignments: assignments, 
};

const assignmentsSlice = createSlice({
  name: "assignments", 
  initialState, 
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), 
        title: assignment.title, 
        description: assignment.description, 
        points: assignment.points, 
        dueDate: assignment.dueDate, 
        availableFrom : assignment.availableFrom,
        availableUntil: assignment.availableUntil, 
        course: assignment.course, 
      };
      state.assignments.push(newAssignment); 
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId 
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a 
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
