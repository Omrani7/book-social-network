package javalogin.javalogin.security;

import jakarta.transaction.Transactional;
import javalogin.javalogin.user.User;
import javalogin.javalogin.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository repository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = repository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));


        System.out.println("Loaded User: " + user.getEmail());
        System.out.println("Password from DB: " + user.getPassword());

        return user;
    }

}
