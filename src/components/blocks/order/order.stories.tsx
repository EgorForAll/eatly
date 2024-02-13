import Order from "./order";
import type {StoryObj} from "@storybook/react";
import Image from "../../../assets/images/fish.png";
import ImageWebp from "../../../assets/images/fish.webp";

export default {
    title: 'Blocks/Order',
    component: Order
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/Order',
    component: Order,
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        order: {
            name: 'Chicken Hell',
            status: 'Cancelled',
            is_fail: true,
            time: '3:09 PM',
            imageWebp: ImageWebp,
            image: Image
        }
    },
};


