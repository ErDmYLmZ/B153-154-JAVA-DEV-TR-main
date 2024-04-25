package com.tpe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    @NotNull(message = "Product can not be null")
    private String productName;

    @NotNull(message = "Brand can not be null")
    private String brand;

    @NotNull(message = "Price can not be null")
    private double price;

    private Long customerId;

}
