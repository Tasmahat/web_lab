package com.project.backend.Controllers;

import com.project.backend.Entities.Images;
import com.project.backend.Services.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/images")
public class ImagesController {
    private final ImagesService imagesService;

    @Autowired
    public ImagesController(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    @GetMapping("/all")
    public Page<Images> getAllImages() {
        return imagesService.getAllImages();
    }

    @GetMapping("/{id}")
    public Images getImageById(@PathVariable Long id) {
        return imagesService.getImageById(id);
    }

    @PostMapping("/save")
    public ResponseEntity<Images> upload(@RequestParam MultipartFile file) {
        try {
            return new ResponseEntity<>(imagesService.uploadImage(file), HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
