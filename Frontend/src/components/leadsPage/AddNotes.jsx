import React from "react";
import { updateDateTime } from "../../utils";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const handleAddNote = () => {
    if (noteInput.trim() !== "") {
      const newNote = {
        text: noteInput,
        time: new Date().toLocaleString(), 
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNoteInput("");
    }
  };

  const handleChange = (e) => {
    setNoteInput(e.target.value);
  };

  return (
    <>
      <Card sx={{ borderRadius: 2, boxShadow: 3, width: "122vh", marginTop:"20px" }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add Note
          </Typography>

          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              placeholder="Type your note here..."
              variant="outlined"
              size="small"
              value={noteInput}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              onClick={handleAddNote}
              sx={{
                backgroundColor: "#1e293b",
                width: 150,
                "&:hover": { backgroundColor: "#374151" },
              }}
            >
              Add Note
            </Button>
          </Stack>

          {/* Notes List */}
          {notes.length > 0 && (
            <List sx={{ mt: 2, bgcolor: "#f9fafb", borderRadius: 1 }}>
              {notes.map((note, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary={note.text} secondary={note.time} />
                  </ListItem>
                  {index !== notes.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default AddNotes;
