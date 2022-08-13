import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./PrivateNote.css";
import Note from "../Note/Note";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

class PrivateNote extends Component {
  state = {
    note: "",
    allNotes: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis repellendus incidunt quidem? Quasi dolores culpa optio excepturi cum .", "note1", "note2", "note3", "note4", "note5"],
  };

  handleChange = (event) => {
    this.setState({
      note: event.target.value,
    });
  };

  deleteText = (event) => {
    this.setState({
      note: "",
    });
  };

  addNote = () => {
    let notes = this.state.allNotes;
    notes.push(this.state.note);
    this.setState({
      allNotes: notes,
    });
  };

  deleteNote = (delnote) => {
    let updatedNotes = this.state.allNotes;
    let deleteNoteIndex = this.state.allNotes.findIndex(
      (note) => note == delnote
    );
    if (deleteNoteIndex !== -1) {
      updatedNotes.splice(deleteNoteIndex, 1);
    }
    this.setState({
      allNotes: updatedNotes,
    });
  };

  render() {
    return (
      <div class="privateNote">
        <div className="notesSpace">
          {this.state.allNotes.map((i) => (
            <Note
              note={i}
              deleteNote={this.deleteNote}
              sendNote={this.props.sendNote}
              sessionID={this.props.sessionID}
              instanceID={this.props.instanceID}
            />
          ))}
        </div>
        {/* <div className="newNote">
          <TextField
            id="outlined-multiline-flexible"
            label="Private-Note"
            multiline
            maxRows={2}
            sx={{ m: 2, width: "50ch" }}
            value={this.state.note}
            onChange={this.handleChange}
          />
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            sx={{ m: 1 }}
            onClick={this.addNote}
          >
            <AddIcon />
          </Fab>
          <Button 
          variant="contained" 
          endIcon={<SendIcon />} sx={{ m: 1 }} 
          onClick={() => this.state.allNotes.map((i) => 
             this.props.sendNote( i,this.props.sessionID,this.props.instanceID)
          )} 
          >
            Send
          </Button>
        </div> */}
        {/* <h4>Private Note</h4>
        <textarea
          id="comment"
          name="notes"
          rows="7"
          cols="30"
          onChange={this.handleChange}
          value={this.state.note}
        />
        <br></br>
        <button
          onClick={() =>
            this.props.sendNote(
              this.state.note,
              this.props.sessionID,
              this.props.instanceID
            )
          }
        >
          Send
        </button>
        <button onClick={this.deleteText}>Clear</button> */}
      </div>
    );
  }
}

export default PrivateNote;