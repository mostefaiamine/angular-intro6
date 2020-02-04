import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MovieService } from 'src/services/movie/movie.service';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  cBirthDate: FormControl;

  cFavoriteMovie: FormControl;

  cKids: FormControl;

  cLikeMovies: FormControl;

  cRate: FormControl;

  cName: FormControl;

  cSituation: FormControl;

  form: FormGroup;


  filteredOptions: Observable<Movie[]>;

  constructor($fb: FormBuilder, private $ser: MovieService) {
    this.cName = $fb.control(null, [Validators.required]);
    this.cBirthDate = $fb.control(new Date(), [Validators.required]);
    this.cFavoriteMovie = $fb.control(null);
    this.cSituation = $fb.control('2', [Validators.required]);
    this.cKids = $fb.control(0, [Validators.required]);
    this.cLikeMovies = $fb.control(false, []);
    this.cRate = $fb.control(0, []);
    this.cSituation.valueChanges.subscribe(
      v => {
        // console.log('##', v);
        if (v == 1) {
          this.cKids.disable();
        } else {
          this.cKids.enable();
        }
      }
    );
    this.form = $fb.group({
      birthdate: this.cBirthDate,
      favorite: this.cFavoriteMovie,
      kids: this.cKids,
      likeMovies: this.cLikeMovies,
      name: this.cName,
      rate: this.cRate,
      situation: this.cSituation
    });
    this.filteredOptions = this.cFavoriteMovie.valueChanges.pipe(
      switchMap(value => this.$ser.filter(value))
    );
  }

  ngOnInit() {

  }

}
