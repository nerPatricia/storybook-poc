import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/shared/components/button/button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Components/Buttons/Simple Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `<p>Generic button with default color themes, disable and size options. The button provide two <strong>ng-content</strong>:
          <ul>
            <li>The Main Content of the button that does not have a selector to be used, just put the content inside the component tags. Example: <br />
              <code>&lt;app-button&gt;Click Here!&lt;/app-button&gt; </code></li>
            <li>The other ng-content refers to a icon that is positioned on the left side of the Main Content. The selector is <code>btnIcon</code>. Example: <br />
              <code>&lt;app-button&gt;&lt;fa-icon btnIcon icon="lock"&gt;&lt;/fa-icon&gt;Click Here!&lt;/app-button&gt;</code></li>
          </ul>
          <p>In addition to these options, the button have a <strong>click</strong> event emitter that can be accessed by the propertie <code>onClick</code>. </p>
        </p>
        `,
      },
    },
  },
  argTypes: {
    colorTheme: {
      description:
        'Define the colors of the button. `primary` `secondary` `tertiary`',
      options: ['primary', 'secondary', 'error'],
      control: { type: 'radio' },
    },
    size: {
      description:
        'Define the size of the button. `small` `medium` `large` `expand`',
      options: ['small', 'medium', 'large', 'expand'],
      control: { type: 'radio' },
    },
    disabled: {
      description: 'Disable click and actions. `boolean`',
      control: 'boolean',
    },
  },
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const ColorTheme: Story = {
  args: {
    colorTheme: 'primary',
    size: 'medium',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The button have three color themes: `primary`, `secondary` and `error`. The default theme is `primary`. Each theme changes the background color, border color and content color.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Is possible to set the button as disabled. When `disabled` is `true`, the color of the component change and the click events are blocked.',
      },
    },
  },
};

export const size: Story = {
  args: {
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The button have four sizes: `primary`, `secondary` and `error`. The default size is `medium`.',
      },
    },
  },
};
