import React from 'react'

require('bootstrap/dist/css/bootstrap.min.css')
require('../styles/App.css')

export default ({ Component, pageProps }) => {
  return <Component { ...pageProps } />
} 