import { render, fireEvent, screen } from '@testing-library/react';
import Upvote from '~/components/Upvote/index.jsx';
import React from 'react';
import {
    DEFAULT_ARROW_COLOR,
    DEFAULT_BG_COLOR,
    SELECTED_ARROW_COLOR,
    SELECTED_BG_COLOR,
} from '~/constants.js';
import { vi } from 'vitest';

describe('Upvote component', () => {
    it('renders the upvote button with default styles', () => {
        render(<Upvote selected={false} onSelectionToggle={() => {}} />);
        const upvoteButton = screen.getByRole('button');
        expect(upvoteButton).toHaveStyle(
            `background-color: ${DEFAULT_BG_COLOR}`
        );
        expect(upvoteButton.querySelector('svg')).toHaveAttribute(
            'fill',
            DEFAULT_ARROW_COLOR
        );
    });

    it('renders the upvote button with selected styles', () => {
        render(<Upvote selected={true} onSelectionToggle={() => {}} />);
        const upvoteButton = screen.getByRole('button');
        expect(upvoteButton).toHaveStyle(
            `background-color: ${SELECTED_BG_COLOR}`
        );
        expect(upvoteButton.querySelector('svg')).toHaveAttribute(
            'fill',
            SELECTED_ARROW_COLOR
        );
    });

    it('calls the onSelectionToggle callback when clicked', () => {
        const onSelectionToggleMock = vi.fn();
        render(
            <Upvote
                selected={false}
                onSelectionToggle={onSelectionToggleMock}
            />
        );
        const upvoteButton = screen.getByRole('button');
        fireEvent.click(upvoteButton);
        expect(onSelectionToggleMock).toHaveBeenCalled();
    });
});
