import grey from '@material-ui/core/colors/grey'
import { makeStyles } from '@material-ui/styles'

export default makeStyles({
  brandContainer: {
    alignContent: 'center',
    paddingRight: 24,
    backgroundColor: 'grey'
  },
  icon: {
    height: 68,
    marginTop: 6,
    overflow: 'visible',
    width: 'auto',
    fill: '#FFFFFF'
  },
  text: {
    color: grey[900],
    fontFamily: 'proxima-nova, Open Sans',
    fontSize: 21,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    paddingRight: 24,
    cursor: 'default',
    userSelect: 'none',
  },
})
