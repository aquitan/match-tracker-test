import { render, screen } from "@testing-library/react";
import { MatchStatus } from "./MatchStatus";

describe('Match Status Component', () => {
	test("should show match status LIVE", () => {
    render(<MatchStatus type="Ongoing" />);
    expect(screen.getByText(/live/i)).toBeTruthy();
  });

  test("should show match status FINISHED", () => {
    render(<MatchStatus type="Finished" />);
    expect(screen.getByText(/finished/i)).toBeTruthy();
  });

  test("should show match status PREPARING", () => {
    render(<MatchStatus type="Scheduled" />);
    expect(screen.getByText(/match preparing/i)).toBeTruthy();
  });

})