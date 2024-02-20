package com.rodrigo.backend.cartapp.rodrigocartapp.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rodrigo.backend.cartapp.rodrigocartapp.models.entities.Product;
import com.rodrigo.backend.cartapp.rodrigocartapp.services.ProducService;

@RestController
// @RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600) // Permite que o front-end acesse o back-end
public class ProductController {

    @Autowired
    private ProducService service;

    @GetMapping("/products")
    public List<Product> list() {
        return  service.findAll();
    }
    
}
