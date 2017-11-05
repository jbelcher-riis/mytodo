package com.codecorner.mytodo.mytodo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codecorner.mytodo.mytodo.entities.TodoItem;
import com.codecorner.mytodo.mytodo.repositories.TodoItemRepository;

@Service
public class TodoItemServiceImpl implements TodoItemService {

    @Autowired
    TodoItemRepository todoItemRepository;

    @Override
    public TodoItem save(TodoItem todoItem) {
	return this.todoItemRepository.save(todoItem);
    }

}
