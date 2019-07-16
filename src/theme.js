
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const palette = {
    type: 'dark',
    primary: blue,
    secondary: grey
};
const themeName = 'JDA Theme';

export default createMuiTheme({ palette, themeName });