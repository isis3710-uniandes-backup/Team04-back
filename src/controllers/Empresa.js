import EmpresaModel from '../../models/Empresa';
import fs from 'fs';
import util from 'util';

const Empresa = {

  create(req, res) {
    const empresa = EmpresaModel.create(req.body);
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(empresa) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(201).send(empresa);
  },

  getAll(req, res) {
    const empresas = EmpresaModel.findAll();
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(empresas) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(empresas);
  },

  getOne(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(empresa) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(empresa);
  },

  update(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    const updatedEmpresa = EmpresaModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(updatedEmpresa) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(updatedEmpresa);
  },

  delete(req, res) {
    const empresa = EmpresaModel.findOne(req.params.id);
    if (!empresa) {
      return res.status(404).send({ 'message': 'empresa not found' });
    }
    fs.appendFileSync("./JSONS/empresas.json", util.inspect(empresa) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    const ref = EmpresaModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Empresa;