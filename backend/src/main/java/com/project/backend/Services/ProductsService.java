package com.project.backend.Services;

import com.project.backend.Entities.Images;
import com.project.backend.Entities.ProductsEntity;
import com.project.backend.Repositories.ProductsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {

    private final ProductsRepository productsRepository;
    private final ImagesService imagesService;

    public ProductsService(ProductsRepository productsRepository, ImagesService imagesService) {
        this.productsRepository = productsRepository;
        this.imagesService = imagesService;
    }

    public List<ProductsEntity> getAllProducts() {
        return productsRepository.findAll();
    }

    public ProductsEntity getProduct(Long id) {
        return productsRepository.findById(id).orElse(null);
    }

    public ProductsEntity saveProduct(String name, Float price, Long imageId) {
        Images image = imagesService.getImageById(imageId);
        ProductsEntity product = new ProductsEntity(name, price, image, Optional.empty());
        return productsRepository.save(product);
    }

}
