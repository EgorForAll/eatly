import Dropdown from "./dropdown";
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react";
import {IDropdown} from "@/interfaces/dropdown";

const mockQuestion : IDropdown = {
  title: "How long does delivery take?",
  description:
    "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
};

describe("Dropdown component", () => {

  it('title renders', () => {
    render(<Dropdown question={mockQuestion} />);
    const title = screen.getByText(mockQuestion.title)
    expect(title).toBeInTheDocument()
  })
  it('button renders', () => {
    render(<Dropdown question={mockQuestion} />);
    const button = screen.getByTestId('toggle-button')
    expect(button).toBeInTheDocument()
  })
  it('response renders', () => {
    render(<Dropdown question={mockQuestion} />);
    const question = screen.queryByText(mockQuestion.description)
    expect(question).toBeInTheDocument()
  })
  it('click event', () => {
    render(<Dropdown question={mockQuestion} />);
    const question = screen.queryByText(mockQuestion.description)
    const button = screen.getByTestId('toggle-button')
    fireEvent.click(button);
    expect(question).toHaveStyle({maxHeight: '100px'})
  })
});
