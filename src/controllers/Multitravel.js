import MultitravelModel from '../../models/Multitravel';
import util from 'util';
const Multitravel = {
    getData(req, res){
        return res.status(200).send(MultitravelModel.getData());
    }
}
export default Multitravel;