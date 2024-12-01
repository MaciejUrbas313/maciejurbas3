import { Component } from '@angular/core';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MainDescriptionComponent } from "./main-description/main-description.component";
import { MainTechnologyComponent } from './main-technology/main-technology.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainMenuComponent, MainDescriptionComponent, MainTechnologyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
