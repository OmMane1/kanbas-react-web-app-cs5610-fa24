import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const getAllAssignments = async () => {
  const { data } = await axios.get(ASSIGNMENTS_API);
  return data; 
};

export const getAssignmentById = async (assignmentId: string) => {
    const url = `${ASSIGNMENTS_API}/${assignmentId}`;
    console.log("Fetching assignment from URL:", url); 
    
      const { data } = await axios.get(url);
      console.log("Response data:", data); 
      return data; 
  };
  

export const createAssignment = async (assignment: any) => {
  const { data } = await axios.post(ASSIGNMENTS_API, assignment);
  console.log("Server response inside createAssignment:", data);
  return data; 
};

export const updateAssignment = async (assignmentId: any, updates: any) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, updates);
  return data; 
};

export const deleteAssignment = async (assignmentId: any) => {
  await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};
