import React from 'react'
import { render } from 'react-dom'
import { Splash } from './components/splash/Splash'
import Grid from '@material-ui/core/Grid'
import './index.css'
import { Who } from './components/who/Who'

const content = (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Splash/>
      </Grid>
      <Who/>
    </Grid>
  </div>
);

render(content, document.getElementById('app-root'));
