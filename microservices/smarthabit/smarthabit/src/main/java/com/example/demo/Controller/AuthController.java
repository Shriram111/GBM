package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*") 
public class AuthController {

    @Autowired 
    private UserRepository userRepo;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userRepo.existsByEmail(user.getEmail())) {
            // Return a JSON object for the error message
            return ResponseEntity.badRequest()
                .body(Collections.singletonMap("message", "Email already in use"));
        }
        
        User savedUser = userRepo.save(user);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        response.put("user", savedUser);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userRepo.findByEmail(user.getEmail())
                .filter(u -> u.getPassword().equals(user.getPassword()))
                .map(u -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("message", "Login Successful");
                    response.put("success", true);
                    response.put("userId", u.getId());
                    response.put("email", u.getEmail());
                    return ResponseEntity.ok(response);
                })
                .orElseGet(() -> {
                    // Crucial: Return a JSON object with 401 status so frontend can parse it
                    Map<String, String> error = new HashMap<>();
                    error.put("message", "Invalid email or password");
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
                });
    }
}