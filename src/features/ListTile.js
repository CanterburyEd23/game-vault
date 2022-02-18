import React from "react";

const ListTile = ({name, players, time, type}) => {
    const playersStart = players[0];
    const playersEnd = players.length -1;
    const people = `${playersStart} - ${players[playersEnd]} player`;
    const gameType = type === "C" ? "Co-op" : "Versus";

    return (
        <li className="listTile">            
            <h3>{name}</h3>
            <br />
            {`${time} mins`}
            <br /><br />
            {`${people}`}
            <br /><br />
            {`${gameType}`}
        </li>
    );
};

export default ListTile;