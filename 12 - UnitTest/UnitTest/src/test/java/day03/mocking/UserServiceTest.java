package day03.mocking;

import day03.mocking.sample1.UserManager;
import day03.mocking.sample1.UserService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserServiceTest {

    @Test
    public void testGetUserName() {

        //Mock(fake) UserManager olusturduk.
        UserManager userManager = mock(UserManager.class);

        //Usermanager objemize ait methodun donecek degerini setliyoruz.
        when(userManager.getUserName(1)).thenReturn("Cemal Kirtan");

        UserService userService = new UserService(userManager);
        String userName = userService.getUserName(1);
        assertEquals("Cemal Kirtan username",userName);

    }
}
