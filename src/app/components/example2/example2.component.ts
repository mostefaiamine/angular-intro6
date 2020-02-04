import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/services/movie/movie.service';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  data: Movie[];

  constructor(private $ser: MovieService) {
    $ser.getMovies().subscribe(
      s => this.data = s
    ); 
  }

  ngOnInit() {
  }

}
