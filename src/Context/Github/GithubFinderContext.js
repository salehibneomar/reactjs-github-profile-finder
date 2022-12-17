import { createContext, useState } from "react";

const SITE_URL = process.env.REACT_APP_SITE_URL;
const SITE_TOKEN = process.env.REACT_APP_SITE_TOKEN;

const GithubFinderContext = createContext();

export const GithubFinderProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    const searchUsers = async (searchKey) => {
        setIsLoading(true);
        
        const response = await fetch(`${SITE_URL}/search/users?q=${searchKey}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${SITE_TOKEN}`,
            },
        });

        if(response.status!==200){
            throw new Error('Server Error Occurred!');
        }

        const data = await response.json();
        setUsers(data.items);
        setIsLoading(false);
        
        return data.items;
    }

    const clearSearchItems = () => {
        setUsers([]);
    }

    const getUserProfile = async (name) => {
        setIsLoading(true);
        
        const response = await fetch(`${SITE_URL}/users/${name}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${SITE_TOKEN}`,
            },
        });

        if(response.status!==200){
            throw new Error(response.status);
        }

        const data = await response.json();
        setUserProfile(data);
        setIsLoading(false);
    }

    return (
        <GithubFinderContext.Provider value={{
            users, 
            isLoading,
            userProfile,
            searchUsers,
            clearSearchItems,
            getUserProfile,
            }}>
            {props.children}
        </GithubFinderContext.Provider>
    );
}

export default GithubFinderContext;