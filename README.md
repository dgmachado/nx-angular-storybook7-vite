# Storybook

Execute the below command to start the storybook: 

```
npx nx run angular:storybook 
```

## Component Button:
<img width="1712" alt="Screenshot 2023-10-30 at 7 34 52 AM" src="https://github.com/dgmachado/nx-angular-storybook7-vite/assets/5738416/dffdf04b-d549-42a1-a483-3b4065fc69d6">

#### Code 

```typescript
import type { Meta, StoryObj } from '@storybook/angular/';

import ButtonComponent from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```




## Component Button-with-issue:
<img width="1721" alt="Screenshot 2023-10-30 at 7 34 59 AM" src="https://github.com/dgmachado/nx-angular-storybook7-vite/assets/5738416/b4374417-b306-4385-8673-55a833fef3dd">


#### Code 

```typescript
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
```
