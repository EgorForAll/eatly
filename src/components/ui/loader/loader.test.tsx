import {screen, render} from "@testing-library/react";
import Loader from "./loader";
import '@testing-library/jest-dom';


test('Loader renders correctly', () => {
    render(<Loader />)
    const loader = screen.getByTestId('loader');
    expect(loader).toMatchSnapshot();
})