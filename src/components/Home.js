import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
// Way to fetch data from api

export const Home = () => {
    const {
        data: catData,
        isLoading,
        isError,
        refetch
    } = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
    });

    if(isError){
        return <h1>Sorry, there was an erro</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <h1>
            CAT FACT, HOMPAGE: <h3>{catData?.fact}</h3>
            <button onClick={refetch}>Update Data</button>
        </h1>
    );
}