import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../components/buttons/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LabelList/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
  text: 'Disabled',
};
