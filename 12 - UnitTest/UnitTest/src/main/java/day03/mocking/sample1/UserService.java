package day03.mocking.sample1;

public class UserService {
    private UserManager userManager;

    public UserService(UserManager userManager) {
        this.userManager = userManager;
    }
        //test edilecek method
        public String getUserName(int userId){
            return userManager.getUserName(userId)+" username";
        }
    }

