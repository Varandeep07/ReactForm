import {AppContext} from '../App';
import { useContext } from 'react';

export const Home = () => {
    const {userName} = useContext(AppContext);
    return(    
        <h1>This is home page of {userName}</h1>
    );
};

export default Home;