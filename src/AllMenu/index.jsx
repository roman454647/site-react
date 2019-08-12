import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AllMenu extends Component {
  constructor(props){
    super(props)

    this.state = {
      dish_name:'',
      description:''
    }
  }

  toggleChangeMJ(){
     this.setState(prevState => ({
       isMJ: !prevState.isMJ,
     }));
   }

   toggleChangeJB() {
     this.setState(prevState => ({
       isJB: !prevState.isJB,
     }));
   }

   toggleChangeDrake() {
     this.setState(prevState => ({
       isDrake: !prevState.isDrake,
     }));
   }

  onSubmit(e) {
    e.preventDefault();
   let arr = [];
   for (var key in this.state) {
     if(this.state[key] === true) {
       arr.push(key);
     }
   }
   let data = {
     check: arr.toString()
   };
  }

  render() {
    return (
      <div className="container">
        <h2>Save the multiple checkbox values in React js</h2>
        <hr />
        <form onSubmit = {this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isMJ}
                onChange={this.toggleChangeMJ}
                className="form-check-input"
              />
              Salads
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                checked={this.state.isJB}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              Apperative
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDrake}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Main Dishes
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AllMenu;
