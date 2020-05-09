import React from 'react'
import { Container, makeStyles, createStyles, Theme } from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logos: {
      '& img': {
        '&$markatent': {},
      },
      display: 'flex',
      alignItems: 'center',
      '&>*': {
        maxWidth: theme.spacing(22),
        maxHeight: theme.spacing(6),
        '&:not(:last-child)': {
          marginRight: theme.spacing(4),
        },
      },
    },
    markatent: {
      '&>img': {
        maxWidth: theme.spacing(3.5),
        position: 'relative',
        marginRight: 0,
      },
      '&>span': {
        color: theme.palette.text.primary,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: theme.spacing(3.5),
        letterSpacing: '1.6px',
        lineHeight: 1.4,
      },
    },
    kiviCapital: {
      flexFlow: 'column wrap',
      width: theme.spacing(13),
      textAlign: 'center',
      alignItems: 'center',
      '&>span': {
        fontFamily: "'Roboto', sans-serif",
        textTransform: 'uppercase',
        fontSize: 22,
        lineHeight: 1,
        fontWeight: 500,
      },
    },
    opinia360: {
      '&>span': {
        fontFamily: "'Roboto', sans-serif",
        lineHeight: 1.4,
        '&:first-child': {
          fontWeight: 900,
        },
        '&:last-child': {
          fontWeight: 100,
        },
      },
    },
  }),
)
const Logos: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.logos}>
        <img alt="Tribalscale" src={'tribalscale.svg'} />
        <img alt="DP World" src={'DPWorld.png'} />
        <img alt="noon" src={'noon.png'} />
        <div className={classes.markatent}>
          {/* <img alt="Markatent" src={'markatent.png'} /> */}
          <span>Markatent</span>
        </div>
        <img alt="CapeXmove" src={'capexmove.png'} />
        <div className={`${classes.markatent} ${classes.opinia360}`}>
          {/* <img alt="KiviCapital" src={'kivicapital.png'} /> */}
          <span>OPINIA</span>
          <span>360</span>
        </div>
        <img alt="StoneartAsia" src={'stoneartAsia.png'} />
        <div className={`${classes.markatent} ${classes.kiviCapital}`}>
          {/* <img alt="KiviCapital" src={'kivicapital.png'} /> */}
          <span>Kivi Capital</span>
        </div>
      </Container>
    </>
  )
}

export default Logos
