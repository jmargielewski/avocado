import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import Page from './pages/Page';

const store = createStore(reducers, applyMiddleware(thunk));

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
