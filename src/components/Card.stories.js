import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Card from './Card';

export default {
  title: 'Card',
  decorators: [withKnobs, withInfo, Wrapper]
};

function Wrapper(storyFn) {
  return <div style={{width: '600px', margin: 'auto'}}>{storyFn()}</div>
}

export const notBookmarked = () => 
<Card
  title={text('title', 'Title')}
  question={text('question', 'Question')}
  answer={text('answer', 'Answer')}
  isBookmarked={boolean('isBookmarked', false)}
  onBookmarkClicked={() => null}
/>

export const bookmarked = () =>
 <Card
  title={text('title', 'Title')}
  question={text('question', 'Question')}
  answer={text('answer', 'Answer')}
  onBookmarkClicked={() => null}
  isBookmarked={boolean('isBookmarked', true)}
/>

export const withoutBookmark = () =>
 <Card
  title={text('title', 'Title')}
  question={text('question', 'Question')}
  answer={text('answer', 'Answer')}
/>
