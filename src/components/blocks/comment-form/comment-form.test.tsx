import { screen, render } from "@testing-library/react";
import CommentForm from "./comment-form";
import "@testing-library/jest-dom";
import {IComment} from "@/interfaces/comment";


const mockId: string = '8'

const mpckComments: IComment[] = [
  {
    id: 4,
    body: "Wow! You have improved so much!",
    postId: 8,
    user: { id: 19, username: "bleveragei" },
  },
  {
    id: 162,
    body: "You’re a divine present.",
    postId: 8,
    user: { id: 85, username: "kpondjones2c" },
  },
  {
    id: 294,
    body: "Hello, you seem truly charming in this as always.",
    postId: 8,
    user: { id: 28, username: "xisherwoodr" },
  },
];

describe('CommentForm component', () => {
  it('CommentForm renders correctly', () => {
    render(<CommentForm id={mockId} comments={mpckComments} />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument()
  })
})
