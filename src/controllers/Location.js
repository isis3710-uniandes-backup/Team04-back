import LocationModel from '../../models/Location';

const Location = {
    create(req, res){
        if(!req.body.nombre && !req.body.descripcion && !req.body.ubicacion && !req.body.puntuacion){
            return res.status(400).send({'message': 'All fields are required'});
        }

        const location = LocationModel.create(req.body);
        if(location.error != undefined){
            return res.status(202).send({'message': 'A location with that name already exist'});
        }
        return res.status(201).send(location);
    },
    getAll(req, res){
        const locations = LocationModel.findAll();
        return res.status(200).send(locations);
    },
    getOne(req, res){
        const location = LocationModel.findOne(req.params.nombre);
        if(!location){
            return res.status(404).send({'message': 'location not found'});
        }
        return res.status(200).send(location);
    },
    update(req, res){
        const location = LocationModel.findOne(req.params.nombre);
        if(!location){
            return res.status(404).send({'message': 'location not found'});
        }
        const updatedLocation = LocationModel.update(req.params.nombre, req.body);
        return res.status(200).send(updatedLocation);
    },
    delete(req, res){
        const location = LocationModel.findOne(req.params.nombre);
        if(!location){
            return res.status(404).send({'message': 'location not found'});
        }

        const deletedLocation = LocationModel.delete(req.params.nombre);
        return res.status(204).send();
    },
    getAllActivities(req, res){
        const activities = LocationModel.findAllActivities(req.params.nombre);
        return res.status(200).send(activities);
    },
    getOneActivity(req,res){
        const activity = LocationModel.findOneActivity(req.params.nombre, req.params.nombreActivity);
        if (!activity) {
            return res.status(404).send({'message': 'activity not found'});
        }
        return res.status(200).send(activity);
    },
    createActivities(req, res){
        console.log(req.params);
        const activities =[];
        for(let activ of req.body){
            console.log(activ);
            if(!activ.nombre && !activ.descripcion && !activ.fechaInicio && !activ.fechaFin && !activ.puntuacion){
                return res.status(400).send({'message': 'All fields are required'});
            }
           activities.push(LocationModel.createActivities(req.params.nombre, activ));
        }
        return res.status(200).send(activities);
    },
    updateActivity(req, res){
        const location = LocationModel.findOne(req.params.nombre);
        if(!location){
            return res.status(404).send({'message': 'location not found'});
        }
        const activity = location.activities.findOne(req.params.nombreActivity);
        if(!activity){
            return res.status(404).send({'message': 'activity not found'});
        }
        const updatedActivity = LocationModel.updateActivity(req.params.nombre, req.params.nombreActivity, req.body);
        return res.status(200).send(updatedActivity);
    }
}

export default Location;