package com.rodrigo.backend.usersapp.backendusersapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.rodrigo.backend.usersapp.backendusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User,Long> {

}
