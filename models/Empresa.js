import uuid from 'uuid';

class Empresa {

  constructor() {
    this.empresas = [];
  }
  
  create(data) {
    const newEmpresa = {
      id: uuid.v4(),
      nombre: data.nombre || '',
      dueño: data.dueño || '',
      descripcion: data.descripcion || '',
      serviciosT: data.serviciosT || '',
      serviciosM: data.serviciosM || '',
      serviciosA: data.serviciosA || '',
      viajes: data.viajes || ''
    };      
    this.empresas.push(newEmpresa);
    return newEmpresa
  }

  findByOwner(dueño){
    return this.empresas.find(empresa => empresa.dueño === dueño);
  }

  findOne(id) {
    return this.empresas.find(empresa => empresa.id === id);
  }

  findAll() {
    return this.empresas;
  }

  update(id, data) {
    const empresa = this.findOne(id);
    const index = this.empresas.indexOf(empresa);
    this.empresas[index].nombre = data['nombre'] || empresa.nombre;
    this.empresas[index].serviciosT = data['serviciosT'] || empresa.serviciosT;
    this.empresas[index].serviciosM = data['serviciosM'] || empresa.serviciosM;
    this.empresas[index].serviciosA = data['serviciosA'] || empresa.serviciosA;
    this.empresas[index].viajes = data['viajes'] || empresa.viajes;
    return this.empresas[index];
  }

  delete(id) {
    const empresa = this.findOne(id);
    const index = this.empresas.indexOf(empresa);
    this.empresas.splice(index, 1);
    return {};
  }
}
export default new Empresa();