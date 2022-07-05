import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  user={
    email:'',
    name:'',
    name1:''
  }

  constructor(private wishService:WishService, private router:Router) { }

  ngOnInit(): void {
  }
 
send(){
  console.log('helo ts file')
this.wishService.sendMail(this.user)
}

greeting(){
this.router.navigate(['/greeting'])
}
}
