package com.example.demo.services;

import org.springframework.stereotype.Service;
import com.example.demo.entity.Orders;
import com.example.demo.repository.OrderRepository;
import com.example.demo.feign.UserClient;
import com.example.demo.feign.ProductClient;

@Service
public class OrderService {
	
    private final OrderRepository repository;
    private final UserClient userClient;
    private final ProductClient productClient;

    public OrderService(OrderRepository repository,
                        UserClient userClient,
                        ProductClient productClient) {
        this.repository = repository;
        this.userClient = userClient;
        this.productClient = productClient;
    }

    public Orders createOrder(Long userId,
                              Long productId,
                              int quantity) {

        var user = userClient.getUserById(userId);
        var product = productClient.getProductById(productId);

        Orders order = new Orders();

        order.setUserId(user.getId());
        order.setUserName(user.getName());
        order.setUserEmail(user.getEmail());

        order.setProductId(product.getId());
        order.setProductName(product.getName());
        order.setPrice(product.getPrice());

        order.setQuantity(quantity);
        order.setTotalAmount(product.getPrice() * quantity);

        return repository.save(order);
    }
}