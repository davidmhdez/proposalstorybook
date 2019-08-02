import React from 'react';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Input from '.';

addDecorator(withKnobs); 
storiesOf('Input' , module)
    .addParameters({ viewport: { defaultViewport: 'responsive' }})
    .add(
        'Simple input', 
        () => (
            <Input 
                text={text('title','set your title')} 
                placeholder={text('placeholder','my placeholder')}
                disabled={boolean('disabled',false)}
                />
        ),
        {info: {text: 'input description'}}
    )