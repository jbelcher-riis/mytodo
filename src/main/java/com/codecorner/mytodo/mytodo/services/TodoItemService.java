package com.codecorner.mytodo.mytodo.services;

import java.util.List;

import com.codecorner.mytodo.mytodo.entities.TodoItem;

public interface TodoItemService {

    public TodoItem save(TodoItem todoItem);

    public List<TodoItem> findAll();

    public void delete(long todoItemId);
    
    public TodoItem update(long todoItemId, TodoItem todoItem);
}
