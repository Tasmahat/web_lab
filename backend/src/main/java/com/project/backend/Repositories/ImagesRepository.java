package com.project.backend.Repositories;

import com.project.backend.Entities.Images;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImagesRepository extends JpaRepository<Images, Long> {
}
