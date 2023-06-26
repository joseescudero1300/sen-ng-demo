import { AuthService, RolesService } from '@aduana/an-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  userInfo : any = {};
  roles : any = {};
  constructor (private rolesService:RolesService, private authService: AuthService) {
    
  }
  ngOnInit(): void {
    this.rolesService.data$.subscribe( data=>
      this.roles = data
    );

    this.userInfo =  this.authService.getLoggedUser();
    
  }

}
