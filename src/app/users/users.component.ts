import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  user!:{
      id:string;
      name?:string;
  }
  constructor(public route:Router,private _activatedroute : ActivatedRoute) {
    // this.user = [];
  }
  ngOnInit(): void {
    this.user={
      id:this._activatedroute.snapshot.params['id'],
      name:this._activatedroute.snapshot.params['name']
    } ; 
    this._activatedroute.params.subscribe((data)=>{
      this.user={
        id:data['id'],
        name:data['name']
      }
    });
        //retrieving data from queryParams in 1 way
        this._activatedroute.queryParams.subscribe(data=>{
            console.log(data);
        })
 //retrieving data from queryParams in 2 way
 
    // console.log(this._activatedroute.snapshot.queryParams);
    // console.log(this._activatedroute.snapshot.fragment);
  }
gotocat(){
this.route.navigateByUrl('/categories')
}
}
