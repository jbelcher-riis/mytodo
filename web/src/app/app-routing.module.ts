import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoItemListComponent } from './components/todo-item-list/todo-item-list.component';

const routes: Routes = [
    { path: '**', component: TodoItemListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }