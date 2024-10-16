import { createContext } from 'react';
import { useSessionStorage } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';

const initialState = {
    upvoteLists: [
        {
            id: 1,
            upvotesCount: 0,
            selected: false,
        },
        {
            id: 2,
            upvotesCount: 0,
            selected: false,
        },
        {
            id: 3,
            upvotesCount: 0,
            selected: false,
        },
    ],
};

const UpvoteContext = createContext({});

const UpvoteProvider = ({ children }) => {
    const [data, saveData] = useSessionStorage('upvote-app', initialState);
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
                return {
                    ...upvoteList,
                    upvotesCount: upvoteList.upvotesCount + 1,
                };
            }
            return upvoteList;
        });
        saveData({ ...data, upvoteLists: nextUpvoteLists });
    };

    return (
        <UpvoteContext.Provider
            value={{ data, incrementUpvoteCount, toggleSelected, saveData }}
        >
            {children}
        </UpvoteContext.Provider>
    );
};

UpvoteProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { UpvoteProvider, UpvoteContext };
