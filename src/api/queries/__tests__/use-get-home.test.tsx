import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MockAdapter from "axios-mock-adapter";

import { apiInstance } from "../../client";
import { useGetHome } from "../use-get-home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useGetHome", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(apiInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test("should get home data", async () => {
    const data = {
      content: "some-important-content",
    };

    mock.onGet("/home").reply(200, data);

    const { result } = renderHook(() => useGetHome(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({
      content: "some-important-content",
    });
  });

  test("should throw error", async () => {
    const data = {
      error: "some-important-content",
    };

    mock.onGet("/home").reply(500, data);

    const { result } = renderHook(() => useGetHome(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isError).toBeTruthy());
  });
});
