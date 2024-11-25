import { Component } from '@angular/core';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MainDescriptionComponent } from "./main-description/main-description.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainMenuComponent, MainDescriptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
