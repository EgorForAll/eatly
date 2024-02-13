import ProgressBar from "./progress-bar";
import type {StoryObj} from "@storybook/react";
export default {
    title: 'UI/ProgressBar',
    component: ProgressBar
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/ProgressBar',
    component: ProgressBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        progress: 60,
        index: 0,
    },
};

export const Secondary: Story = {
    args: {
        progress: 30,
        index: 1,
    },
};

