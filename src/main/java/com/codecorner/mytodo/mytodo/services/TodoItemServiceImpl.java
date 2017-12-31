package com.codecorner.mytodo.mytodo.services;

import java.util.List;

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

    @Override
    public List<TodoItem> findAll() {
	return todoItemRepository.findAll();
    }

    @Override
    public void delete(long todoItemId) {
	todoItemRepository.delete(todoItemId);
    }

	@Override
	public TodoItem update(long todoItemId, TodoItem todoItem) {
		
		TodoItem todoItemToUpdate = todoItemRepository.findOne(todoItemId);
		
		todoItemToUpdate.setDescription(todoItem.getDescription());
		
		return this.save(todoItemToUpdate);
		
	}

}
