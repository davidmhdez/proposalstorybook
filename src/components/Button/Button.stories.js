import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '.';

addDecorator(withKnobs); 
storiesOf('Buttons' , module)
    .add(
        'Simple button', 
        () => {
            return(<Button onClick={action('clicked')}>{text('Label', 'Set Your text here')}</Button>)
        },
        {info: {text: 'description'}}
    )