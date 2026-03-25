package com.example.demo.Repository;

import com.example.demo.Entity.Habit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HabitRepository extends JpaRepository<Habit, Long> {
    
    // Custom query method to find habits belonging to a specific user
    List<Habit> findByUserId(Long userId);
}