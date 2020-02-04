import { Injectable } from '@angular/core';
import { Movie } from 'src/model/movie';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private $data: Movie[] = [
        { id: 1, title: 'The empire strikes back', year: 1981 },
        { id: 2, title: 'ET', year: 1983 },
        { id: 3, title: 'John Wick', year: 2014 },
        { id: 4, title: 'Aliens', year: 1986 },
        { id: 5, title: 'Matrix', year: 1999 },
        { id: 6, title: 'Avengers Endgame', year: 2018 },
    ];

    getMovies(): Observable<Movie[]> {
        return of(this.$data);
    }

    filter(text: string): Observable<Movie[]> {
        let temp = this.$data.filter(e => e.title.includes(text));
        if (temp.length > 3) {
            temp = temp.slice(0, 2);
        }
        return of(temp);
    }
}