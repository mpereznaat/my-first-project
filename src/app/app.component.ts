import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterHp } from './models/character-hp.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  name : string = 'Mauricio';

  constructor(){
    this.otherFunctions();
  }

  basicTypes(){
    const VIDEO_GAME : string = 'Super Smash Bros. Ultimate';
    console.log(VIDEO_GAME);

    let characterName : string = 'Waluigi';
    console.log(characterName);

    let hp : number = 0;
    console.log(hp);

    let status : boolean;
    status = (hp <= 0) ? false : true;
    console.log(hp);

    // alt+96
    const TITLE : string = `Game: ${VIDEO_GAME}
    character: ${characterName}
    hp: ${hp}
    status: ${status}`;

    console.log(TITLE);
  }

  arraysAndObjects(){
    let SKILLS : string[] = ['punch', 'kick', 'damage', 'special mov'];
    console.log(SKILLS);

    const character : Character = {
      name : 'Waluigi',
      healthPoints : 100,
      live : true,
      skills : SKILLS
    }

    character.name = 'Mario';
    character.color = 'blue';

    console.log(character);
  }

  ifStatement(){
    let x : number = 20, y : number = 20;

    if(x > y){
      console.log('x es mayor a y');
    }
    else if (x < y) {
      console.log('x es menor a y');
    }
    else if (x == y) {
      console.log('x es igual a y');
    }
    else {
      console.log('ninguna se cumple');
    }
  }

  switchStatement(){
    let a : number = 20, b : number = 8;

    switch (a-b) {
      case 0:
        console.log('Result: 0');
        break;
      case 5:
        console.log('Result: 5');
        break;
      case 10:
        console.log('Result: 10');
        break;    
      default:
        this.printNumber(a-b);
        console.log('Result: NaN');
        break;
    }
  }

  printNumber(value : number){
    console.log(value);
  }

  whileStatement(){
    let counter : number = 6;
    while (counter <= 5) {
      console.log('Ejecución número: ' + counter);
      counter++;
    }

    let i : number = 6;
    do {
      console.log('do Ejecución número: ' + i);
      i++;
    } while(i <= 5)
  }
  
  forStatement(){
    let array : number[] = [10,20,30,40,50,60,70,80,90];

    for(const INDEX in array){
      console.log(INDEX);
      console.log(array[INDEX]);
    }

    console.log('----------------------------');

    for(let i: number = 2; i < array.length; i += 3){
      console.log(i);
      console.log(array[i]);
    }

    console.log('----------------------------');

    array.forEach(function (value, index){
      if(value == 50){
        console.log(value);
        console.log(index);      
      }
    });

    array.forEach(value => 
      console.log(this.name)
    );

  }

  tryCatchStatement() {
    try{
      throw "Se presento un error";
    }
    catch(e){
      console.log(e);
    }
  }

  basicFunctions(){
    function sumNumbers(a: number, b: number) : number {
      return a+b;
    }
    console.log(sumNumbers(2,5));

    const ARROW_NUM = (a: number, b: number) : number => { return a+b }
    console.log(ARROW_NUM(1,8));

    function multiplyNumbers(a: number, b: number, c?: number) : number {
      return a * b * (c ?? 1);
    }
    console.log(multiplyNumbers(2, 2));
    console.log(multiplyNumbers(2, 2, 3));

    const RESULT : number = multiplyNumbers(2, 2);
    console.log(RESULT);

    function printNumber(a: number) : void {
      console.log(a);
    }
    printNumber(8);
  }

  forStatementInterface(){
    let characters : Character[] = [
      {
        name : 'Mario',
        live : true,
        healthPoints : 100,
        skills : []
      },
      {
        name : 'Luigi',
        live : true,
        healthPoints : 100,
        skills : [],
        color : 'green'
      },
      {
        name : 'Bowser',
        live : true,
        healthPoints : 100,
        skills : []
      }
    ];

    characters.forEach(function (value){
      console.log(value);
    });

  }

  healCharacter(character : CharacterHp){
    character.healthPoints = 100;
  }

  otherFunctions() {
    let character : CharacterHp = {
      name : 'Mario',
      live : true,
      healthPoints : 50,
      skills : ['punch', 'kick', 'damage', 'special mov'],
      color: 'Rojo',
      showHp(){
        console.log('Puntos de vida: ' + this.healthPoints);
      }
    };

    character.showHp();
    this.healCharacter(character);
    character.showHp();
  }
}
