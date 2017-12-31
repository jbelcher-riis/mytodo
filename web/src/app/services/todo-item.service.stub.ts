import { Observable } from "rxjs/Rx";

export class TodoItemServiceStub {
    saveTodoItem() {
        return Observable.of();
    }

    updateTodoItem() {
        return Observable.of();
    }

    getTodoItems() {
        return Observable.of();
    }

    deleteTodoItem() {
        return Observable.of();
    }
}