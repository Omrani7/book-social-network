package javalogin.javalogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class JavaloginApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaloginApplication.class, args);
	}

}
