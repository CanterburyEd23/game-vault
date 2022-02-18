import React from "react";
import { useDispatch } from "react-redux";
import { setPlayers, setLength, setType } from "../components/filtersSlice";

const FiltersForm = () => {
    const dispatch = useDispatch();
    
    const handleChangePlayers = (event) => {
        let payload;
        if (event.target.value !== "any") {
            payload = parseInt(event.target.value);
        } else {
            payload = "any";
        };
        dispatch(
            setPlayers(payload)
        );
    };
    const handleChangeLength = (event) => {
        dispatch(
            setLength(event.target.value)
        );
    };    
    const handleChangeType = (event) => {
        dispatch(
            setType(event.target.value)
        );
    };

    return (
        <section className="filters">
            <h2>Filter Available Games...</h2>
            <div className="filterOptions" role="presentation">
                <div className="numberOfPlayers">
                    <label>Number of Players</label>
                    <br />
                    <select className="playersDropdown" onChange={handleChangePlayers}>
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>                
                </div>
                <div className="lengthOfGame">
                    <label>Maximum Game Length*</label>
                    <br />
                    <select className="gameLengthDropdown" onChange={handleChangeLength}>
                        <option value="any">Any</option>
                        <option value="10">10 mins</option>
                        <option value="20">20 mins</option>
                        <option value="30">30 mins</option>
                        <option value="45">45 mins</option>
                        <option value="60">1 hour</option>
                        <option value="75">1 hour and 15 mins</option>
                        <option value="90">1 hour and 30 mins</option>
                        <option value="120">2 hours</option>
                        <option value="150">2 hours and 30 mins</option>                
                    </select>
                </div>
                <div className="typeOfGame" onChange={handleChangeType}>
                    <label>Type of Game</label>
                    <br />
                    <input type="radio" value="any" name="typeOfGame" /> All <br />
                    <input type="radio" value="C" name="typeOfGame" /> Co-Op <br />
                    <input type="radio" value="V" name="typeOfGame" /> Versus <br />
                </div>
            </div>
            <p>*Game lengths provided with each game are an average, not a maximum, so care should be taken to ensure your group has time to finish.</p>
        </section>
    );
};

export default FiltersForm;