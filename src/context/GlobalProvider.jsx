import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = new createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [movieId, setMovieId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (movieId) {
            setIsLoading(false);
        }
    }, [movieId]);

    const setMovieIdFn = (id) => {
        setMovieId(id);
        setIsLoading(false);
    };

    const setIsEditFn = (value) => {
        setIsEdit(value);
        setIsLoading(!value);
    };
    

    return(
        <GlobalContext.Provider 
            value={{ movieId, setMovieIdFn, isEdit, setIsEditFn, isLoading, setIsLoading}}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;