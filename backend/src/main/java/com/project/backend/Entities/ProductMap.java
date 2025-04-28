package com.project.backend.Entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ProductMap {

    private Long id;
    private Integer quantity;

    @JsonCreator
    public ProductMap(
            @JsonProperty("id") Long id,
            @JsonProperty("quantity") Integer quantity
    ) {
        this.id = id;
        this.quantity = quantity;
    }
}
