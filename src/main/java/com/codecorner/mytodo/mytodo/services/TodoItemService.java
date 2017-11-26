package com.codecorner.mytodo.mytodo.services;

import java.util.List;

import com.codecorner.mytodo.mytodo.entities.TodoItem;

public interface TodoItemService {

    public TodoItem save(TodoItem todoTime);

    public List<TodoItem> findAll();
}
