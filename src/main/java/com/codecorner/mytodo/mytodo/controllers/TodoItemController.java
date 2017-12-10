package com.codecorner.mytodo.mytodo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.codecorner.mytodo.mytodo.entities.TodoItem;
import com.codecorner.mytodo.mytodo.services.TodoItemService;

@RestController
@RequestMapping(value = "/api/v1/todo-item")
public class TodoItemController {

    @Autowired
    TodoItemService todoItemService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public @ResponseBody TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
	return todoItemService.save(todoItem);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public @ResponseBody List<TodoItem> findAll() {
	return todoItemService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public @ResponseBody void delete(@PathVariable("id") Long todoItemId) {
	todoItemService.delete(todoItemId);
    }
}
