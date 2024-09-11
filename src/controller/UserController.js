let usuarios = [
  { id: 1, name: "A", email: "a@email.com", phone: "83987368120" },
  { id: 2, name: "B", email: "b@email.com", phone: "83985690128" },
  { id: 3, name: "C", email: "c@email.com", phone: "83985199823" },
];

class UserController {
  //o metodo static pertense a classe UserController
  //static é um metodo de request e response
  static teste(request, response) {
    response.send({ message: "Hello World" })
  }
  static findAll(request, response) {
    response.json({ users: usuarios })
  }

  static save(request, response) {
    const { name, email, phone } = request.body;

    let user = {
      //at(-1) = ultimo usuario
      id: usuarios.at(-1).id + 1,
      name,
      email,
      phone,
    }
    usuarios.push(user);
    response.json({ user });
  }

  static findById(request, response) {
    const { id } = request.params;

    const user = usuarios.find((user) => user.id == id);

    if (!user) {
      response.status(404).json({ message: "Usuario não encontrado" });
      return;
    }
    response.json({ user });

  }

}

//exportando o UserController
export default UserController;