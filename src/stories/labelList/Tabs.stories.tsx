import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from '../../components/buttons/Tabs';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LabelList/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  buttons: [
    {
      text: 'Labels',
      icon: <TagIcon verticalAlign="middle" />,
      active: true,
    },
    {
      text: 'Milestones',
      icon: <MilestoneIcon verticalAlign="middle" />,
    },
  ],
};
