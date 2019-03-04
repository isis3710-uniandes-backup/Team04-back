import uuid from 'uuid';

class ServicioM {

  constructor() {
    this.serviciosM = [];
  }
  

  create(data) {
    const newServicioM = {
      id: uuid.v4(),
      nombreEmpresa: data.nombreEmpresa || '',
      rutas: data.rutas || '',
      origen: data.origen || '',
      destino: data.destino || ''
    };
    this.serviciosM.push(newServicioM);
    return newServicioM
  }

  findOne(id) {
    return this.serviciosM.find(servicioM => servicioM.id === id);
  }

  findAll() {
    return this.serviciosM;
  }

  update(id, data) {
    const servicioM = this.findOne(id);
    const index = this.serviciosM.indexOf(servicioM);
    this.serviciosM[index].nombreEmpresa = data['nombreEmpresa'] || servicioM.nombreEmpresa;
    this.serviciosM[index].rutas = data['rutas'] || servicioM.rutas;
    this.serviciosM[index].origen = data['origen'] || servicioM.origen;
    this.serviciosM[index].destino = data['destino'] || servicioM.destino;
    return this.serviciosM[index];
  }

  delete(id) {
    const servicioM = this.findOne(id);
    const index = this.serviciosM.indexOf(servicioM);
    this.serviciosM.splice(index, 1);
    return {};
  }
}
export default new ServicioM();