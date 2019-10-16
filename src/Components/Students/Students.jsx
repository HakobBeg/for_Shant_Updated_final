import React from "react";
import { connect } from "react-redux";
import StudentsCss from './Students.module.css'

import StudentInputCss from "../Student_Input/Student_Info.module.css";
import { fullNameValidator } from "../../Validators";
import { removeStudentAction, updateStudentAction } from "../../Redux/ActionCreators";
import { render } from "react-dom";



class StudentInfo extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentForm: "show",
            fioInput:props.fullname,
            dateInput:props.Sdate,
            performanceInput:props.Sperformance
        };

        this.onEditButtonChange = this.onEditButtonChange.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);

        this.fioInputHandler = this.fioInputHandler.bind(this);
        this.dateInputHandler = this.dateInputHandler.bind(this);
        this.performanceInputHandler = this.performanceInputHandler.bind(this);
    };




    fioInputHandler = (event) => {
        this.setState(Object.assign({}, this.state, {fioInput: event.target.value}));

    };



    dateInputHandler = (event) => {

        this.setState(Object.assign({}, this.state, {dateInput: event.target.value}));

    };

    performanceInputHandler = (event) => {

        this.setState(Object.assign({}, this.state, {performanceInput: event.target.value}));

    };

    onEditButtonChange(){
        this.setState({currentForm:"edit"});

    }

    onCancelButtonClick(){
        this.setState({currentForm:"show"});
    }

    onSaveButtonClick(){
        if(this.state.dateInput===""){alert("check date!"); return}
        if(this.state.performanceInput===""){alert("check performance!");return}
        if(fullNameValidator(this.state.fioInput)!==""){alert(fullNameValidator(this.state.fioInput)); return}

        this.props.dispatch(updateStudentAction(this.props.id,{id:this.props.id,fullName:this.state.fioInput,date:this.state.dateInput,Studentperformance: this.state.performanceInput}));
        this.setState({currentForm:"show"});
    }

    onRemoveButtonClick(){
        this.props.dispatch(removeStudentAction(this.props.id));
        this.setState({currentForm:"removed"});
    }

    render() {
        switch (this.state.currentForm) {
            case "show":
                return (
                    <div className={StudentsCss.StudentInfo}>
                        <p>{this.props.fullname}</p>
                        <p>{this.props.Sdate}</p>
                        <p>{this.props.Sperformance}</p>

                        <div className={StudentsCss.buttons}>
                            <button onClick={this.onRemoveButtonClick}>Remove</button>
                            <button onClick={this.onEditButtonChange}>Edit</button>
                        </div>

                    </div>
                );
            case "edit":
                return(

                    <div className={StudentsCss.InputSpace}>

                <input type="text" value={this.state.fioInput} onChange={this.fioInputHandler}/>
                <input  type="date" max="2020-00-00"  value={this.state.dateInput} onChange={this.dateInputHandler}/>
                <select value={this.state.performanceInput} onChange={this.performanceInputHandler}>
                <option value="Exelent">Exelent</option>
                <option value="Good">Good</option>
                <option value="Normal">Normal</option>
                <option value="Bad">Bad</option>
                </select>
                        <div className={StudentsCss.inputButtons}>
                <button onClick={this.onSaveButtonClick}>Save</button>
                <button onClick={this.onCancelButtonClick} >Cancel</button>
                        </div>
                </div>

                );
            case "removed":
                return (<div></div>);
        }
    }
}




const Students = (props)=>{
    const studentsInfo = props.studentsList.students.map(item => <StudentInfo id={item.id}
                                                                                   fullname={item.fullName}
                                                                                   Sdate={item.date}
                                                                                   Sperformance={item.Studentperformance} dispatch={props.dispatch}/>);
    return(
        <div className={StudentsCss.StudentInfoSpace}>
            {studentsInfo}

        </div>
    );

}


const mapDispatchToProps = (dispatch) => ({
    dispatch
});



export default connect(store => store,mapDispatchToProps)(Students);