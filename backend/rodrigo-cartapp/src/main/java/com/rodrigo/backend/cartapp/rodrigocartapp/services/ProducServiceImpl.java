package com.rodrigo.backend.cartapp.rodrigocartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rodrigo.backend.cartapp.rodrigocartapp.models.entities.Product;
import com.rodrigo.backend.cartapp.rodrigocartapp.repositories.ProductRepository;

@Service
public class ProducServiceImpl implements ProducService {

    @Autowired
    private ProductRepository repository;


    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
       
        return (List<Product>) repository.findAll();
    
    }



}
