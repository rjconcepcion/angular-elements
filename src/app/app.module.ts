import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[
    ElementsComponent
  ]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap() {
    const el = createCustomElement( ElementsComponent, { injector: this.injector } );
    customElements.define('custom-elem',el);
  }
}
