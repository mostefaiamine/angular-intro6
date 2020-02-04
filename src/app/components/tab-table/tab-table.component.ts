import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from 'src/services/movie/movie.service';

@Component({
  selector: 'app-tab-table',
  templateUrl: './tab-table.component.html',
  styleUrls: ['./tab-table.component.scss']
})
export class TabTableComponent implements OnInit {

  columns: string[] = ['id', 'title', 'year'];

  source: Movie[];

  constructor($ser: MovieService) {
    $ser.getMovies().subscribe(
      s => this.source = s
    );
   }

  ngOnInit() {
  }

}
