package day03.mocking;

import day03.mocking.sample2.ProductManager;
import day03.mocking.sample2.ShoppingCartService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ShoppingCartServiceTest {

    @Test
    public void testAddProductToCart() {
        ProductManager productManager = mock(ProductManager.class);

        when(productManager.getStockStatus("ABC123")).thenReturn(3);

        ShoppingCartService shoppingCartService = new ShoppingCartService(productManager);
        boolean result = shoppingCartService.addProductToCart("ABC123");
        assertTrue(result);
        verify(productManager).getStockStatus("ABC123");
        verify(productManager).decreaseStock("ABC123");
    }

    @Test
    public void testAddProductToCart2(){
        ProductManager productManager = mock(ProductManager.class);

        when(productManager.getStockStatus("ABC123")).thenReturn(0);

        ShoppingCartService shoppingCartService = new ShoppingCartService(productManager);
        boolean result = shoppingCartService.addProductToCart("ABC123");
        assertFalse(result);
        verify(productManager).getStockStatus("ABC123");

    }
}
