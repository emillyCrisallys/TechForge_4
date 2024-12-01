class Livro {
  
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    
    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo; 
        this.autor = autor; 
        this.paginas = paginas; 
        this.lido = false; 
    }

  
    marcarComoLido() {
        this.lido = true; 
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
}


const meuLivro = new Livro("1984", "George Orwell", 328); 
console.log(`Título: ${meuLivro.titulo}, Autor: ${meuLivro.autor}, Páginas: ${meuLivro.paginas}, Lido: ${meuLivro.lido}`); 
meuLivro.marcarComoLido();
console.log(`Lido: ${meuLivro.lido}`); 