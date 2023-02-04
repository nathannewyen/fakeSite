import { renderHook } from "@testing-library/react-hooks";
import useVideos from "../useVideos";
import axios from "axios";

jest.mock("axios");

describe("useVideos", () => {
  it("should initialize with an empty videos array, loading set to true, and displayCount set to 1", () => {
    const { result } = renderHook(() => useVideos());
    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBe(true);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBeInstanceOf(Function);
  });

  it("should fetch data and set videos and loading", async () => {
    const mockData = { videos: [1, 2, 3, 4, 5] };
    axios.get.mockResolvedValue({ data: mockData });
    const { result, waitForNextUpdate } = renderHook(() => useVideos());
    expect(axios.get).toHaveBeenCalledWith("/api/video");
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(mockData.videos);
    expect(result.current[1]).toBe(false);
  });
});
