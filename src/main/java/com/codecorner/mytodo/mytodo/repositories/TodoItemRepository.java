package com.codecorner.mytodo.mytodo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codecorner.mytodo.mytodo.entities.TodoItem;

@Repository
public interface TodoItemRepository extends CrudRepository<TodoItem, Long> {

}
