import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class EditCarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: props.model,
            brand: props.brand,
            year: props.year,
            miles: props.miles,
            price: props.price,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateCar(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="modelInput">Model:</label>
                    <input name="model" value={this.state.model} type="text" className="form-control" id="modelInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="brandInput">Brand:</label>
                        <input name="brand" value={this.state.brand} type="text" className="form-control" id="brandInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="yearInput">Year:</label>
                    <input name="year" value={this.state.year} type="text" className="form-control" id="yearInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="milesInput">Miles:</label>
                    <input name="miles" value={this.state.miles} type="text" className="form-control" id="milesInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="priceInput">Price:</label>
                    <input name="price" value={this.state.price} type="text" className="form-control" id="priceInput" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        );
    }
}