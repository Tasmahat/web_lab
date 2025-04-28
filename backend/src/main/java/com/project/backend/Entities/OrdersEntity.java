package com.project.backend.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
@Getter @Setter
@NoArgsConstructor
public class OrdersEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    @Column(name = "id_ord")
    private Long id;

    @Column(name = "name_ord")
    private String name;

    @Column(name = "surname_ord")
    private String surname;

    @Column(name = "age_ord")
    private Integer age;

    @Column(name = "delivery_date_ord")
    private LocalDate dateDelivery;

    @Column(name = "delivery_time_ord")
    private LocalTime timeDelivery;

    @Column(name = "is_prepaid_ord")
    private Boolean isPrepaid;

    @Column(name = "addr_ord")
    private String address;

    @Column(name = "payment_ord")
    @Enumerated(EnumType.ORDINAL)
    private Payment payment;

    @OneToMany (fetch = FetchType.EAGER, mappedBy = "order", cascade = CascadeType.ALL)
    private Set<ProductsInOrdersEntity> productsInOrdersEntities = new HashSet<>();

    @Column(name = "total_ord")
    private Float totalCost;

    public OrdersEntity(String name, String surname, Integer age, LocalDate dateDelivery,
                        LocalTime timeDelivery, Boolean isPrepaid, String address, Payment payment, Float totalCost) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dateDelivery = dateDelivery;
        this.timeDelivery = timeDelivery;
        this.isPrepaid = isPrepaid;
        this.address = address;
        this.totalCost = totalCost;
        this.payment = payment;
    }
}
