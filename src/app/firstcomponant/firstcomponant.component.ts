import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomponant',
  templateUrl: './firstcomponant.component.html',
  styleUrls: ['./firstcomponant.component.css']
})
export class FirstcomponantComponent {
  hero = {
    name: '',
    power: 0,
    image: '',
  }
  heros: any[] = [];
  ajout() {
    this.heros.push(this.hero);
    console.log(this.hero.name);
    this.hero = {
      name: '',
      power: 0,
      image: '',
    }
    console.log(this.heros);
  }


}


