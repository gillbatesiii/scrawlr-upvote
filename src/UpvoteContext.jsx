import { createContext, useReducer } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
const initialState = {
    upvoteLists: [{id: 1, upvotesCount: 0}, {id: 2, upvotesCount: 0}, {id: 3, upvotesCount: 0}],
};



const UpvoteContext = createContext({});



const UpvoteProvider = ({ children }) => {
    const [data, saveData] = useLocalStorage("upvote-app", initialState);
    const toggleSelected = (upvoteListId) => {
        const nextUpvoteLists = data.upvoteLists.map((upvoteList) => {
            if (upvoteList.id === upvoteListId) {
                return { ...upvoteList, selected: !upvoteList.selected };
            }
            return upvoteList;
        });
        saveData({ ...data, upvoteLists: nextUpvoteLists });
    };
    const incrementUpvoteCount = (upvoteListId) => {
        const nextUpvoteLists = data.upvoteLists.map((upvoteList) => {
            if (upvoteList.id === upvoteListId) {
                return { ...upvoteList, upvotesCount: upvoteList.upvotesCount + 1 };
            }
            return upvoteList;
        });
        saveData({ ...data, upvoteLists: nextUpvoteLists });
    };

    return (
        <UpvoteContext.Provider value={{ data, incrementUpvoteCount, saveData }}>
            {children}
        </UpvoteContext.Provider>
    );
};

export { UpvoteProvider, UpvoteContext };