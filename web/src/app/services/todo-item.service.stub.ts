import { Observable } from "rxjs/Rx";

export class TodoItemServiceStub {
    saveTodoItem() {
        return Observable.of();
    }
}