import React from 'react';
import {
    render,
} from "@testing-library/react";
import BackDrop from './BackDrop';

test('renders children without error', () => {
    const { getByText } = render(<BackDrop><div>Hello</div></BackDrop>);
    const divElement = getByText('Hello');
    expect(divElement).toBeInTheDocument();
});