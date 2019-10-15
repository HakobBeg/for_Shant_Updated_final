import React from 'react'
import BoardCss from './Board.module.css'
import StudentInput from "../Student_Input/Student_Input";
import Students from "../Students/Students";


const Board = ()=>{


    return(
       <div className={BoardCss.StudentsBoard}>
        <p>STUDENTS</p>

           <StudentInput/>
           <Students/>
       </div>
    );



};


export default Board;