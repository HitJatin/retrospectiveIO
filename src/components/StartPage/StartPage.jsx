import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { TextField } from "@mui/material";
import "./StartPage.css";

class StartPage extends Component {
  state = {
    name: "",
    meetingId: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeMeeting = (event) => {
    this.setState({
      meetingId: event.target.value,
    });
  };

  render() {
    return (
      <div id="startPage">
        <div className="workingArea">
          <div className="ideatitle">Let's share our ideas#@!!</div>
          <div className="name">
            <div className="label">Name:</div>
            <TextField id="outlined-required" label="Name" />
          </div>
          <div className="session">
            <div className="newSession">
              <button>Start new Session</button>
            </div>
            <div className="existingSession">
              <div className="sessionID">SessionID:</div>
              <input />
              <button>Join session</button>
            </div>
          </div>
        </div>
        <div className="displayArea">Add Image here</div>
        {/* <h4>Start Session</h4>
        Name:
        <input
          type="text"
          id="user"
          placeholder="Enter Your Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br></br>
        <br></br>
        Meeting Id:
        <input
          type="text"
          id="meetingId"
          placeholder="Enter meeting id"
          onChange={this.handleChangeMeeting}
          value={this.state.meetingId}
        />
        <button onClick={() => this.props.onConnect(this.state.name, this.state.meetingId)}>Join a meeting</button> <br></br>
        <button onClick={() => this.props.onConnect(this.state.name)}>Start new meeting</button> <br></br>
        {this.props.sessionID? <Navigate to={`/${this.props.sessionID}`} />: <></>} */}
      </div>
    );
  }
}

export default StartPage;