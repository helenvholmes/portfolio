import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import { icons } from "./icons";

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Icon",
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    iconName: "report--data",
  },
};

export const InverseIcon: Story = {
  args: {
    iconName: "hamburger",
  },
};

export const SmallIcon: Story = {
  args: {
    iconName: "bare-metal-server",
    size: "small",
  },
};

const socialIcons = ["x", "instagram", "github", "linkedin"];

export const AllSocialIcons: Story = {
  render: () => (
    <div className="flex justify-center gap-4">
      {socialIcons.map((icon, index) => (
        <Icon iconName={icon} key={index} />
      ))}
    </div>
  ),
};

export const AllSocialIconsAltTheme: Story = {
  render: () => (
    <div className="flex justify-center gap-4 p-4">
      {socialIcons.map((icon, index) => (
        <Icon iconName={icon} key={index} />
      ))}
    </div>
  ),
};

export const AllSocialIconsDarkTheme: Story = {
  render: () => (
    <div className="flex justify-center gap-4 p-4">
      {socialIcons.map((icon, index) => (
        <Icon iconName={icon} key={index} />
      ))}
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex justify-center gap-4">
      {icons.map((icon, index) => (
        <Icon iconName={icon.iconName} key={index} />
      ))}
    </div>
  ),
};
