import {
    dateInputChange,
    fullNameInputChange,
    fullNameInputChnage,
    newStudentInput,
    performanceInputChange, removeStudent, updateStudent
} from "../Constants";


export const newStudentSetActionCreator=(newStudent)=>{return {type:newStudentInput, payload:newStudent}};
export const fullNameChangeAction = (text) =>{return {type:fullNameInputChange,payload:text}};
export const dateChangeAction = (date) =>{return {type:dateInputChange,payload:date}};
export const performanceChangeAction = (performance) =>{return {type:performanceInputChange,payload:performance}};

export const removeStudentAction = (id) =>{return {type:removeStudent,payload:id}};
export const updateStudentAction = (id,upDatedStudent)=>{return {type:updateStudent,payload:{id:id,uStudent:upDatedStudent}}};