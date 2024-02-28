import VioletRange from "./violet-range";
import type {StoryObj} from "@storybook/react";
export default {
    title: 'UI/VioletRange',
    component: VioletRange
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/VioletRange',
    component: VioletRange,
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
    },
};

export const Secondary: Story = {
    args: {
        progress: 30,
    },
};

