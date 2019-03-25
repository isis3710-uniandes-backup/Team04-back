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
           id: uuid.v4(),
           usuario: data.username || ' ',
           contrasenia: data.password || ' ',
           nombres: data.nombres ||' ',
           apellidos: data.apellidos || ' ',
           nacionalidad: data.nacionalidad ||' ',
           correo: data.correo ||' ',
           fechaNacimiento: data.fechaNacimiento ||' '
       };

       this.users.push(newUser);
       return newUser;
   }

   /**
    * @param {uuid} id
    * @returns {object} user object
    */
   findOne(id) {
    return this.users.find(user => user.id === id);
  }

  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }

  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const user = this.findOne(id);
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
   * @param {uuid} id 
   */
  delete(id){
      const user = this.findOne(id);
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
      return {};
  }
}

export default new User();