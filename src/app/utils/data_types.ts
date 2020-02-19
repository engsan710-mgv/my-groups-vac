//Defines all potential members
export interface Member {
  first_name: string;
  last_name: string;
  vacation: Date[];
}

//Defines the session's user
export interface User {
    email: string;
    id: string,
    groups:string[]
}

export interface VacationWeek {
  Member: string;
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
}