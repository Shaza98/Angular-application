import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{ServerName:string,ServerContent:string}>();
  @Output() blueprintCreated =new EventEmitter<{ServerName:string,ServerContent:string}>();
  // newServerName = ' ';
  // newServerContent = ' ';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.serverContentInput.nativeElement.value,
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.serverContentInput.nativeElement.value,
    })
  }
}
