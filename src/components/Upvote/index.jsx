import ArrowUp from './arrow-up.svg?react';
import './upvote_styles.css';
import {
    DEFAULT_ARROW_COLOR,
    DEFAULT_BG_COLOR,
    SELECTED_BG_COLOR,
    SELECTED_ARROW_COLOR,
} from '~/constants.js';
import PropTypes from 'prop-types';

export default function Upvote({ selected, onSelectionToggle }) {
    return (
        <button
            className={'upvote'}
            onClick={() => onSelectionToggle()}
            style={{
                backgroundColor: selected
                    ? SELECTED_BG_COLOR
                    : DEFAULT_BG_COLOR,
            }}
        >
            <ArrowUp
                fill={selected ? SELECTED_ARROW_COLOR : DEFAULT_ARROW_COLOR}
            />
        </button>
    );
}

Upvote.propTypes = {
    selected: PropTypes.bool.isRequired,
    onSelectionToggle: PropTypes.func.isRequired,
};
