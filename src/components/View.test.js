import React from "react";
import { findByTestId, render, screen, waitFor } from "@testing-library/react";
import View from "./View";
import { resetArticles } from "../mocks/data";
import userEvent from "@testing-library/user-event";
jest.mock("../mocks/data");
const testData = {
  data: [
    {
      id: 1,
      headline: "headline",
      author: "author",
      image: 134,
      summary: "summary",
      body: "body",
    },
    {
      id: 2,
      headline: "headline",
      author: "author",
      image: 134,
      summary: "summary",
      body: "body",
    },
    {
      id: 3,
      headline: "headline",
      author: "author",
      image: 134,
      summary: "summary",
      body: "body",
    },
  ],
};

test("renders zero articles without errors", async () => {
  render(<View />);
});

test("renders three articles without errors", async () => {
  resetArticles.mockResolvedValueOnce(testData);
  render(<View />);
  //   const button = screen.queryByRole("Button");
  //   userEvent.click(button);

  const articles = await screen.queryAllByTestId("article");

  expect(articles).toBeTruthy();
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
