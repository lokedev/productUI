import React from 'react';
import {
  render,
  waitForElement,
  screen,
  fireEvent,
} from "@testing-library/react";
import App from './App';

test('renders App without error', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Products/i);
  expect(titleElement).toBeInTheDocument();
});

test("should render product list correctly", () => {
  const { getByTestId } = render(<App />);
  const productsComponent = getByTestId("productList");
  expect(productsComponent).toBeInTheDocument();
});

test("should open gallery on clicking tile", async () => {
  render(<App />);
  const products = await waitForElement(() => screen.getAllByTestId("tile"));
  fireEvent.click(products[0]);
  const modal = screen.getByTestId("imageGalleryDialog");
  expect(modal).toBeDefined();
});
