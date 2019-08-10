
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

const palette = {
    type: 'dark',
    primary: blue,
    secondary: grey,
    positive: green
};
const themeName = 'JDA Theme';

export default createMuiTheme({ palette, themeName });