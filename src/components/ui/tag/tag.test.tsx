import {screen, render} from "@testing-library/react";
import Tag from "./tag";
import '@testing-library/jest-dom'

const tagMock: string = 'history';
const tagsMock: string[] = ['history', 'crime', 'american']

test('Tag renders correctly', () => {
    render(<Tag tag={tagMock} tags={tagsMock}/>)
    const tag = screen.getByTestId('tag');
    expect(tag).toMatchSnapshot();
})