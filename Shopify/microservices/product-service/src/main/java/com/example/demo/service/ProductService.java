package com.example.demo.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Product createProduct(Product product) {
        return repository.save(product);
    }

    // GET ALL
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    // GET BY ID
    public Product getProductById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // UPDATE
    public Product updateProduct(Long id, Product updatedProduct) {

        Product product = getProductById(id);

        product.setName(updatedProduct.getName());
        product.setDescription(updatedProduct.getDescription());
        product.setPrice(updatedProduct.getPrice());
        product.setQuantity(updatedProduct.getQuantity());

        return repository.save(product);
    }

    // DELETE
    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
