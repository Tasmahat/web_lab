package com.project.backend.Services;

import com.project.backend.Entities.*;
import com.project.backend.Repositories.OrdersRepository;
import com.project.backend.Repositories.ProductsInOrdersRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

@Service
public class OrdersService {

    private final OrdersRepository ordersRepository;
    private final ProductsInOrdersRepository productsInOrdersRepository;
    private final ProductsService productsService;

    public OrdersService(OrdersRepository ordersRepository,
                         ProductsInOrdersRepository productsInOrdersRepository, ProductsService productsService) {
        this.ordersRepository = ordersRepository;
        this.productsInOrdersRepository = productsInOrdersRepository;
        this.productsService = productsService;
    }

    public List<OrdersEntity> getAllOrders() {
        return ordersRepository.findAll();
    }

    public OrdersEntity saveOrder(String name, String surname, Integer age,
                                  LocalDate dateDelivery, LocalTime timeDelivery, Boolean isPrepaid, String address,
                                  String payment, Set<Long> listOfProducts, Set<Integer> listOfQuantity, Float totalCost) {
        OrdersEntity order =
                new OrdersEntity(name, surname, age,
                dateDelivery, timeDelivery, isPrepaid, address, convertToPayment(payment), totalCost);
        Set<ProductsInOrdersEntity> productsInOrdersEntitySet = new HashSet<>();
        Iterator<Long> products = listOfProducts.iterator();
        Iterator<Integer> quantity = listOfQuantity.iterator();
        while (products.hasNext() && quantity.hasNext()) {
            ProductsInOrdersEntity productsInOrdersEntity =
                    new ProductsInOrdersEntity(
                            order,
                            productsService.getProduct(products.next()),
                            quantity.next()
            );
            productsInOrdersRepository.save(productsInOrdersEntity);
            productsInOrdersEntitySet.add(productsInOrdersEntity);
        }
        order.setProductsInOrdersEntities(productsInOrdersEntitySet);
        return ordersRepository.save(order);
    }

    private Payment convertToPayment(String payment) {
        switch (payment.toLowerCase()) {
            case "карта мир":
                return Payment.MIR;
            case "карта visa":
                return Payment.VISA;
            case "наличные":
                return Payment.CASH;
            case "оформить кредит":
                return Payment.CREDIT;
            case "сбп":
                return Payment.SBP;
            case "криптовалюта":
                return Payment.CRYPTOCURRENCY;
            default:
                System.out.println("Неизвестный способ оплаты, оплата наличными при получении");
                return Payment.CASH;
        }
    }
}
