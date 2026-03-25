package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "habits")
@Data
public class Habit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private int currentStreak = 0;
    private boolean completedToday = false;

    @Column(name = "user_id")
    private Long userId; // Links to the User ID from your AuthController
}