import java.sql.*;

/*
Transaction:DB deki parçalanamaz(atomik) en küçük işlem
Birden fazla işlem için tek bir transaction oluşturabiliriz.
Bu işlemlerin tamamı başarılı bir şekilde gerçekleşirse Transaction commit edilir.
Bu işlemlerin en az birinde problem olursa rollback transaction içindeki işlemler iptal edilebilir.
 */

public class Transaction01 {
    public static void main(String[] args) throws Exception {
        Connection connection= DriverManager.getConnection("jdbc:postgresql://localhost:5432/jdbc_db","dev_user","password");
        connection.setAutoCommit(false);

        try {
            //hesap no:1234 ten hesap no:5678 e 1000$ para transferi olsun.
            String query = "UPDATE hesaplar SET bakiye=bakiye+? WHERE hesap_no=?";
            PreparedStatement preparedSt = connection.prepareStatement(query);

            preparedSt.setDouble(1, -1000);
            preparedSt.setInt(2, 1234);
            preparedSt.executeUpdate();

            //sistemsel hata oluştu
            if (true) {
                throw new Exception();//uygulama burada durur
            }

            preparedSt.setDouble(1, 1000);
            preparedSt.setInt(2, 5678);
            preparedSt.executeUpdate();

            //işlemler başarılı ise
            connection.commit();
            preparedSt.close();
            connection.close();
        }catch (Exception e){
            connection.rollback();
            System.out.println(e.getMessage());

        }

        //commit ten sonra rollback kullanılamaz.


    }
}
