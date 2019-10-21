import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import SkillStore from './stores/SkillStore';

const store = new SkillStore();

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
