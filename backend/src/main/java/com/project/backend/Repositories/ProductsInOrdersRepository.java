package com.project.backend.Repositories;

import com.project.backend.Entities.ProductsInOrdersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsInOrdersRepository extends JpaRepository<ProductsInOrdersEntity, Long> {
}
