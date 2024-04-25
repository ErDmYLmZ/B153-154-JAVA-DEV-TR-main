package com.tpe;

import com.tpe.thirdparty.InstructorService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration //Bu classta yapılandırma ayarları var
@ComponentScan("com.tpe") //com.tpe altındaki bileşenleri tarar ve tanımlar
@PropertySource("classpath:application.properties")
public class AppConfiguration {

    @Bean
    public InstructorService instructorService(){
        return new InstructorService();
    }
}
