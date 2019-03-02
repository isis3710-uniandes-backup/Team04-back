import moment from 'moment';
import uuid from 'uuid';

class Activity {
    constructor(){
        this.activities =[];
    }

    create(data){
        const newActivity = {
            id: uuid.v4(),
            nombre: data.nombre || ' ',

        };
        this.activities.push(newActivity);
        return newActivity;
    }

    findOne(id){
        return this.activities.find(activity => activity.id === id);
    }

    
}
export default new Activity();