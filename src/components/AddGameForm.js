import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGame } from "../features/listSlice";
import { v4 as uuidv4 } from "uuid";

const AddGameForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [minPlayers, setMinPlayers] = useState("");
    const [maxPlayers, setMaxPlayers] = useState("");
    const [players, setPlayers] = useState([]);
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = minPlayers; i <= maxPlayers; i++) {
            let payload = parseInt(i)
            setPlayers(players.push(payload));
        };
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
        setMinPlayers("");
        setMaxPlayers("");
        setPlayers([]);
        setTime("");
        setType("");        
    };

    const handleMinPlayerInput = (event) => {
        if (event.target.value > 0 || event.target.value === "") {
            setMinPlayers(event.target.value);
        } else {
            alert("Please enter a whole number greater than 0!");
            setMinPlayers("");
        };
        if (maxPlayers !== "" && event.target.value > maxPlayers) {
            alert("Players (min) must be equal to or less than Players (max)!");
            setMinPlayers("");
        };
    };

    const handleMaxPlayerInput = (event) => {
        if (event.target.value > 0 || event.target.value === "") {
            setMaxPlayers(event.target.value);
        } else {
            alert("Please enter a whole number greater than 0!");
            setMaxPlayers("");
        };
        if (minPlayers !== "" && minPlayers > event.target.value) {
            alert("Players (min) must be equal to or less than Players (max)!");
            setMaxPlayers("");
        };
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
                <label> Players (min): </label>
                <input
                    type="text"
                    placeholder="minimum required players"
                    value={minPlayers}
                    onChange={handleMinPlayerInput}
                ></input>
                <br />
                <label> Players (max): </label>               
                <input
                    type="text"
                    placeholder="maximum possible players"
                    value={maxPlayers}
                    onChange={handleMaxPlayerInput}
                ></input>
                <br />             
                <label>Average game time (in minutes): </label>
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