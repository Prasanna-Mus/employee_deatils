import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(private router:Router) {}  
  ngOnInit(): void {
    
  }
  gotohome(){
    this.router.navigate(['./home'],{ queryParams:{ page:1 , search:'prasanna'},
    });
  }
}
