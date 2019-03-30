import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import puzzleSplashLeft from './assets/puzzle-splash-left.png';
import puzzleSplashRight from './assets/puzzle-splash-right.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="white">
          <Toolbar className="flex-container-row">
            <Typography className="flex-grow" variant="title" color="inherit">
              6E8ECE
            </Typography>
            <Button className="appbar-button" color="inherit">
              Pieces per day
            </Button>
            <Button className="appbar-button" color="inherit">
              Leaderboard
            </Button>
            <Button className="appbar-button" color="inherit">
              About
            </Button>
            <Button className="appbar-button" color="inherit">
              Tutorial
            </Button>
            <Fab variant="extended" color="primary" aria-label="Add">
              I found a piece!
            </Fab>`
          </Toolbar>
        </AppBar>

        <div className="counter-section flex-container-row">
          <img className="puzzle-splash" src={puzzleSplashLeft} />

          <div className="flex-grow counter-container">
            <div className="counter" color="inherit">
              620
              <div className="counter-subtext" color="inherit">
                <div>pieces</div>
                <div>remaining</div>
              </div>
            </div>
          </div>

          <div className="flex-grow counter-container">
            <div className="counter" color="inherit">
              18
              <div className="counter-subtext" color="inherit">
                <div>days</div>
                <div>remaining</div>
              </div>
            </div>
          </div>

          <img className="puzzle-splash" src={puzzleSplashRight} />
        </div>

        <div className="leaderboard-section flex-container-row">

          <div className="leaderboard-container flex-grow">
            <div className="leaderboard-header">
              Leaderboard
            </div>
            <List component="nav" dense>
              {["Eric", "Eric", "Eric", "Eric", "Eric", "Eric"].map((x, i) => (
                <ListItem button>
                  <ListItemText inset primary={`${i}. ${x}`} />
                </ListItem>)
              )}
            </List>
          </div>
          <div className="leaderboard-container flex-grow">
            <div className="leaderboard-header">
              Pieces per day
            </div>
            <List component="nav" dense>
              {["Eric", "Eric", "Eric", "Eric", "Eric", "Eric"].map((x, i) => (
                <ListItem button>
                  <ListItemText inset primary={`${i}. ${x}`} />
                </ListItem>)
              )}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
