package com.project.backend.Controllers;

import com.project.backend.Entities.ProductsEntity;
import com.project.backend.Services.ProductsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsControllers {

    private final ProductsService productsService;

    public ProductsControllers(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/all")
    public List<ProductsEntity> getAllProducts() {
        return productsService.getAllProducts();
    }

    @PostMapping("/save")
    public ProductsEntity saveProduct(
            @RequestParam String name,
            @RequestParam Float price,
            @RequestParam Long imageId
    ) {
        return productsService.saveProduct(name, price, imageId);
    }
}
