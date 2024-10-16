import Upvote from "~/components/Upvote/index.jsx";
import Plus from './plus.svg?react';
import {useContext, useState} from "react";
import {UpvoteContext} from "~/UpvoteContext.jsx";

export default function UpvotesList({ id }) {
    const { data: { upvoteLists }, incrementUpvoteCount, toggleSelected } = useContext(UpvoteContext);
    const upvoteList = upvoteLists.find((upvoteList) => upvoteList.id === id);
    let upvoteComponentsList = [];

    for (let i = 0; i < upvoteList.upvotesCount; i++) {
        upvoteComponentsList.push(<Upvote key={i} selected={upvoteList.selected} onSelectionToggle={() => toggleSelected(id)} />);
    }

    return <div>
        {upvoteComponentsList}
        <button onClick={() => incrementUpvoteCount(id)}><Plus /></button>
    </div>
}