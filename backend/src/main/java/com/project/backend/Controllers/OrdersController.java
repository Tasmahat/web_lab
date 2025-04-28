package com.project.backend.Controllers;

import com.project.backend.Entities.OrdersEntity;
import com.project.backend.Services.OrdersService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    private final OrdersService ordersService;

    public OrdersController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @GetMapping("/all")
    public List<OrdersEntity> getAllOrders() {
        return ordersService.getAllOrders();
    }

    @PostMapping("/save")
    public OrdersEntity saveOrder(
            @RequestParam String name,
            @RequestParam String surname,
            @RequestParam Integer age,
            @RequestParam LocalDate dateDelivery,
            @RequestParam LocalTime timeDelivery,
            @RequestParam Boolean isPrepaid,
            @RequestParam String address,
            @RequestParam String paymentType,
            @RequestParam Set<Long> listOfProduct,
            @RequestParam Set<Integer> listOfQuantity,
            @RequestParam Float totalCost
    ) {
        return ordersService.saveOrder(name, surname, age, dateDelivery,
                timeDelivery, isPrepaid, address, paymentType, listOfProduct, listOfQuantity, totalCost);
    }
}
