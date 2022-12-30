import React from 'react';
import nameSlice from './components/features/nameSlice';
import { injectReducer } from './store';

function component1() {

    // eslint-disable-next-line no-lone-blocks
    {injectReducer({nameSlice: nameSlice})}

  return (
    <div className="App">
      <div>hiii</div>
    </div>
  );
}

export default component1;
