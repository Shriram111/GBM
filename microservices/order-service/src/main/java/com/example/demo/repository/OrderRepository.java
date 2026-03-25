package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Orders;
import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    // This allows us to fetch history for a specific person
    List<Orders> findByUserId(Long userId);
}