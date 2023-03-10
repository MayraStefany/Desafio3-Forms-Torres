import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
    declarations: [
        AppComponent,
        FormularioReactivoComponent,
        ToolbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
