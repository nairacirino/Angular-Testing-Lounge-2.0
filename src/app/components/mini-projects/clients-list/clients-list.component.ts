import { Component } from '@angular/core';
import { Client } from './clients.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {

name: string;
clients: Client[] = [];

addClient() {
  this.clients.push({name: this.name});
  this.name = "";
}

}
