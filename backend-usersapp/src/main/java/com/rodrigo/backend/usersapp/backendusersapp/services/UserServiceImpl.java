package com.rodrigo.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rodrigo.backend.usersapp.backendusersapp.models.entities.User;
import com.rodrigo.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
       
        return (List<User>) userRepository.findAll();
    }

    @SuppressWarnings("null")
    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {

        return userRepository.findById(id);

    }

    @SuppressWarnings("null")
    @Override
    @Transactional
    public User save(User user) {

        return userRepository.save(user);
    }

    @SuppressWarnings("null")
    @Override
    @Transactional
    public void remove(Long id) {
       
        userRepository.deleteById(id);
    }

    @Override
    public Optional<User> update(User user, Long id) {

        Optional<User> o = findById(id);
        User userOptional = null;
        if(o.isPresent()){
            User userDb = o.orElseThrow();
            userDb.setusername(user.getusername());
            userDb.setEmail(user.getEmail());
            userOptional = this.save(userDb);
        }
    
        return Optional.ofNullable(userOptional);
    }

}
