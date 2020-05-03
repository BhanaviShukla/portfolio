import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
        light: '#4e6c8c',
        main: '#20415f',
        dark: '#001b35',
        contrastText: '#f2eade'
    },
    secondary: {
        light: '#ef8393',
        main: '#ba5465', 
        dark: '#86253b'
    },
  },
})
theme = responsiveFontSizes(theme)
export default theme