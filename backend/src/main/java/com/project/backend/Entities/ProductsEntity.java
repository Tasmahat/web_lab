package com.project.backend.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "products")
@Getter @Setter
@NoArgsConstructor
public class ProductsEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    @Column (name = "id_prod")
    private Long id;

    @Column (name = "name_prod")
    private String name;

    @Column (name = "price_prod")
    private Float price;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_img")
    private Images image = new Images();

    @JsonIgnore
    @Nullable
    @OneToMany (fetch = FetchType.EAGER, mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductsInOrdersEntity> productsInOrdersEntities = new HashSet<>();

    public ProductsEntity(String name, Float price, Images image,
                          Optional<Set<ProductsInOrdersEntity>> productsInOrdersEntities) {
        this.name = name;
        this.price = price;
        this.image = image;
        productsInOrdersEntities.ifPresent(this::setProductsInOrdersEntities);
    }
}
