import { Text, TextProps } from '@sapuris-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vero minus vel. Quasi consequuntur delectus, repellat modi quis dolorum harum quas id iure quisquam! Et praesentium id quae facere excepturi.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
