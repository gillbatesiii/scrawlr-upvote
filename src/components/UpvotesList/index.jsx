import Upvote from "~/components/Upvote/index.jsx";
import Plus from './plus.svg?react';
import {useContext, useState} from "react";
import {UpvoteContext} from "~/UpvoteContext.jsx";

export default function UpvotesList({ id }) {
    const { data: { upvoteLists }, incrementUpvoteCount } = useContext(UpvoteContext);
    const upvoteList = upvoteLists.find((upvoteList) => upvoteList.id === id);
    const [isSelected, setIsSelected] = useState(false);
    let upvoteComponentsList = [];

    for (let i = 0; i < upvoteList.upvotesCount; i++) {
        upvoteComponentsList.push(<Upvote key={i} selected={isSelected} onSelectionToggle={setIsSelected} />);
    }

    return <div>
        {upvoteComponentsList}
        <button onClick={() => incrementUpvoteCount(id)}><Plus /></button>
    </div>
}