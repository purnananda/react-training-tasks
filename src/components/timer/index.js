import React from "react";
import ClassCompTimer from "./classCompTimer";
import FunctionCompTimer from "./functionCompTimer";

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.getDeadline = this.getDeadline.bind(this);
    }

    getDeadline (timeInSeconds) {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + timeInSeconds);
        return deadline;
    }

    render() {
        return (
            // <ClassCompTimer deadline={this.getDeadline(300)} />
            <FunctionCompTimer deadline={this.getDeadline(300)} />
        )
    }
}

export default Timer