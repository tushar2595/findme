import React, { Component } from 'react';
import AppRoutes from './routes/index';
import { store } from './redux/store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <AppRoutes />
      </div>
      </Provider>
    );
  }
}

export default App;