// Temp api endpoint for 10 days. Resource name is "cars"/

const CARS_ENDPOINT = 'https://crudcrud.com/api/7349767c822c40a6a43d4e28de517c1c/cars';

//CRUD Operations

class CarService {
    getAll = async() => {
        try {
            const resp = await fetch(CARS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching cars: ${e}`);
        }
    }

    update = async(car) => {
        try {
            let updatedWithoutId = {
                model: car.model,
                brand: car.brand,
                year: car.year,
                miles: car.miles,
                price: car.price
            }
            const resp = await fetch(`${CARS_ENDPOINT}/${car._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating car file: ${e}`);
        }
    }

    create = async(car) => {
        try {
            const resp = await fetch(`${CARS_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating car file: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${CARS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting car file:${e}`);
        }
    }
}

export const carService = new CarService();