package com.jobportal.controller;

import com.jobportal.model.User;
import com.jobportal.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        User existing = userService.getUserByEmail(user.getEmail());
        if(existing != null && existing.getPassword().equals(user.getPassword())){
            return "Login Success";
        } else {
            return "Invalid Credentials";
        }
    }
}
