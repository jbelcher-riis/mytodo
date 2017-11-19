import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoItemListComponent } from './components/todo-item-list/todo-item-list.component';
import { TodoItemService } from 'app/services/todo-item.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
