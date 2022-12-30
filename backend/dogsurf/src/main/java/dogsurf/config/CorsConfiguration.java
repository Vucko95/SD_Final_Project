//package dogsurf.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfiguration {
//
//    private static final String GET = HttpMethod.GET.name();
//    private static final String POST = HttpMethod.POST.name();
//    private static final String DELETE = HttpMethod.DELETE.name();
//    private static final String PUT = HttpMethod.PUT.name();
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                WebMvcConfigurer.super.addCorsMappings(registry);
//
//                registry.addMapping("/**")
//                        .allowedMethods(GET, PUT, POST, DELETE)
//                        .allowedHeaders("*")
//                        .allowedOriginPatterns("*")
//                        .allowCredentials(true);
//            }
//        };
//    }
//}