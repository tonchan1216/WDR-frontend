import React from "react"
import { Provider } from 'mobx-react';

import App from '../components/App';
import SkillStore from '../stores/SkillStore';
import '../main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = new SkillStore();

const IndexPage = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default IndexPage
