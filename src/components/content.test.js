import React from "react";
import { render, fireEvent } from "@testing-library/react";
import VideoContent from "./content";
import useVideos from "../hooks/useVideos";

jest.mock("../hooks/useVideos");

describe("VideoContent", () => {
  beforeEach(() => {
    useVideos.mockReturnValue([
      [
        {
          id: 1,
          title: "Video 1",
          description: "Description 1",
          thumbnail: "/thumbnail1.jpg",
          url: "https://example.com/video1",
        },
        {
          id: 2,
          title: "Video 2",
          description: "Description 2",
          thumbnail: "/thumbnail2.jpg",
          url: "https://example.com/video2",
        },
      ],
      false,
      jest.fn(),
      jest.fn(),
    ]);
  });

  afterEach(() => {
    useVideos.mockReset();
  });

  it("renders the video contents correctly", () => {
    const { getByText } = render(<VideoContent />);

    expect(getByText("Video 1")).toBeTruthy();
    expect(getByText("Description 1")).toBeTruthy();
    expect(getByText("Video 2")).toBeTruthy();
    expect(getByText("Description 2")).toBeTruthy();
  });

  it("calls handleShowMore when Show More button is clicked", () => {
    const [, , handleShowMore] = useVideos();
    const { getByText } = render(<VideoContent />);

    fireEvent.click(getByText("Show More"));

    expect(handleShowMore).toHaveBeenCalled();
  });

  it("calls handleShowLess when Show Less button is clicked", () => {
    const [, , , handleShowLess] = useVideos();
    const { getByText } = render(<VideoContent />);

    fireEvent.click(getByText("Show Less"));

    expect(handleShowLess).toHaveBeenCalled();
  });
});
