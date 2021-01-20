import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  @Input('isFavorit') isEmpty: boolean = false;
  @Output('eventOutput') change = new EventEmitter()

  constructor() { }

  onChangeStar(){
    this.isEmpty = !this.isEmpty;
    this.change.emit(this.isEmpty)
  }

  ngOnInit(): void {
  }

}
