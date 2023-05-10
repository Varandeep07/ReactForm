import { useState } from "react";
import {AppContext} from '../App';
import { useContext } from 'react';

export const ChangeProfile = () => {
    const [newUserName,setNewUserName] = useState("");
    const {setUserName} = useContext(AppContext);
    return (
        <div>
            <input onChange={(event)=> {setNewUserName(event.target.value);}}/>
            <button onClick={()=> {setUserName(newUserName)}}>Change Username</button>
        </div>
    );
};