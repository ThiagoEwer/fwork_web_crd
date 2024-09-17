class BooksController {
    static exemple(request, response) {
        const { titulo, qtdePaginas, preco, autor } = request.body;

        response.status(200).json({ Books: { titulo, preco } })

    }
}

export default BooksController