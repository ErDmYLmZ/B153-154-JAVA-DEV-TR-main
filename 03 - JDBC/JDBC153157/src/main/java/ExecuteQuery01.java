import java.sql.*;

public class ExecuteQuery01 {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {

        //1-ADIM:driverı kaydet
        Class.forName("org.postgresql.Driver");

        //2-ADIM:Database e bağlanma
        Connection connection= DriverManager.getConnection("jdbc:postgresql://localhost:5432/jdbc_db","dev_user","password");

        //3-ADIM:Statement oluşturulması:sorguların DB ye iletilmesi ve çalıştırılması için
        Statement st=connection.createStatement();

        System.out.println("Connection success");

        //4-ADIM:sorgu oluşturma/çalıştırma

        //ÖRNEK 1:id'si 5 ile 10 arasında olan ülkelerin "country_name" bilgisini listeleyiniz.

        String query1="SELECT country_name FROM countries WHERE id BETWEEN 5 AND 10";
        boolean sql1=st.execute(query1);
        System.out.println("sql1 = " + sql1);
        //sorgu sonucundaki kayıtları görebilmek için executeQuery() metodunu kullanmalıyız.

        ResultSet resultSet =st.executeQuery(query1);
        resultSet.next();
        System.out.println(resultSet.getString("country_name"));


        while (resultSet.next()){
            System.out.println(resultSet.getString("country_name"));
        }

        System.out.println("------------ÖRNEK2-------------");

        //ÖRNEK 2: phone_code'u 600 den büyük olan ülkelerin "phone_code" ve "country_name" bilgisini listeleyiniz.
        String query2="SELECT phone_code,country_name FROM countries WHERE phone_code>600";
        ResultSet rs=st.executeQuery(query2);


        while (rs.next()){
            System.out.println("phone_code: "+rs.getInt("phone_code")+"-----country name:"+rs.getString("country_name"));
 //           System.out.println("phone_code: "+rs.getInt(1)+"-----country name:"+rs.getString(2));
        }

        System.out.println("------------ÖRNEK3-------------");

        //ÖRNEK 3:developers tablosunda "salary" değeri en düşük salary olan developerların tüm bilgilerini gösteriniz.
        String query3="SELECT * FROM developers WHERE salary=(SELECT MIN(salary) FROM developers)";
        ResultSet rs2=st.executeQuery(query3);

        while (rs2.next()){
            System.out.println(rs2.getInt("id")+"---"+rs2.getString("name")
                    +"---"+rs2.getDouble("salary")+"---"+rs2.getString("prog_lang"));
        }

        System.out.println("------------ÖRNEK4-ÖDEEVV-------------");
        //ÖRNEK 4:Puanı bölümlerin taban puanlarının ortalamasından yüksek olan öğrencilerin isim ve puanlarını listeleyiniz.
        String query4="SELECT isim,puan FROM ogrenciler WHERE puan>(SELECT AVG(taban_puani) FROM bolumler)";
        ResultSet rs4=st.executeQuery(query4);

        while (rs4.next()){
            System.out.println(rs4.getString("isim")+"---"+rs4.getInt("puan"));
        }


        System.out.println("-------------ÖRNEK5---------------");
        //ÖRNEK5:bolumler tablosunda taban puanı en yüksek 2. bölümün ismini ve puanını yazdırınız.
        String query5="SELECT bolum, taban_puani FROM bolumler ORDER BY taban_puani DESC OFFSET 1 LIMIT 1";
        ResultSet rs5= st.executeQuery(query5);

        rs5.next();
        System.out.println(rs5.getString("bolum")+"---"+rs5.getInt("taban_puani"));
        String secondmaxgrade=rs5.getString("bolum");//sonuçlardaki dataları değişkene atayarak kullanabiliriz.

        st.close();
        connection.close();

    }
}
