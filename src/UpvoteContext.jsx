import { createContext, useReducer } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
const initialState = {
    upvoteLists: [{id: 1, upvotesCount: 0}, {id: 2, upvotesCount: 0}, {id: 3, upvotesCount: 0}],
};



const UpvoteContext = createContext({  });



const UpvoteProvider = ({ children }) => {
    const [data, saveData] = useLocalStorage("upvote-app", initialState);
    const toggleSelected = (id) => {};
    const incrementUpvoteCount = (id) => {
        const nextUpvoteList = data.upvoteLists.map((upvoteList) => {})
    };

    return (
        <UpvoteContext.Provider value={{ data, saveData }}>
            {children}
        </UpvoteContext.Provider>
    );
};

export { UpvoteProvider, UpvoteContext };