interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}


class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "As Vantagens de Ser Invisível", autor: "Stephen Chbosky", genero: "Drama", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });

console.log(bibliotecaGestao.filtrarPorGenero("Drama")); 
console.log(bibliotecaGestao.buscarPorAutor("Machado de Assis")); 
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados()); 
