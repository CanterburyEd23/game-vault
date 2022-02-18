import React from "react";
import ListTile from "./ListTile";
import { useSelector } from "react-redux";

const List = () => {
    const fullList = useSelector((state) => state.listSlice);
    const playerSelector = useSelector((state) => state.filtersSlice.players);
    console.log(playerSelector);
    const lengthSelector = useSelector((state) => state.filtersSlice.length);
    const typeSelector = useSelector((state) => state.filtersSlice.type);

    let playerFilter;
    if (playerSelector === "any") {
        playerFilter = fullList;
    } else {
        playerFilter = fullList.filter((game) => game.players.includes(playerSelector));
    };

    let lengthFilter;
    if (lengthSelector === "any") {
        lengthFilter = playerFilter;
    } else {
        lengthFilter = playerFilter.filter((game) => game.time <= lengthSelector);
    };
    
    let typeFilter;
    switch(typeSelector) {
        case "C":
            typeFilter = lengthFilter.filter((game) => game.type === "C");
            break;
        case "V":
            typeFilter = lengthFilter.filter((game) => game.type !== "C");
            break;
        default:
            typeFilter = lengthFilter;
    };
    
    return (
        <div className="list">
            <h2>Available Games</h2>
            <ul>
                {typeFilter.map((game) => (
                    <ListTile
                        name={game.name}
                        players={game.players}
                        time={game.time}
                        type={game.type}
                        key={game.id}
                    />
                ))}
            </ul>
            <p>Game times listed are an average, and should only be used as a rough guide.</p>
            <p>A few games do not fit neatly into the Co-Op or Versus categories (such as Betrayal at House on the Hill), but have been assigned one or the other out of necessity.</p>
            <p>The time listed for Kingdom Death: Monster is for one session, rather than an entire campaign.</p>
        </div>
    );
};

export default List;