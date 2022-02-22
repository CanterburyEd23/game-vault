import React from "react";
import { useDispatch } from "react-redux";
import { deleteGame } from "./listSlice";

const ListTile = ({name, players, time, type, id}) => {
    // code to calculate how to display number of players, based on the array in listSlice
    const playersStart = players[0];
    const playersEnd = players.length -1;
    let people;
    if (playersStart === players[playersEnd]) {
        people = `${playersStart} player`;
    } else {
        people = `${playersStart} - ${players[playersEnd]} players`;
    };
    
    //Calculating the type of game, C or V
    const gameType = type === "C" ? "Co-op" : "Versus";

    //Handling a user pressing the delete game button on a tile
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(
            deleteGame({ id })
        );
    };

    return (
        <li className="listTile">            
            <h3>{name}</h3>                        
            <br />
            {`${time} mins`}
            <br /><br />
            {`${people}`}
            <br /><br />
            {`${gameType}`}
            <br />
            <button className="deleteButton" onClick={handleDeleteClick}>
                X
            </button>
        </li>
    );
};

export default ListTile;