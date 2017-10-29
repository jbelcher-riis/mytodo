package com.codecorner.mytodo.mytodo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TodoItem {

    @Id
    @GeneratedValue
    private long id;

    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

}
