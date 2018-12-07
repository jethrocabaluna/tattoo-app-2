import React, { Fragment } from 'react';

import Header from '../components/Header';
import TattoosCollection from '../components/TattoosCollection';

export default function ({title}) {
  return (
    <Fragment>
      <Header title={title} />
      <TattoosCollection />
    </Fragment>
  )
};