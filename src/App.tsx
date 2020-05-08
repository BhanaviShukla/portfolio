import React from 'react'
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

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
    logos: {
      padding: theme.spacing(2, 0),
      '& img': {
        maxWidth: theme.spacing(12),
        '&:not(:last-child)': {
          marginRight: theme.spacing(2),
        },
      },
      '&>div': {
        display: 'flex',
        alignItems: 'center',
      },
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
      <div className={classes.logos}>
        <Container>
          <img alt="noon" src={'/noon.png'} />
          <img alt="Tribalscale" src={'/tribalscale.svg'} />
        </Container>
      </div>
    </>
  )
}

export default App
