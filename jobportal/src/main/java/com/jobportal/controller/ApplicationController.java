package com.jobportal.controller;

import com.jobportal.model.Application;
import com.jobportal.service.ApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService){
        this.applicationService = applicationService;
    }

    @PostMapping
    public Application applyJob(@RequestBody Application application){
        return applicationService.applyJob(application);
    }

    @GetMapping("/candidate/{id}")
    public List<Application> getByCandidate(@PathVariable Long id){
        return applicationService.getApplicationsByCandidate(id);
    }

    @GetMapping("/employer/{id}")
    public List<Application> getByEmployer(@PathVariable Long id){
        return applicationService.getApplicationsByEmployer(id);
    }
}
