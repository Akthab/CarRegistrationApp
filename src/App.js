
import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import car from './car.png';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const App = () => {
    const useStyles = makeStyles((theme) => ({
        textField: {
            margin: "10px 0",
            width: "30%,"
        }
    }));


    const classes = useStyles();
    return (
        <div className="App">
            <img src={car} style={{ width: "300px" }} />
            <h1>Car Registration Application</h1>
            <form className="App">
                <TextField id="outlined-basic" label="Brand" variant="outlined" className={classes.textField} />
                <TextField id="outlined-basic" label="Year of Make" variant="outlined" className={classes.textField} />
                <TextField id="outlined-basic" label="Engine Capacity" variant="outlined" className={classes.textField} />
                <TextField id="outlined-basic" label="Number" variant="outlined" className={classes.textField} />
                <Button variant="contained">Register</Button>
            </form>
        </div>
    );
}

export default App;
