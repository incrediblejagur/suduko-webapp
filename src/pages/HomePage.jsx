import React from 'react';
import { Redirect } from 'react-router-dom';
// import logo from './logo.gif';
import '../styling/App.css';
import '../styling/index.css';
import NavBar from '../components/nav-bar'
import logo from '../styling/images/logo.gif';
import Auth from '../Auth'


export default class HomePage extends React.Component {
  state = {
    selectedLvl: "",
    gameMode: "",
    redirect: false,
    popupMsg: ""
  }

  handleLevelChange = event => {
    let selectedLvl = event.target.value;
    this.setState({ selectedLvl })
  }

  handleGameChange = event => {
    let gameMode = event.target.value;
    this.setState({ gameMode })
  }

  startGame = () => {
    if (this.state.selectedLvl !== "" && this.state.gameMode !== "") {
      this.setState({ popupMsg: "" })
      this.setState({ redirect: true })
    } else {
      let alert = [<div class="alert alert-warning" role="alert">Please select a level</div>]
      this.setState({ popupMsg: alert[0] })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/game/${this.state.gameMode}/${this.state.selectedLvl}`} />
    }

    return (
      <div className="bg">
        <NavBar />
        <div className="container">
          <div className="row justify-content-center center-heading">
            <h1 className="heading">Sudoku</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row justify-content-center">
            <div className="button">
              <select class="custom-select choosegame-input" onChange={this.handleGameChange}>
                <option>Choose Gamemode</option>
                <option value="classic">Classic</option>
                <option value="timestrike">TimeStrike</option>
              </select>
              <div class="input-group">
                <select class="custom-select" onChange={this.handleLevelChange}>
                  <option selected>Choose Level</option>
                  <option value="easy">Easy</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="hard">Hard</option>
                  <option value="expert">Expert</option>
                </select>
                <div class="input-group-append">
                  <button class="btn btn-warning btm-md" onClick={this.startGame}>Start Game</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {this.state.popupMsg}
          </div>
        </div>
      </div>
    )
  }
}

