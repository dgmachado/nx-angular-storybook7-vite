import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular/';
import ButtonComponent from './button-with-issue.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()]
    })
  ]
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};