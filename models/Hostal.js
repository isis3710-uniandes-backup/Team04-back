import uuid from 'uuid';

class Hostal {
    constructor(){
        this.hostales =[];
    }

    create(data){

        if(this.findOne(data.nombre)){
           return {"error": "An Hostel with that name already exist"} ;
        }
        const newHostal = {
            idHostal: uuid.v4(),
            nombre: data.nombre || ' ',
            descripcion: data.descripcion || ' ',
            precio: data.precio || ' ',
            telefono: data.telefono || ' ',
            sitioWeb: data.sitioWeb || ' ',
            ciudad: data.ciudad || ' ',
            direccion: data.direccion || ' ',
            puntuacion: data.puntuacion || ' '
        };
        this.hostales.push(newHostal);
        return newHostal;
    }

    findOne(nombre){
        return this.hostales.find(hostal => hostal.nombre === nombre);
    }

    findAll(){
        return this.hostales;
    }

    update(nombre, data){
        const hostal = this.findOne(nombre);
        const index = this.hostales.indexOf(hostal);

        this.hostales[index].nombre = data['nombre'] || hostal.nombre;
        this.hostales[index].descripcion = data['descripcion'] || hostal.descripcion;
        this.hostales[index].precio = data['precio'] || hostal.precio;
        this.hostales[index].telefono = data['telefono'] || hostal.telefono;
        this.hostales[index].sitioWeb = data['sitioWeb'] || hostal.sitioWeb;
        this.hostales[index].ciudad = data['ciudad'] || hostal.ciudad;
        this.hostales[index].direccion = data['direccion'] || hostal.direccion;
        if(data['puntuacion']){
            this.hostales[index].puntuacion = data['puntuacion'];
        }
        if(data['puntuacion'] === 0){
            this.hostales[index].puntuacion = 0;
        }
    }

    delete(nombre){
        const hostal = this.findOne(nombre);
        const index = this.hostales.indexOf(hostal);
        this.hostales.splice(index,1);
        return {};
    }
}
export default hostal;