import * as ko from 'knockout';
require('knockout.validation');

interface Iregistro {
  id:number
  nombre:string
  skill:string
}
class ViewModel {
  registros = [
    { id: 1, nombre: "Name1", skill: "skill 1" },
    { id: 2, nombre: "Name2", skill: "Skill 2" },
    { id: 3, nombre: "Name3", skill: "Skill 3" },
  ];
  nombre:ko.Observable<string>;
  edad:ko.Observable<number>;
  gusto:ko.Observable<string>;
  isDisplayed:ko.Observable<boolean>;
  constructor(nombre:string, edad:number) {
    this.nombre = ko.observable(nombre);
    this.edad = ko.observable(edad);
    this.gusto = ko.observable(`<h1>Element</h1>`);
    this.isDisplayed = ko.observable(false);
  }
  show() {
    this.isDisplayed(true);
  }
  hide() {
    this.isDisplayed(false);
  }
}
ko.applyBindings(new ViewModel("MiNombre", 131));
