import React from "react";
import { useDispatch } from "react-redux";
import { deleteGame } from "./listSlice";

const ListTile = ({name, players, time, type, key}) => {
    const playersStart = players[0];
    const playersEnd = players.length -1;
    const people = `${playersStart} - ${players[playersEnd]} player`;
    const gameType = type === "C" ? "Co-op" : "Versus";

    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(
            deleteGame({ key })
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