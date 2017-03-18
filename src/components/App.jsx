import React from 'react';

import FilterContainer from '../containers/FilterContainer';
import AppContainer from '../containers/AppContainer';
import SliderContainer from '../containers/SliderContainer';

import css from '../styles/App.less';

const App = () => (
  <div>
    <FilterContainer />
    <SliderContainer />
    <AppContainer />
  </div>
);

export default App;
