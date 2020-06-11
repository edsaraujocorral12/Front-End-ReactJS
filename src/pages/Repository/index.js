import React from 'react';

function Repository({ match }) {
  return <h1>Repository Page: {decodeURIComponent(match.params.repository)}</h1>;
}
export default Repository;
