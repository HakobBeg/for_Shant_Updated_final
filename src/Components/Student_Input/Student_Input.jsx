import React from 'react';
import StudentInputCss from './Student_Info.module.css'
import { connect } from "react-redux";
import { newStudentSetActionCreator, removeStudentAction } from "../../Redux/ActionCreators";
import { fullNameValidator } from "../../Validators";


class StudentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fioInput: "",
            dateInput: "",
            performanceInput: ""
        };

        this.fioInputHandler = this.fioInputHandler.bind(this);
        this.dateInputHandler = this.dateInputHandler.bind(this);
        this.performanceInputHandler = this.performanceInputHandler.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.removeStudent = this.removeStudent(this);

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

    removeStudent = (id)=>{
        this.props.dispatch(removeStudentAction(id));
    };

    onSaveButtonClick = () => {

        if(this.state.dateInput===""){alert("check date!"); return}
        if(this.state.performanceInput===""){alert("check performance!");return}
        if(fullNameValidator(this.state.fioInput)!==""){alert(fullNameValidator(this.state.fioInput));return}

        this.props.dispatch(newStudentSetActionCreator(({id:Math.floor(Math.random()*10000),fullName:this.state.fioInput,date:this.state.dateInput,Studentperformance: this.state.performanceInput})));

    };


    render() {
        return (
            <div className={StudentInputCss.InputSpace}>

                <input onChange={this.fioInputHandler} type="text" placeholder="Name Lastname Surename"/>
                <input onChange={this.dateInputHandler} type="date" max="2020-00-00" placeholder="2020-00-00"/>
                <select onChange={this.performanceInputHandler}>
                    <option value="Exelent">Exelent</option>
                    <option value="Good">Good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                </select>
                <button onClick={this.onSaveButtonClick}>Save</button>
            </div>
        );


    }

}



export default connect(store => store)(StudentInput);



