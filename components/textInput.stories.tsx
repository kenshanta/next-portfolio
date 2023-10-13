import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import TextInput from './pageAnimation'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
}

export default meta
type Story = StoryObj<typeof TextInput>

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const getTask = (id: string) => canvas.findByRole('yea', { name: id })
    const itemToArchive = await getTask('yea')

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'))
  },
}
