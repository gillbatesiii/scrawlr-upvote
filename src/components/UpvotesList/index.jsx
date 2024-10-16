import Upvote from "~/components/Upvote/index.jsx";
import Plus from './plus.svg?react';
import {useState} from "react";

export default function UpvotesList({id}) {
    const [isSelected, setIsSelected] = useState(false);
    const [upvotesCount, setUpvotesCount] = useState(0);

    let upvoteComponentsList = [];

    for (let i = 0; i < upvotesCount; i++) {
        upvoteComponentsList.push(<Upvote key={i} selected={isSelected} onSelectionToggle={setIsSelected} />);
    }

    return <div>
        {upvoteComponentsList}
        <button onClick={() => setUpvotesCount(prevCount => prevCount + 1)}><Plus /></button>
    </div>
}