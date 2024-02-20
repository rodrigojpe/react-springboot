package com.rodrigo.backend.cartapp.rodrigocartapp.services;

import java.util.List;

import com.rodrigo.backend.cartapp.rodrigocartapp.models.entities.Product;

public interface ProducService {

    List<Product> findAll();
    
}
