import UserModel from '../../models/User';
const User = {
    /**
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */
    create(req, res) {
        if (!req.body.nombres && !req.body.apellidos && !req.body.nacionalidad && !req.body.corre && !req.body.fechaNacimiento) {
          return res.status(400).send({'message': 'All fields are required'})
        }
        const user = UserModel.create(req.body);
        return res.status(201).send(user);
      },
      /**
         * 
         * @param {object} req 
         * @param {object} res 
         * @returns {object} users array
         */
    getAll(req, res) {
        const users = UserModel.findAll();
        return res.status(200).send(users);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
    getOne(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
        return res.status(404).send({'message': 'user not found'});
        }
        return res.status(200).send(user);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
    update(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).send({'message': 'user not found'});
        }
        const updatedUser = UserModel.update(req.params.id, req.body)
        return res.status(200).send(updatedUser);
    },
     /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
    delete(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).send({'message': 'user not found'});
        }
        const deletedUser = UserModel.delete(req.params.id);
        return res.status(204).send({'message': 'user deleted'});
    }
}
export default User;