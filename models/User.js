import moment from 'moment';
import uuid from 'uuid';

class User{
    /**Class constructor
     * @param {object} data
    */
   constructor(){
       this.users =[];
   }
   /**
    * @returns {object} user object
    */
   create(data){
       const newUser = {
           idUsuario: data.idUsuario || uuid.v4(),
           usuario: data.username || ' ',
           contrasenia: data.password || ' ',
           nombres: data.nombres ||' ',
           apellidos: data.apellidos || ' ',
           nacionalidad: data.nacionalidad ||' ',
           correo: data.correo ||' ',
           fechaNacimiento: data.fechaNacimiento ||' ',
           tipo: data.tipo || ''
       };

       this.users.push(newUser);
       return newUser;
   }

   /**
    * @param {uuid} idUsuario
    * @returns {object} user object
    */
   findOne(idUsuario) {
    return this.users.find(user => user.idUsuario === idUsuario);
  }

  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }

  /**
   * 
   * @param {uuid} idUsuario
   * @param {object} data 
   */
  update(idUsuario, data) {
    const user = this.findOne(idUsuario);
    const index = this.users.indexOf(user);
    this.users[index].nombres = data['nombres'] || user.nombres;
    this.users[index].apellidos = data['apellidos'] || user.apellidos;
    this.users[index].nacionalidad = data['nacionalidad'] || user.nacionalidad;
    this.users[index].correo = data['correo'] || user.correo;
    this.users[index].fechaNacimiento = data['fechaNacimiento'] || user.fechaNacimiento;
    return this.users[index];
  }

    /**
   * 
   * @param {uuid} idUsuario 
   */
  delete(idUsuario){
      const user = this.findOne(idUsuario);
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
      return {};
  }
}

export default new User();