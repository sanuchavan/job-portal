package com.jobportal.service;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public List<Job> searchJobs(String keyword, String location) {
        return jobRepository.findByTitleContainingOrLocationContaining(keyword, location);
    }
}
