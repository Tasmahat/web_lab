package com.project.backend.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    public ProductsEntity(String name, Float price, Images image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
