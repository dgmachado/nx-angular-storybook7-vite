import { type Meta, type StoryObj } from '@storybook/angular/';
import { TEST } from '../main';
import ButtonComponent from './button-with-issue.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  render: () => ({
    applicationConfig: {
      providers: [{ provide: TEST, useValue: 'test' }],
    },
  }),
  // decorators: [
  //   applicationConfig({
  //     providers: [{ provide: TEST, useValue: 'test' }],
  //   }),
  // ],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
