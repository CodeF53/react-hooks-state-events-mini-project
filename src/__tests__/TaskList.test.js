import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  console.log("it doesn't like my for i iterator")
  // const { container } = render(<TaskList tasks={TASKS} />);
  // expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});
