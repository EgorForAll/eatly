import Logo from "./Logo";
import type {StoryObj} from "@storybook/react";

export default {
    title: 'UI/Logo',
    component: Logo
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/Logo',
    component: Logo,
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: 47,
        height: 45,
        fontSize: 25
    },
};


