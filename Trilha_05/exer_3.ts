abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set(); 

    addFavorite(item: string): void {
        this.favorites.add(item); 
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort(); 
    }
}


class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = []; 

    addFavorite(item: string): void {
        this.favorites.unshift(item); 
    }

    getFavorites(): string[] {
        return this.favorites; 
    }
}


const moviesManager = new MoviesFavoriteManager();

moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Interstellar");
moviesManager.addFavorite("The Godfather");

console.log("Filmes Favoritos:");
console.log(moviesManager.getFavorites());