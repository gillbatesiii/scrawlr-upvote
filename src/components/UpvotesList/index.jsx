import Upvote from '~/components/Upvote/index.jsx';
import Plus from './plus.svg?react';
import { useContext } from 'react';
import { UpvoteContext } from '~/UpvoteContext.jsx';
import PropTypes from 'prop-types';
import './upvotes-list.css';

export default function UpvotesList({ id }) {
    const {
        data: { upvoteLists },
        incrementUpvoteCount,
        toggleSelected,
    } = useContext(UpvoteContext);
    const upvoteList = upvoteLists.find((upvoteList) => upvoteList.id === id);
    let upvoteComponentsList = [];

    for (let i = 0; i < upvoteList.upvotesCount; i++) {
        upvoteComponentsList.push(
            <Upvote
                key={i}
                selected={upvoteList.selected}
                onSelectionToggle={() => toggleSelected(id)}
            />
        );
    }

    return (
        <div className={'upvotes-list-container'}>
            <div className={upvoteComponentsList.length > 0 ? 'upvote-button-container' : null}>
                {upvoteComponentsList}
            </div>
            <button onClick={() => incrementUpvoteCount(id)}>
                <Plus />
            </button>
        </div>
    );
}

UpvotesList.propTypes = {
    id: PropTypes.number.isRequired,
};
