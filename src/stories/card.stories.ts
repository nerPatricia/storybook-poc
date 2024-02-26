import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../app/shared/components/card/card.component';
import { faCoffee, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardComponent> = {
  title: 'Components/Cards/Card Icon Action',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Mainly used on the Dashboard, this component allows you to simply display our services and its statuses of it with the client - if eligible.',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Disable click and actions. `boolean`',
      control: 'boolean',
    },
    headerIcon: {
      description: 'Main icon. `Icon Component SVG`',
      table: {
        defaultValue: {
          summary: 'faVideoCamera',
        },
      },
    },
    title: {
      description: 'Main text. `string`',
    },
    subtitle: {
      description: 'Sub-title text. `string`',
    },
    footerText: {
      description: 'Footer text. `string`',
    },
  },
  render: (args: CardComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Texts: Story = {
  args: {
    disabled: false,
    headerIcon: faVideoCamera,
    title: 'Title',
    subtitle: 'Sub-Title',
    footerText: 'Footer Text',
  },
  parameters: {
    docs: {
      description: {
        story:
          'All the texts of this card can be updated by the params `title`, `subtitle` and `footerText`',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Texts.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Is possible to set all this card as disabled. When `disabled` is `true`, the color of the component change, a lock icon is added in the top right corner and the click events are blocked.',
      },
    },
  },
};

export const HeaderIcon: Story = {
  args: {
    ...Texts.args,
    headerIcon: faCoffee,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This propertie change the main icon to the left of the main text. Pay attention: this propertie recieve a `Icon Component SVG` and not a icon name string.',
      },
    },
  },
};
