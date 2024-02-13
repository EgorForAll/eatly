import Dropdown from "./dropdown";
import type {StoryObj} from "@storybook/react";

export default {
    title: 'Blocks/Dropdown',
    component: Dropdown
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        question: {
            title: 'How long does delivery take?',
            description: 'How long does delivery take?'
        }
    },
};


