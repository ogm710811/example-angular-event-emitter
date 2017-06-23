import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // creating a new instance of an Event Emitter and decorate the property with the @Output decorator.
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // So every time a user clicks on the 'Click me please' link, 
  // the nested component will dispatch an event to its parent component
  // The parent component receives that event and its payload. (payload = parameter of emit method)
  onClick(){
    // let's use the notify event property and call its emit method to 
    // raise the notify event and pass in our payload as an argument.
    this.notify.emit('Click from nested component');
  }

}
