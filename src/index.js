import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Bar from './bar';
import Injector, { Inject } from './injector';
import MyService from './MyService';
import BarService from './BarService';

class JobService {
  getJob() {
    return 'I am unemployed';
  }
}

const Foo = (props) => (
  <h2>This if foo</h2>
);


const Alpha = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

const config2 = [
  { key: 'myService', provider: MyService },
  { key: 'jobService', provider: JobService }
];
const config = [
  { key: 'barService', provider: BarService }


];

@Inject([])
class Artist extends Component {
  render() {
    return (
      <h1>Artist: {this.props.name}</h1>
    );
  }
}

ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <h1>Hello World</h1>
        <Link to="/foo">foo</Link>
        <Link to="/bar">bar</Link>
        <Route
          path="/foo"
          component={Foo}
        />
        <Injector config={config}>
          <Artist name="Richard"/>
          <Injector config={config2}>
            <Route
              path="/bar"
              component={Bar}
            />
          </Injector>
        </Injector>
      </div>
    </BrowserRouter>
  </div>
  , document.getElementById('app'));



