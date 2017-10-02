import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'; // importing class from app.component
import { MyAppComponent } from './newMycomponent'; //  import the class that we created in newMycomponent.ts
import { MyAppComponent2 } from './newMycomponent2'; //  import the class that we created in newMycomponent2.ts

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent, // this is the class name from newmyComponent.ts
    MyAppComponent2 // this is the class name from newmyComponent2.ts
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,MyAppComponent,MyAppComponent2] // we added our class here again
})
export class AppModule { }
