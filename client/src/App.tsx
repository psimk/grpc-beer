import * as React from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ClearOutlined from '@material-ui/icons/ClearOutlined';
import GamepadOutlined from '@material-ui/icons/GamepadOutlined';
import LocalDrinkOutlined from '@material-ui/icons/LocalDrinkOutlined';
import BeerList from './BeerList';
import SubmitView from './SubmitView';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: '#EEE',
      },
    },
  },
  palette: {
    type: 'dark',
  },
});

const styles = {
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
  iconButton: {
    marginRight: 10,
  },

  grow: {
    flexGrow: 1,
  },
};

const App = ({ classes }: { classes: any }) => {
  const [ isHome, setIsHome ] = React.useState<boolean>(true);
  const [ isgRPC, setIsgRPC ] = React.useState<boolean>(false);
  const [ isStream, setIsStream ] = React.useState<boolean>(false);
  const [ delay, setDelay ] = React.useState<number>(1000);

  const toggleIsHome = () => setIsHome(!isHome);
  const toggleIsStream = () => setIsStream(!isStream);
  const toggleIsgRPC = () => {
    setIsgRPC(!isgRPC);
    setIsStream(false);
  };

  const onTextChange = (event: any) => setDelay(event.target.value);

  const beerListRef = React.useRef({
    clearBeers: () => null,
    fetchBeer: () => null,
  });

  const fetchBeer = () => beerListRef.current.fetchBeer();
  const clearBeers = () => beerListRef.current.clearBeers();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Beer Time
            </Typography>

            <FormControlLabel
              control={<Switch checked={isgRPC} onChange={toggleIsgRPC} color="primary" />}
              label="Toggle gRPC"
            />

            <Hider condition={isgRPC}>
              <TextField label="Delay" value={delay} onChange={onTextChange} margin="normal" />
            </Hider>

            <Hider condition={isgRPC}>
              <FormControlLabel
                control={<Switch checked={isStream} onChange={toggleIsStream} color="primary" />}
                label="Toggle Stream"
              />
            </Hider>

            <Button onClick={fetchBeer} variant="outlined" className={classes.button}>
              <LocalDrinkOutlined className={classes.iconButton} />
              Fetch Beer
            </Button>

            <Button onClick={clearBeers} variant="outlined" className={classes.button}>
              <ClearOutlined className={classes.iconButton} />
              Clear Beers
            </Button>

            <Button onClick={toggleIsHome} variant="outlined" className={classes.button}>
              <GamepadOutlined className={classes.iconButton} />
              Toggle Game
            </Button>
          </Toolbar>
        </AppBar>
        <Toggle
          condition={isHome}
          onComponent={
            <BeerList ref={beerListRef} isgRPC={isgRPC} isStream={isStream} delay={delay} />}
          offComponent={<SubmitView isgRPC={isgRPC} />}
        />
      </MuiThemeProvider>
    </React.Fragment>
  );
};

const Hider = ({ condition, children }: { condition: boolean; children: any }) =>
  condition ? children : null;

const Toggle = ({
  condition,
  onComponent,
  offComponent,
}: {
  condition: boolean;
  onComponent: any;
  offComponent: any;
}) => (condition ? onComponent : offComponent);

export default withStyles(styles)(App);
