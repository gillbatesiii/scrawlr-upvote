import ArrowUp from './arrow-up.svg?react';
import {DEFAULT_ARROW_COLOR, DEFAULT_BG_COLOR, SELECTED_BG_COLOR, SELECTED_ARROW_COLOR} from "~/constants.js";

export default function Upvote({selected, onSelectionToggle}) {
    return (
        <div onClick={() => onSelectionToggle(!selected)}
             style={{backgroundColor: selected ? SELECTED_BG_COLOR : DEFAULT_BG_COLOR}}>
            <ArrowUp fill={selected ? SELECTED_ARROW_COLOR : DEFAULT_ARROW_COLOR}/>
        </div>
    )
}