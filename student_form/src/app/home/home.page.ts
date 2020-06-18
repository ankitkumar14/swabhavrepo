import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  component_name:string='HomeComponent';
  constructor(
    private router:Router
  ) {}
  showStudent()
  {
    this.router.navigate(['show-student']);
  }
  addStudent(){
    this.router.navigate(['add-student'])
  }
}
