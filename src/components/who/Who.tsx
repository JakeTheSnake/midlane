import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import JakeAvatar from './jake.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      backgroundColor: '#8cbfd1',
      color: 'black',
    },
  }),
);

export const Who = () => {
  const classes = useStyles()

  return (

      <Grid container justify="center" spacing={3}>
        <Grid item xs={3}>
          <img src={JakeAvatar}/>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>Lorem ipsum dolor sit amet, sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Paper>
        </Grid>
      </Grid>
  )
}
