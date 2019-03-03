import moment from 'moment';
import uuid from 'uuid';

class Activity {
    constructor(){
        this.activities =[];
    }

    create(data){

        if(this.findOne(data.nombre)){
           return {"error": "An activity with that name already exist"} ;
        }
        const newActivity = {
            idActividad: uuid.v4(),
            nombre: data.nombre || ' ',
            descripcion: data.descripcion || ' ',
            fechaInicio: data.fechaInicio || ' ',
            fechaFin: data.fechaFin ||' ',
            puntuacion: data.puntuacion || ' '
        };
        this.activities.push(newActivity);
        return newActivity;
    }

    findOne(nombre){
        return this.activities.find(activity => activity.nombre === nombre);
    }

    findAll(){
        return this.activities;
    }

    update(nombre, data){
        const activity = this.findOne(nombre);
        const index = this.activities.indexOf(activity);

        
        this.activities[index].nombre = data['nombre'] || activity.nombre;
        this.activities[index].descripcion = data['descripcion'] || activity.descripcion;
        this.activities[index].fechaInicio = data['fechaInicio'] || activity.fechaInicio;
        this.activities[index].fechaFin= data['fechaFin'] || activity.fechaFin;
        if(data['puntuacion']){
            this.activities[index].puntuacion = data['puntuacion'];
        }

        if(data['puntuacion'] === 0){
            this.activities[index].puntuacion = 0;
        }
    }

    delete(nombre){
        const activity = this.findOne(nombre);
        const index = this.activities.indexOf(activity);
        this.activities.splice(index,1);
        return {};
    }
}
export default  Activity;