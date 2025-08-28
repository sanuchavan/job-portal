package com.jobportal.repository;

import com.jobportal.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    // Get all applications by candidate
    List<Application> findByCandidateId(Long candidateId);

    // Get all applications for jobs posted by an employer
    List<Application> findByJobEmployerId(Long employerId);
}
