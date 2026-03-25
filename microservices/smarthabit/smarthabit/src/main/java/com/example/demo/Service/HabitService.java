package com.example.demo.Service;

import com.example.demo.Entity.Habit;
import com.example.demo.Repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabitService {
    @Autowired 
    private HabitRepository habitRepo;

    public Habit toggleHabit(Long id) {
        // .orElseThrow() ensures you don't get a NullPointerException if the ID is wrong
        Habit habit = habitRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Habit not found with id: " + id));
            
        habit.setCompletedToday(!habit.isCompletedToday());
        
        // Logic: If completed, increase streak; if unchecked, decrease
        if (habit.isCompletedToday()) {
            habit.setCurrentStreak(habit.getCurrentStreak() + 1);
        } else {
            // Math.max(0, ...) prevents negative streaks
            habit.setCurrentStreak(Math.max(0, habit.getCurrentStreak() - 1));
        }
        
        return habitRepo.save(habit);
    }
}