import React, {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


/**
 * Contrast this with the edit form...in this, we demo use of functional components
 * and hooks (useState)
 */
export const NewCarForm = (props) => {
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [miles, setMiles] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        props.addNewCar({model,brand, year, miles , price});
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="modelInput">Model:</label>
                <input name="model" value={model} type="text" className="form-control" id="modelInput" 
                    onChange={(e) => setModel(e.target.value)} />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="brandInput">Brand:</label>
                    <input name="brand" value={brand} type="text" className="form-control" id="brandInput" 
                    onChange={(e) => setBrand(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="yearInput">Year:</label>
                <input name="year" type="text" value={year} className="form-control" id="yearInput" 
                    onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="milesInput">Miles:</label>
                <input name="miles" type="text" value={miles} className="form-control" id="milesInput" 
                    onChange={(e) => setMiles(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="priceInput">Price:</label>
                <input name="price" type="text" value={price} className="form-control" id="priceInput" 
                    onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-info">Add Car</button>
        </form>
    );
}