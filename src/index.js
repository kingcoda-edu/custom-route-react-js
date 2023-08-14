import React from 'react';
import ReactDOM from 'react-dom/client';
import {Controller} from './App';
import Route from './Route';
import Other from './Other';
import Other2 from './Other2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Controller>
      <Route renderElement={<Other2 />} url="/" />
      <Route renderElement={<Other />} url="/login" />
    </Controller>
);
