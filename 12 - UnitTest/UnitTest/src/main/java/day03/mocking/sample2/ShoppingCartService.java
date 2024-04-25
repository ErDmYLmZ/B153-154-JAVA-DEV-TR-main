package day03.mocking.sample2;

public class ShoppingCartService {
    private ProductManager productManager;

    public ShoppingCartService(ProductManager productManager) {
        this.productManager = productManager;
    }

    //test edilecek method
    public boolean addProductToCart(String productId) {
        int stockStatus = productManager.getStockStatus(productId);
        if (stockStatus > 0) {
            productManager.decreaseStock(productId); // stock -1
            return true;
        } else {
            return false;

        }
    }
}
