import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{ChartService} from '../services/chart.service';

@Component({
  selector: 'app-chart-toolbar',
  templateUrl: './chart-toolbar.component.html',
  styleUrls: ['./chart-toolbar.component.css']
})
export class ChartToolbarComponent implements OnInit {

  constructor(private httpClient: HttpClient,private router:Router,private chartService:ChartService) {}

goToBarChart(){
  this.router.navigate(['bar-chart']);
  this.chartService.getBarChart();
}


  goToNational(){
    this.router.navigate(['category',"national"]);
    this.chartService.getTrending("national");

  }
  goToInterNational(){
    this.router.navigate(['category',"InterNational"]);
    this.chartService.getTrending("Inter-national");

  }
  goToSports(){
    this.router.navigate(['category',"Sports"]);
    this.chartService.getTrending("sports");

  }
  goToBusiness(){
    this.router.navigate(['category',"Business"]);
    this.chartService.getTrending("business");

  }
  goToMovies(){
    this.router.navigate(['category',"Movies"]);
    this.chartService.getTrending("movies");

  }
  goToTechnology(){
    this.router.navigate(['category',"Technology"]);
    this.chartService.getTrending("technology");

  }
  goToEconomy(){
    this.router.navigate(['category',"Economy"]);
    this.chartService.getTrending("economy");

  }

  ngOnInit() {
  }

}
