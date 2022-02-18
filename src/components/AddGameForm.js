import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGame } from "../features/listSlice";
import { v4 as uuidv4 } from "uuid";

const AddGameForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setPlayers(players.split(""));
        dispatch(
            addGame({
                name: name,
                players: players,
                time: time,
                type: type,
                id: uuidv4(),
            })
        );
        setName("");
        setPlayers("");
        setTime("");
        setType("");        
    };
   
    return (
        <div className="addGameFormContainer">
            <h2>Add New Game...</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Name of Game"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
                <br />
                <label> No. of Players: </label>
                <input
                    type="text"
                    placeholder="Example: 2345"
                    value={players}
                    onChange={(event) => setPlayers(event.target.value)}
                ></input>
                <aside>(please enter every possible number of players between 1 and 9, with no spaces.)</aside>
                <label>Average game length (in minutes): </label>
                <input
                    type="number"
                    placeholder="Game length in mins"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                ></input>
                <br />
                <label>Co-Op or Versus: </label>
                <input
                    type="text"
                    placeholder="Please put 'C' or 'V'"
                    value={type}
                    onChange={(event) => {
                        const e = event.target.value.toUpperCase();
                        setType(e);}
                    }
                    ></input>                    
                    <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddGameForm;