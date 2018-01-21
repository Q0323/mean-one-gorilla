import { Component, OnInit, Inject } from '@angular/core';
import { Config, APP_CONFIG } from 'app/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items = `/${this.config.routes.items}`;
  public newItem = `/${this.config.routes.createItem}`;

  navigation = [
    { link: this.items, label: 'Lista de Items' },
    { link: `${this.items}${this.newItem}`, label: 'Crear item' }
  ];

  constructor(@Inject(APP_CONFIG) public config: Config) { }

  ngOnInit() {
  }

}
