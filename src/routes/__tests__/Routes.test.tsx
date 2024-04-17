import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import { render, screen } from "../../utils/test-utils";

describe("<Routes>", () => {
  it("should redirect to rootPath when landing in incorrect path", () => {
    const badRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});
