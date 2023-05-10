import { ChangeProfile } from "./ChangeProfile";
import {AppContext} from '../App';
import { useContext } from 'react';

export const Profile = () => {
    const {userName} = useContext(AppContext);
    return( 
        <div>
            Profile page, user : {userName}
            <ChangeProfile />
        </div>
    );
};