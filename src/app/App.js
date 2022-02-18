import React from 'react';
import FiltersForm from '../components/FiltersForm';
import List from '../features/List';
import AddGameForm from "../components/AddGameForm";
import "./App.css";


const App = () => {
    return (
        <div>
            <header>                
                <h1>THE GAME VAULT</h1>
            </header>
            <main>
                <div className='bothForms'>
                    <AddGameForm></AddGameForm>
                    <FiltersForm></FiltersForm>
                </div> 
                <div className="listContainer">                                                  
                    <List></List>
                </div>
            </main>
            <footer>
                <a href="./App.js"><h4>The Game Vault</h4></a>
                <hr />
                <p>A boardgame selection app, built with React and Redux, by Ed Hampton.  Copyright 2022.</p>
            </footer>
        </div>
    );
};

export default App;
