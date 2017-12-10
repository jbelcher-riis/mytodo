package com.codecorner.mytodo.mytodo.services;

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
import com.codecorner.mytodo.mytodo.repositories.TodoItemRepository;

@RunWith(MockitoJUnitRunner.class)
public class TodoItemServiceTest {

    @InjectMocks
    TodoItemServiceImpl subject;

    @Mock
    TodoItemRepository todoItemRepository;

    @Test
    public void testSaveShouldReturnTodoItem() {
	final TodoItem todoItem = new TodoItem();
	todoItem.setDescription("This is a task");

	final TodoItem todoItemResponse = new TodoItem();
	todoItemResponse.setId(100L);
	todoItemResponse.setDescription("This is a task");

	when(todoItemRepository.save(todoItem)).thenReturn(todoItemResponse);

	final TodoItem response = subject.save(todoItem);
	assertThat(response.getId(), equalTo(100L));
	assertThat(response.getDescription(), equalTo("This is a task"));

    }

    @Test
    public void testFindAllShouldReturnList() {
	final List<TodoItem> todoItems = new ArrayList<TodoItem>();

	final TodoItem todoItem = new TodoItem();
	todoItem.setDescription("I am a todo list item");
	todoItem.setId(100L);

	todoItems.add(todoItem);

	when(todoItemRepository.findAll()).thenReturn(todoItems);

	final List<TodoItem> result = subject.findAll();

	assertThat(result.size(), equalTo(1));
    }

    @Test
    public void deleteShouldCallDeleteRepository() {
	final long idToDelete = 42L;

	doNothing().when(todoItemRepository).delete(idToDelete);

	subject.delete(idToDelete);

	verify(todoItemRepository).delete(idToDelete);
    }

}
