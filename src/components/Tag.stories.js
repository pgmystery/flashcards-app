import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs';
import Tag from './Tag'

export default {
  title: 'Tag',
  decorators: [withKnobs]
}
export const standard = () => 
  <Tag
    text={text('text', 'TAG')}
  />

standard.story = {
  name: 'Default'
}
