import uuid from 'uuid';

class ServicioA {

  constructor() {
    this.serviciosA = [];
  }
  

  create(data) {
    const newServicioA = {
      id: uuid.v4(),
      nombreEmpresa: data.nombreEmpresa || '',
      rutas: data.rutas || '',
      origen: data.origen || '',
      destino: data.destino || ''
    };
    this.serviciosA.push(newServicioA);
    return newServicioA
  }

  findOne(id) {
    return this.serviciosA.find(servicioA => servicioA.id === id);
  }

  findAll() {
    return this.serviciosA;
  }

  update(id, data) {
    const servicioA = this.findOne(id);
    const index = this.serviciosA.indexOf(servicioA);
    this.serviciosA[index].nombreEmpresa = data['nombreEmpresa'] || servicioA.nombreEmpresa;
    this.serviciosA[index].rutas = data['rutas'] || servicioA.rutas;
    this.serviciosA[index].origen = data['origen'] || servicioA.origen;
    this.serviciosA[index].destino = data['destino'] || servicioA.destino;
    return this.serviciosA[index];
  }

  delete(id) {
    const servicioA = this.findOne(id);
    const index = this.serviciosA.indexOf(servicioA);
    this.serviciosA.splice(index, 1);
    return {};
  }
}
export default new ServicioA();