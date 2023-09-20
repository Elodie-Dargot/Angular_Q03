import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Bonjour!';

  isAdmin: boolean = true;

  changeIsAdmin(){
    this.isAdmin = !this.isAdmin
  }
}
