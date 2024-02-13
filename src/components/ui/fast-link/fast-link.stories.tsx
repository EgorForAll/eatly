import FastLink from "./Fast-link";
import type {StoryObj} from "@storybook/react";
export default {
    title: 'UI/FastLink',
    component: FastLink
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/FastLink',
    component: FastLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Click me',
        isColored: true
    },
};

