import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import { render } from "../../utils/test-utils";

describe("<Routes>", () => {
  it("should redirect to rootPath when landing in incorrect path", () => {
    const badRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(window.location.pathname).toBe("/");
  });
});
