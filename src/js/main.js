import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../sass/main.scss';

import Header from './components/Header/header';
import Content from './components/content';
import Footer from './components/footer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      status: {
        front: 'active',
        back: 'inactive'
      }
    };
    this.togglePages = this.togglePages.bind(this);
  }

  togglePages(item) {
    this.setState({
      status: {
        front: item === 'front' ? 'active' : 'inactive',
        back: item === 'back' ? 'active' : 'inactive'
      }
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container">
        <Header togglePages={this.togglePages} status={status} />
        <Content status={status} />
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
