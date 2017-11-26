package com.codecorner.mytodo.mytodo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codecorner.mytodo.mytodo.entities.TodoItem;

@Repository
public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {

}
