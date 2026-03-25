package com.example.demo.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.*;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtService;

@Service
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository repository,
                       PasswordEncoder encoder,
                       JwtService jwtService,
                       AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.encoder = encoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    // ======================
    // REGISTER
    // ======================
    public void register(RegisterRequest request) {

        Optional<User> existingUser =
                repository.findByEmail(request.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("User already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole("ROLE_USER");

        repository.save(user);
    }

    // ======================
    // LOGIN
    // ======================
    public AuthResponse login(LoginRequest request) {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    request.getEmail(),
                                    request.getPassword()
                            )
                    );

            if (authentication.isAuthenticated()) {

                User user = repository.findByEmail(request.getEmail())
                        .orElseThrow(() -> new RuntimeException("User not found"));

                String token = jwtService.generateToken(user.getEmail());

                return new AuthResponse(token, user.getId());
            } else {
                throw new RuntimeException("Invalid credentials");
            }

        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid email or password");
        }
    }
}