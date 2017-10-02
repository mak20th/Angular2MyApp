import {Component} from '@angular/core';

@Component({
    selector: 'myAppRoot', // go to index.html file to add this using<>
    templateUrl: './newMycomponent.html', // go to the file specified and add the variable declared below using{{}}
    styleUrls: ['./app.component.css'] // go to app.mmodule and import this class using class name below

})

export class MyAppComponent{ // this is the class name that will go in app.moodule
    firstName = 'Aamir';
    lastName = "Khan"
}
