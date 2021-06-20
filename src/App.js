import logo from './logo.svg';
import './App.css';
import {
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="header">Todo List</div>
      <div className="input_area">
        <TextField label="제목" size="normal" margin="normal" fullWidth required/>
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline/>
      </div>
      <div className="list_area">리스트 영역</div>
      <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright ⓒ 김종태 " + new Date().getFullYear() + "."}
      </Typography>
    </div>
  );
}

export default App;
