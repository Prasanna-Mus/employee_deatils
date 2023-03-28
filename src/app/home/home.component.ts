import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageNum!: any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.queryParamMap.subscribe(params =>{
    console.log(params)
   })
  
  }

}
