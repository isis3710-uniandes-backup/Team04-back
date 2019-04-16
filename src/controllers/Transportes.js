import ServicioAModel from '../../models/ServicioA';
import ServicioMModel from '../../models/ServicioM';
import ServicioTModel from '../../models/ServicioT';

const Transportes= {
    getAll(req,res){
        const servicios = [];
        servicios.concat(ServicioAModel.findAll());
        servicios.concat(ServicioMModel.findAll());
        servicios.concat(ServicioTModel.findAll());

        return res.status(200).send(servicios);
    }
}

export default Transportes;