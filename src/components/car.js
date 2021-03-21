import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import EditCarForm from './editcarform';

export default class Car extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCar = this.updateCar.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteCar(this.props._id);
    }

    updateCar(car) {
        this.props.updateCar(car);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.model} {this.props.brand}</h5>
                    <p className="card-text"> Year {this.props.year} <br/> {this.props.miles} miles<br/>
              ${this.props.price} dollars</p>
                    <h6>Edit Car Details</h6>
                    <EditCarForm {...this.props} updateCar={this.props.updateCar} />
                </div> 
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
                </div>
                <br/>
            </div>
        
        );
    }
}