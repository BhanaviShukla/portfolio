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
        '&$markatent': {},
      },
      '&>div': {
        display: 'flex',
        alignItems: 'center',
        '&>*': {
          // maxWidth: theme.spacing(12),
          maxHeight: theme.spacing(6),
          '&:not(:last-child)': {
            marginRight: theme.spacing(4),
          },
        },
      },
    },
    markatent: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      '&>img': {
        maxWidth: theme.spacing(3.5),
        position: 'relative',
        marginRight: 0,
      },
      '&>span': {
        color: theme.palette.text.primary,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: theme.spacing(4.5),
        letterSpacing: '1.6px',
        lineHeight: 1.4,
      },
    },
    kiviCapital: {
      flexFlow: 'column wrap',
      maxWidth: theme.spacing(5),
      textAlign: 'center',
      '&>span': {
        fontFamily: "'Roboto', sans-serif",
        textTransform: 'uppercase',
        fontSize: 16,
        lineHeight: 1,
        fontWeight: 500,
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
          <img alt="Tribalscale" src={'tribalscale.svg'} />
          <img alt="noon" src={'noon.png'} />
          <div className={classes.markatent}>
            {/* <img alt="Markatent" src={'markatent.png'} /> */}
            <span>Markatent</span>
          </div>
          <img alt="StoneartAsia" src={'stoneartAsia.png'} />
          <div className={`${classes.markatent} ${classes.kiviCapital}`}>
            {/* <img alt="KiviCapital" src={'kivicapital.png'} /> */}
            <span>Kivi Capital</span>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
