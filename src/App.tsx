import React from 'react'
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import Logos from './_components/Logos'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topSomething: {
      backgroundColor: '#fff',
      padding: theme.spacing(1, 0),
      '&>div': {
        display: 'flex',
        alignItems: 'baseline',
        flexFlow: 'row nowrap',
      },
    },
    name: {
      marginRight: theme.spacing(2),
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 500,
    },
    jumbotron: {
      padding: theme.spacing(2, 0),
    },
  }),
)

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.topSomething}>
        <Container>
          <Typography className={classes.name} variant="h6">
            Bhanvi Shukla
          </Typography>
          <Typography variant="overline" color="textSecondary">
            User Interface Developer
          </Typography>
        </Container>
      </div>
      <div className={classes.jumbotron}>
        <Logos />
      </div>
    </>
  )
}

export default App
