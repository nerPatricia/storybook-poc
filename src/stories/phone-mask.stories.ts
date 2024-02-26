import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../app/shared/components/card/card.component';
import { faCoffee, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { PhoneMaskDirective } from '../app/shared/directives/phone-mask/phone-mask.directive';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PhoneMaskDirective> = {
  title: 'Directives/Phone Mask',
  component: PhoneMaskDirective,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Directive that adds formatting mask to landline `(00) 0000-0000` or cellphone `(00) 00000-0000`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<PhoneMaskDirective>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<input type="text" appPhoneMask placeholder="Telefone">`,
  }),
};
