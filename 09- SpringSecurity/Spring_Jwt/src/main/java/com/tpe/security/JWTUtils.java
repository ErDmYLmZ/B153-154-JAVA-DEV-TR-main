package com.tpe.security;

import com.tpe.security.service.UserDetailsImpl;
import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTUtils {

    //hash(abc)-->asdrewıjfgl-->abc ye dönüştürülemez--tek yönlü şifreleme
    //jwt token:header + payload(userla ilgili bilgiler) + signature(secret ile imza)

    private long jwtExpirationTime=86400000;//24*60*60*1000

    private String secretKey="techpro";


    //*****************1-JWT token generate*********************
    public String generateToken(Authentication authentication){
        UserDetailsImpl userDetails =(UserDetailsImpl) authentication.getPrincipal();//login olmuş user(authenticated)

        //login olan userın username ini token içine koyalım
        return Jwts.builder()//jwt oluşturucuyu sağlar
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())//system.currentTimeMillis()--21.06-21.19
                .setExpiration(new Date(new Date().getTime()+jwtExpirationTime))//22.06-21.19
                .signWith(SignatureAlgorithm.HS512,secretKey)//hashleme ile tek yönlü şifreleme, karşılaştırmada kullanılır
                .compact();//ayarları tamamlar,token oluşturur.

    }

    //2-JWT token validate
    public boolean validateToken(String token){

        try {
            Jwts.parser()//ayrıştırıcı
                    .setSigningKey(secretKey)//bu anahtar ile karşılaştır
                    .parseClaimsJws(token);//imzalar uyumlu ise, JWT geçerli

            return true;
        } catch (ExpiredJwtException e) {
            e.printStackTrace();
        } catch (UnsupportedJwtException e) {
            e.printStackTrace();
        } catch (MalformedJwtException e) {
            e.printStackTrace();
        } catch (SignatureException e) {
            e.printStackTrace();
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }

        return false;
    }

    //3-JWT tokendan username alma
    public String getUsernameFromJwtToken(String token){
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)//doğrulanmış tokenın claimslerini döndürür
                .getBody()
                .getSubject();//username
    }


}
