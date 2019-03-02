import EmpresaModel from '../../models/Empresa';

const Empresa = {

  create(req, res) {
    const empresa = EmpresaModel.create(req.body);
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(servicio) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(201).send(empresa);
  },

  getAll(req, res) {
    const empresas = EmpresaModel.findAll();
    return res.status(200).send(empresas);
  },

  getOne(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    return res.status(200).send(empresa);
  },

  update(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    const updatedEmpresa = EmpresaModel.update(req.params.id, req.body)
    return res.status(200).send(updatedEmpresa);
  },

  delete(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    const ref = EmpresaModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Empresa;