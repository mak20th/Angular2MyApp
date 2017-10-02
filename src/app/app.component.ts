import { Component } from '@angular/core';//importing type o

@Component({ //decorator , provides extra data
  selector: 'app-root', //look in the index.html file
  templateUrl: './app.component.html', //look inside app.component.html you will see{{title}}
  styleUrls: ['./app.component.css']
})
export class AppComponent { // this class name is used if we want to refer this file into any file.
  title = 'app works!'; // we can refer the class variable in the templateURL
}
