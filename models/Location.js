import moment from 'moment';
import uuid from 'uuid';
import Activity from './Activity';

class Location{
    constructor(){
        this.locations=[];
    }

    create(data){
        if(this.findOne(data.nombre)){
           return {"error": "A location with that name already exists"} ;
        }
        const newLocation = {
            idLocation: uuid.v4(),
            nombre: data.nombre || ' ',
            descripcion: data.descripcion || ' ',
            ubicacion: data.ubicacion || ' ',
            puntuacion: data.puntuacion || 0,
            activities: new Activity()
        };
        if(data.activities != undefined){
            for(activity of data.activities){
                newLocation.activities.create(activity);
            }
        }
        this.locations.push(newLocation);
        return newLocation;
    }

    findOne(nombre){
        const elemen = this.locations.find(location => location.nombre === nombre);
        return elemen;
    }

    findAll(){
        return this.locations;
    }

    update(nombre, data){
        const location = this.findOne(nombre);
        if(!location){
            return ;
        }
        const index = this.locations.indexOf(location);

        this.locations[index].nombre = data['nombre'] || location.nombre;
        this.locations[index].descripcion = data['descripcion'] || location.descripcion;
        this.locations[index].ubicacion = data['ubicacion'] || location.ubicacion;

        if(data['puntuacion']){
            this.locations[index].puntuacion = data['puntuacion'];
        }

        if(data['puntuacion'] === 0){
            this.locations[index].puntuacion = 0;
        }

        if(data['activities']){
            for(let activity of data['activities']){
                this.locations[index].activities.create(activity);
            }
        }else{
            this.locations[index].activities = location.activities;
        }
        return location;
    }    

    delete(nombre){
        const location = this.findOne(nombre);
        const index = this.locations.indexOf(location);
        this.locations.splice(index,1);
        
    }

    findAllActivities(nombre){
        
        const location = this.findOne(nombre);
        if(!location){
            return [];
        }
        return location.activities.findAll();
    }

    findOneActivity(nombre, nombreActivity){
        const location = this.findOne(nombre);
        if(!location){
            return undefined;
        }
        return location.activities.findOne(nombreActivity);
    }

    createActivities(nombre, data){
        const location = this.findOne(nombre);
        if(!location){return undefined;}
        const activity = location.activities.create(data);
        return activity;
    }

    updateActivity(nombre, nombreActivity,data){
        const location = this.findOne(nombre);
        location.activities.update(nombreActivity, data);
    }
}

export default new Location();