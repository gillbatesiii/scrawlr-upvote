import Upvote from "~/components/Upvote/index.jsx";
import Plus from './plus.svg?react';
import {useState} from "react";

export default function UpvotesList() {
    const [isSelected, setIsSelected] = useState(false);
    const [upvotesCount, setUpvotesCount] = useState(0);

    let upvoteList = [];

    for (let i = 0; i < upvotesCount; i++) {
        upvoteList.push(<Upvote key={i} selected={isSelected} onSelectionToggle={setIsSelected} />);
    }

    return <div>this is upvoteslist
        {upvoteList}
        <button onClick={() => setUpvotesCount(prevCount => prevCount + 1)}><Plus /></button>
    </div>
}