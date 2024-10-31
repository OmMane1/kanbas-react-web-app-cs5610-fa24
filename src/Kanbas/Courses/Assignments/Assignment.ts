export type Assignment = {
    _id: string;
    title: string;
    course: string;
    availableFrom?: string;
    availableUntil: string;
    dueDate: string;
    points: string;
    description: string;
  };
  
  type AssignmentState = Assignment | undefined;