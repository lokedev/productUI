import React from 'react';
import {
  render,
  fireEvent,
} from "@testing-library/react";
import CloseButton from './CloseButton';

test('renders button without error', () => {
  const { getByRole } = render(<CloseButton />);
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
});

test('it should call onClick on button click', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<CloseButton onClick={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button)
  expect(onClick).toBeCalled();
});
