package com.project.backend.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.backend.Services.FileManager;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table (name="images")
@Getter
@Setter
public class Images {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    @Column (name = "id_img")
    private Long id;

    @Column (name = "name_img")
    private String name;

    @Column (name="size_img")
    private long size;

    @Column (name="key_img")
    private String key;

    @Column (name="date_upload_img")
    private LocalDate dateUpload;

    @JsonIgnore
    @OneToMany (fetch = FetchType.EAGER, mappedBy = "image", cascade = CascadeType.ALL)
    private Set<ProductsEntity> productsEntities = new HashSet<>();

    @PreRemove
    private void deleteImageFile() throws IOException {
        FileManager fileManager = new FileManager();
        fileManager.delete(this.key);
    }
}
