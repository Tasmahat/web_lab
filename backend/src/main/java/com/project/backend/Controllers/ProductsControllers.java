package com.project.backend.Controllers;

import com.project.backend.Entities.ProductsEntity;
import com.project.backend.Services.ProductsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductsControllers {

    private final ProductsService productsService;

    public ProductsControllers(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/all")
    public List<ProductsEntity> getAllProducts() {
        return productsService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ProductsEntity getProduct(@PathVariable Long id) {
        return productsService.getProduct(id);
    }

    @PostMapping("/save")
    public ProductsEntity saveProduct(
            @RequestParam String name,
            @RequestParam Float price,
            @RequestParam Long imageId
    ) {
        return productsService.saveProduct(name, price, imageId);
    }

    @PostMapping("/update")
    public ProductsEntity updateProduct(
            @RequestParam Long id,
            @RequestParam Optional<String> name,
            @RequestParam Optional<Float> price,
            @RequestParam Optional<Long> imageId
    ) {
        return productsService.updateProduct(id, name, price, imageId);
    }

    @DeleteMapping("/delete")
    public void deleteProduct(@RequestParam Long id) {
        productsService.deleteProduct(id);
    }
}
