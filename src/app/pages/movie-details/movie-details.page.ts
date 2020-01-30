import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SearchType } from "src/app/services/movie.service";
import { MovieService } from "./../../services/movie.service"
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    //We get the paremeter that movie page pass an call movieService to search the details
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result =>{
      console.log('details: ', result);
      this.information = result;
    });
  }
  //openWebsite it's to open when everything it's loaded


}
