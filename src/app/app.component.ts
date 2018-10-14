import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  serverElements = [{type:'server',name:'Testserver',content:'Just a test!'}];

  onServerAdded(serverData: {ServerName:string,ServerContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.ServerName,
      content: serverData.ServerContent
    });
  }

  onBlueprintAdded(blueprintData: {ServerName:string,ServerContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.ServerName,
      content: blueprintData.ServerContent
    });
  }

  OnChangeFirst(){
    this.serverElements[0].name='Changed'
  }

  OnDestroyFirst(){
    this.serverElements.splice(0,1)
  }
}
