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

  //get
  static findAll(request, response) {
    response.status(200).json({ users: usuarios })
  }
//get
  static findById(request, response) {
    const { id } = request.params;

    const user = usuarios.find((user) => user.id == id);

    if (!user) {
      response.status(404).json({ message: "Usuario não encontrado" });
      return;
    }
    response.json({ user });

  }

//post
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
    response.status.json({ user });
  }

  //PUT
  static update(request, response) {
    //pegando o parametro da URL
    const { id } = request.params;
    //pegando o body(payload)
    const { name, email, phone } = request.body

    //procurando o id do usuario no array e comparando se é igual ao //id// da requisição.
    const idUserFound = usuarios.findIndex((user) => user.id === parseInt(id));
    //Se não encontrou o id igual do parametro, mostra o 404.
    if (idUserFound == -1){
      response.status(404).json({message: "Usuario não encontrado"});
      return;
    }

    //se encontrou, alterar com os dados passados.
    usuarios[idUserFound] = {id, name, email, phone}
    //e retorna a resposta
    response.status(200).json({user: usuarios[idUserFound]});

    //splice(para o delete)

  }

   //splice(para o DELETE)
static delete(request, response) {
  //pegando o parametro da URL
  const { id } = request.params;

  //procurando o id do usuario no array
  const idUserFound = usuarios.findIndex((user) => user.id === parseInt(id));

  //Se não encontrou o id igual do parametro, mostra o 404.
  if (idUserFound === -1) {
    response.status(404).json({ message: "Usuario não encontrado" });
    return;
  }

  //se encontrou, remove o usuário
  usuarios.splice(idUserFound, 1);

  //responde com status 200 e uma mensagem de sucesso
  response.status(200).json({ message: "Usuario removido com sucesso" });
}

}

//exportando o UserController
export default UserController;