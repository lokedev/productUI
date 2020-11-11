import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductTile from "./ProductTile";

test("Should renders product details", () => {
  const item = {
    name: "ABC",
    price: 15,
    image: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByText, getByTestId } = render(<ProductTile name={item.name} price={item.price} thumbnail={item.image} />);

  const itemName = getByText(item.name);
  const priceText = getByText("$ 15");
  const thumbnail = getByTestId("itemThumb");

  expect(itemName).toBeInTheDocument();
  expect(priceText).toBeInTheDocument();
  expect(thumbnail.src).toBe(item.image);
});

test("Should render product details with price range", () => {
  const item = {
    name: "ABC",
    price: {
      low: 300,
      high: 450,
    },
    thumbnail: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByText, getByTestId } = render(<ProductTile {...item} />);

  const itemName = getByText(item.name);
  const priceText = getByText("From $ 300");
  const thumbnail = getByTestId("itemThumb");

  expect(itemName).toBeInTheDocument();
  expect(priceText).toBeInTheDocument();
  expect(thumbnail.src).toBe(item.thumbnail);
});

test("Should call onClick function on clicking tile", () => {
  const onClick = jest.fn();
  const item = {
    id: "abc",
    name: "ABC",
    price: {
      low: 150,
      high: 300,
    },
    thumbnail: "https://testing-library.com/img/octopus-64x64.png",
  };
  const { getByTestId } = render(<ProductTile onClick={onClick} {...item} />);
  const productComponent = getByTestId("tile");

  fireEvent.click(productComponent);

  expect(onClick).toBeCalled();
});
