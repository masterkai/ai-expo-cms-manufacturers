import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from '../home/header/header';

@Component({
  selector: 'app-setting',
	imports: [RouterOutlet, Header, RouterLink, RouterLinkActive],
  templateUrl: './setting.html',
  styleUrl: './setting.scss'
})
export class Setting {

}
