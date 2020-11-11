import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageGalleryDialog from "./ImageGalleryDialog";

test("should show dialog when open is true", () => {
  const props = {
    open: true,
  };
  const { getByRole } = render(<ImageGalleryDialog {...props} />);

  const modal = getByRole("dialog");
  expect(modal).toBeDefined();
});

test("should not show dialog", () => {
  const props = {
    open: false,
  };
  const { container } = render(<ImageGalleryDialog {...props} />);
  expect(container.children.length).toBe(0);
});

test("should close dialog", () => {
  const props = {
    open: true,
  };
  const onClose = jest.fn(() => {
    props.open = false;
  });
  const { getByTestId } = render(
    <ImageGalleryDialog onClose={onClose} {...props} />
  );

  const closeButton = getByTestId("closeButton");

  fireEvent.click(closeButton);
  expect(onClose).toBeCalled();
});
