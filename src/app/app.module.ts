import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

//Components
import { AppComponent } from './app.component';
import { NgforFunComponent } from './components/playing-with-directives/ngfor-fun/ngfor-fun.component';
import { NgifFunComponent } from './components/playing-with-directives/ngif-fun/ngif-fun.component';
import { NgstyleFunComponent } from './components/playing-with-directives/ngstyle-fun/ngstyle-fun.component';
import { NgclassFunComponent } from './components/playing-with-directives/ngclass-fun/ngclass-fun.component';
import { NgswitchFunComponent } from './components/playing-with-directives/ngswitch-fun/ngswitch-fun.component';
import { NgtemplateFunComponent } from './components/playing-with-directives/ngtemplate-fun/ngtemplate-fun.component';
import { NgcontainerFunComponent } from './components/playing-with-directives/ngcontainer-fun/ngcontainer-fun.component';
import { NgcontentFunComponent } from './components/playing-with-directives/ngcontent-fun/ngcontent-fun.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforFunComponent,
    NgifFunComponent,
    NgstyleFunComponent,
    NgclassFunComponent,
    NgswitchFunComponent,
    NgtemplateFunComponent,
    NgcontainerFunComponent,
    NgcontentFunComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
