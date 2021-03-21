import React from 'react';
import Car from './components/car';
import { NewCarForm } from './components/newcarform';
import { carService } from './rest/carservice';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }

    this.addNewCar = this.addNewCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.updateCar = this.updateCar.bind(this);
  }

  // CRUD operations defined in CarServices

  _refreshCars = async() => {
    const cars = await carService.getAll();
    this.setState({ cars });
  }

  componentDidMount() {
    this._refreshCars();
  }

  addNewCar = async(car) => {
    await carService.create(car);
    this._refreshCars();
  }

  updateCar = async(car) => {
    await carService.update(car);
    this._refreshCars();
  }

  deleteCar = async(id) => {
    await carService.delete(id);
    this._refreshCars();
  }


  render (){
    let cars = this.state.cars.map(car => {
      return <Car {...car} key={car._id} 
        deleteCar={this.deleteCar} 
        updateCar={this.updateCar}/>
    });
        
    return (
      <div className="container">
        <div className="jumbotron" id="banner">
          <h1 className="display-2"> THE CAR DEPOT</h1>
           </div>
           <div className="container app">
          <div className="row">
          <div className="col">
            
            <h2>Please Enter Car Information </h2>
            
            <div className="card-body">
              <NewCarForm addNewCar={this.addNewCar}/>
              </div>
              </div>
              <br/>
              <div className="col-lg-2"></div>
              <div className="col">
                <div className="row">
                  <div className="container">
                  {cars}
                  <br/>
                  </div>
                  <div className="App">
          
          <Footer/>
      </div>
                </div>
              </div>
           </div>
          </div>
        </div>
    );
  }
}

