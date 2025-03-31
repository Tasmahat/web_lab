package com.project.backend.Repositories;

import com.project.backend.Entities.ProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<ProductsEntity, Long> {
}
