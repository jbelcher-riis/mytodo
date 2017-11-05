package com.codecorner.mytodo.mytodo.services;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

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

}
