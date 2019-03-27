import uuid from 'uuid';

class Hostal {
    constructor(){
        this.hostals =[];
    }

    create(data){
        if(this.findOne(data.nombre)){
           return {"error": "An Hostel with that name already exist"} ;
        }
        const newHostal = {
            idHostal: uuid.v4(),
            nombre: data.nombre || '',
            descripcion: data.descripcion || '',
            precio: data.precio || '',
            telefono: data.telefono || '',
            sitioWeb: data.sitioWeb || '',
            ciudad: data.ciudad || '',
            direccion: data.direccion || '',
            puntuacion: data.puntuacion || ''
        };
        this.hostals.push(newHostal);
        return newHostal
    }

    findOne(nombre){
        return this.hostals.find(hostal => hostal.nombre === nombre);
    }

    findAll(){
        return this.hostals;
    }

    update(nombre, data){
        const hostal = this.findOne(nombre);
        const index = this.hostals.indexOf(hostal);

        this.hostals[index].nombre = data['nombre'] || hostal.nombre;
        this.hostals[index].descripcion = data['descripcion'] || hostal.descripcion;
        this.hostals[index].precio = data['precio'] || hostal.precio;
        this.hostals[index].telefono = data['telefono'] || hostal.telefono;
        this.hostals[index].sitioWeb = data['sitioWeb'] || hostal.sitioWeb;
        this.hostals[index].ciudad = data['ciudad'] || hostal.ciudad;
        this.hostals[index].direccion = data['direccion'] || hostal.direccion;
        if(data['puntuacion']){
            this.hostals[index].puntuacion = data['puntuacion'];
        }
        if(data['puntuacion'] === 0){
            this.hostals[index].puntuacion = 0;
        }
    }

    delete(nombre){
        const hostal = this.findOne(nombre);
        const index = this.hostals.indexOf(hostal);
        this.hostals.splice(index,1);
        return {};
    }

    findAllByCity(city){
        var hostalesInCity =[];
        for(var hostal of this.hostals){
            if(hostal.ciudad == city){hostalesInCity.push(hostal);}
        }
        return hostalesInCity;
    }
}
export default new Hostal();