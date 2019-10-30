import React from 'react';
import { Provider } from 'mobx-react';
import Head from 'next/head'

import App from '../src/js/App';
import SkillStore from '../src/js/stores/SkillStore';
import "../src/sass/main.scss"

const store = new SkillStore();

export default () =>(
  <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
      <meta name="description" content="The Stamp Rally of FDR" />
      <meta name="theme-color" content="#ffffd9" />
      <title>Frontend Developer Roadmap スタンプラリー</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    </Head>
    <Provider store={store}>
      <App />
    </Provider>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </React.Fragment>
);