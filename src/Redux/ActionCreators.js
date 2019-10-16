import {

    newStudentInput,
     removeStudent, updateStudent
} from "../Constants";


export const newStudentSetActionCreator=(newStudent)=>{return {type:newStudentInput, payload:newStudent}};


export const removeStudentAction = (id) =>{return {type:removeStudent,payload:id}};
export const updateStudentAction = (id,upDatedStudent)=>{return {type:updateStudent,payload:{id:id,uStudent:upDatedStudent}}};