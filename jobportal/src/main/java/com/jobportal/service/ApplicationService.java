package com.jobportal.service;

import com.jobportal.model.Application;
import com.jobportal.repository.ApplicationRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ApplicationService {
    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository){
        this.applicationRepository = applicationRepository;
    }

    public Application applyJob(Application application){
        application.setStatus("APPLIED");
        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByCandidate(Long candidateId){
        return applicationRepository.findByCandidateId(candidateId);
    }

    public List<Application> getApplicationsByEmployer(Long employerId){
        return applicationRepository.findByJobEmployerId(employerId);
    }
}
