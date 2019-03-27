import uuid from 'uuid';

class Viaje {

  constructor() {
    this.viajes = [];
  }
  
  create(data) {
    const newViaje = {
      idUsuario: data.idUsuario,
      id: uuid.v4(),
      nombre: data.nombre || '',
      empresa: data.empresa || '',
      fechaInicio: data.fechaInicio || '',
      fechaFin: data.fechaFin || '',
      origen: data.origen || '',
      destino: data.destino || '',
      subViajes: data.subViajes || '',
      viajeAgendado: data.viajeAgendado || ''
    };
    this.viajes.push(newViaje);
    return newViaje
  }

  findOne(id) {
    return this.viajes.find(viaje => viaje.id === id);
  }

  findAll() {
    return this.viajes;
  }

  update(id, data) {
    const viaje = this.findOne(id);
    const index = this.viajes.indexOf(viaje);
    this.viajes[index].nombre = data['nombre'] || viaje.nombre;
    this.viajes[index].empresa = data['empresa'] || viaje.empresa;
    this.viajes[index].location = data['location'] || viaje.location;
    this.viajes[index].fechaInicio = data['fechaInicio'] || viaje.fechaInicio;
    this.viajes[index].fechaFin = data['fechaFin'] || viaje.fechaFin;
    return this.viajes[index];
  }

  delete(id) {
    const viaje = this.findOne(id);
    const index = this.viajes.indexOf(viaje);
    this.viajes.splice(index, 1);
    return {};
  }
}
export default new Viaje();