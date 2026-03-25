package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Orders;
import com.example.demo.services.OrderService;
import com.example.demo.dto.OrderRequest;
import com.example.demo.repository.OrderRepository; // Add this import
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    private final OrderRepository orderRepository; // Inject Repository to fetch data

    // Updated Constructor
    public OrderController(OrderService orderService, OrderRepository orderRepository) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
    }

    // 1. Create Order (Existing)
    @PostMapping
    public Orders createOrder(@RequestBody OrderRequest request) {
        return orderService.createOrder(
                request.getUserId(),
                request.getProductId(),
                request.getQuantity()
        );
    }

    // 2. Get All Orders (For Postman Testing)
    @GetMapping("/all")
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    // 3. Get Orders by User ID (For React Orders.js)
    @GetMapping("/user/{userId}")
    public List<Orders> getOrdersByUserId(@PathVariable Long userId) {
        // This assumes you added 'findByUserId' to your OrderRepository
        return orderRepository.findByUserId(userId); 
    }
}