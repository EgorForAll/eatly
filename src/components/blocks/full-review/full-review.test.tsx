import {screen, render} from "@testing-library/react";
import FullReview from "./full-review";
import '@testing-library/jest-dom'
import {IReview} from "@/interfaces/reviews";

const mockReview: IReview = {
    id: 1,
    body: 'Some long test from some strange person',
    postId: 2,
    user: {
        id: 2,
        username: 'Marko'
    }
}

test('Full review renders correctly', () => {
    render(<FullReview review={mockReview}/>)
    const review = screen.getByTestId('review')
    expect(review).toMatchSnapshot()
})