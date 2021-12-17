import React from "react";
import {
  findByRole,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const testData = {
  id: "1",
  headline: "headline",
  author: "Associated Press",
  image: 134,
  summary: "summary",
  body: "body",
};

test("renders component without errors", () => {
  render(<Article article={[]} />);
});

test("renders headline, author from the article when passed in through props", async () => {
  render(<Article article={[]} />);
  const headline = await screen.findByTestId("headline");
  const author = await screen.findByTestId("author");

  expect(headline).toBeTruthy();
  expect(author).toBeTruthy();
});

test('renders "Associated Press" when no author is given', async () => {
  render(<Article article={testData} />);

  const author = await screen.findByTestId("author");

  expect(author).toHaveTextContent("Associated Press");
});

test("executes handleDelete when the delete button is pressed", async () => {
  const testFunc = jest.fn();
  render(<Article article={testData} handleDelete={testFunc} />);

  const button = await screen.findByTestId("deleteButton");
  userEvent.click(button);

  expect(testFunc).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
