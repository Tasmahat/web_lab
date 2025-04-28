package com.project.backend.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products_in_orders")
@Getter @Setter
@NoArgsConstructor
public class ProductsInOrdersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_ord_prod")
    private Long id;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ord")
    private OrdersEntity order = new OrdersEntity();

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_prod")
    private ProductsEntity product = new ProductsEntity();

    @Column(name = "quantity_ord_prod")
    private Integer quantity;

    public ProductsInOrdersEntity(OrdersEntity order, ProductsEntity product, Integer quantity) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
    }
}
