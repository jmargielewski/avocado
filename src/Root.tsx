import React, { ReactChild } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const Root = ({ children }: { children: ReactChild }): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
