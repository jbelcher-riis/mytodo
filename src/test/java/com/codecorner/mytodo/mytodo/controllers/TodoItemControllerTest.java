package com.codecorner.mytodo.mytodo.controllers;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.codecorner.mytodo.mytodo.entities.TodoItem;
import com.codecorner.mytodo.mytodo.services.TodoItemService;

@RunWith(MockitoJUnitRunner.class)
public class TodoItemControllerTest {

    @InjectMocks
    TodoItemController subject;

    @Mock
    TodoItemService todoItemService;

    @Test
    public void testCreatedTodoItemReturnsSavedTodoItem() {
	final TodoItem todoItemRequest = new TodoItem();
	final TodoItem todoItemResponse = new TodoItem();
	todoItemResponse.setId(100L);

	when(todoItemService.save(todoItemRequest)).thenReturn(todoItemResponse);

	assertThat(subject.createTodoItem(todoItemRequest).getId(), equalTo(100L));

    }

    @Test
    public void testFindAllShouldReturnPopulatedList() {
	final List<TodoItem> todoItems = new ArrayList<TodoItem>();

	final TodoItem todoItem = new TodoItem();
	todoItem.setDescription("I am a todo list item");
	todoItem.setId(100L);

	todoItems.add(todoItem);

	when(todoItemService.findAll()).thenReturn(todoItems);

	final List<TodoItem> result = subject.findAll();

	assertThat(result.size(), equalTo(1));
    }

    @Test
    public void testDeleteShouldCallDeleteFunction() {
	final long idToDelete = 42L;

	doNothing().when(todoItemService).delete(idToDelete);

	subject.delete(idToDelete);

	verify(todoItemService).delete(idToDelete);
    }

}
