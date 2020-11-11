import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

test("should render Items list correctly", () => {
  const items = [
    {
      id: 0,
      name: "asdf",
      price: 2,
      hero: {
        href: "https://sample.png",
      },
    },
  ];
  render(<ProductList products={items} />);
  expect(screen.getAllByTestId("tile").length).toBe(1);
});

test("should trigger select", () => {
  const items = [
    {
      id: 0,
      name: "asdf",
      price: 2,
      hero: {
        href: "https://sample.png",
      },
    },
  ];
  const selectHandler = jest.fn();
  render(<ProductList products={items} onSelect={selectHandler} />);
  fireEvent.click(screen.getAllByTestId("tile")[0]);
  expect(selectHandler).toHaveBeenCalled();
});
