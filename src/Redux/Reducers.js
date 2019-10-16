import { newStudentInput, removeStudent, updateStudent } from "../Constants";
import {
    addData,
    addDataToStorage,
    getDataFromStorage,
    removeDataFromStorage
} from "../StorageWorker/Storage_Functions";




export const studentDataChangeReducer = (state={students:[]},action)=>{


    switch (action.type) {
        case newStudentInput:
            addDataToStorage(action.payload);
            return Object.assign({},state,state.students.push(action.payload));
        case removeStudent:
        {

            const id =action.payload;
            let newState = Object.assign({},state);
            newState.students.forEach((student)=> {
                if(student['id']===id) {

                    newState.students.splice(newState.students.indexOf(student),1);
                    removeDataFromStorage(id);
                    return newState;

                }
            return state;
            });

        }
        case updateStudent:
            let newState = Object.assign({},state);
            newState.students.forEach((student)=>{
                if(student['id']===action.payload.id)
                {
                    student=action.payload.uStudent;
                    removeDataFromStorage(action.payload.id);
                    addDataToStorage(action.payload.uStudent);
                    return newState;
                }
            });
            return state;

        default:
            return state;
    }
};





export const rootReducer = {
    studentsList: studentDataChangeReducer,
};