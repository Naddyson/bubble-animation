import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Animation from './Animation';



class App extends Component {
  constructor(props){
      super(props);
      this.gapak = React.createRef();
      this.gotoit = React.createRef();
  }
  componentDidMount(){
      //координаты можно получить только после рендера. Или как хранить всё координаты?
      let gapak = this.gapak.current;
      let gotoit = this.gotoit.current;
      ReactDOM.render(<Animation from={gapak} to={gotoit}/>,
          document.getElementById('animation_container')
      )
  }
  render(){
    return (
      <div className="App">
        <div className='employers'>
            <h2>Employers</h2>
          <div className='employer' id='gapak' ref={this.gapak}>
              Alex Gapak
          </div>
          <div className='employer' ref='kornak'>
            Evgenii Kornak
          </div>
          <div className='employer' ref='loichenko'>
            Maxim Loichenko
          </div>
        </div>
          <div className='projects'>
              <h2> Projects </h2>
              <div className='project' ref='polinezya'>
                Polinezya
              </div>
              <div className='project' id='gotoit' ref={this.gotoit}>
                Go to IT
              </div>
              <div className='project' ref='golems'>
                Golems
              </div>
          </div>
          <div id='animation_container'>

          </div>

      </div>
    );
  }
}

export default App;
