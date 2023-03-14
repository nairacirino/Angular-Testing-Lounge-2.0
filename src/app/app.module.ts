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
import {MatIconModule} from '@angular/material/icon';

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
import { DirectivesFunComponent } from './components/playing-with-directives/directives-fun.component';
import { CardsComponent } from './components/basic-components/cards/cards.component';
import { Card1Component } from './components/basic-components/cards/card1/card1.component';
import { ComponentBindersComponent } from './components/component-binders/component-binders.component';
import { InputBindingFunComponent } from './components/component-binders/input-binding-fun/input-binding-fun.component';
import { FormsComponent } from './components/basic-components/forms/forms.component';
import { SelectComponent } from './components/basic-components/forms/select/select.component';
import { EventEmitterFunComponent } from './components/component-binders/event-emitter-fun/event-emitter-fun.component';
import { MiniProjectsComponent } from './components/mini-projects/mini-projects.component';
import { ProductsGalleryComponent } from './components/mini-projects/products-gallery/products-gallery.component';
import { ProductCardComponent } from './components/basic-components/cards/product-card/product-card.component';
import { ButtonsComponent } from './components/basic-components/buttons/buttons.component';
import { IconButtonComponent } from './components/basic-components/buttons/icon-button/icon-button.component';

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
    NgcontentFunComponent,
    DirectivesFunComponent,
    CardsComponent,
    Card1Component,
    ComponentBindersComponent,
    InputBindingFunComponent,
    FormsComponent,
    SelectComponent,
    EventEmitterFunComponent,
    MiniProjectsComponent,
    ProductsGalleryComponent,
    ProductCardComponent,
    ButtonsComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
