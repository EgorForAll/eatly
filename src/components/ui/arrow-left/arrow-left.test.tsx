import {screen, render} from "@testing-library/react";
import Arrow from "./arrow-left";
import '@testing-library/jest-dom'

const togglePage = jest.fn()
test('Arrow renders correctly', () => {
    render(<Arrow togglePage={togglePage} disabled={false} />)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot();
})