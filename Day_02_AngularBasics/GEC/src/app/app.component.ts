import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';  //use for routing purpose
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CommonModule, FormsModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GEC';
  name = 'College';
  visibility = false;

  list = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];

  store = '';

  listener() {
    this.visibility = !this.visibility;
    console.log(this.store);
  }
}
