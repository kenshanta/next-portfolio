import { StoryFn } from '@storybook/react'
import ResponseBody from './responseBody'

export default {
  title: 'Chat Box',
}

const Template: StoryFn = (arguments_) => <ResponseBody {...arguments_} />

export const ResponseBodyStory = Template.bind({})

ResponseBodyStory.args = {
  response:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?',
}
