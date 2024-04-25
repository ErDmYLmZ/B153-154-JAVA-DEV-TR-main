package day03.mocking.sample1;

public class UserManager {
    public String getUserName(int userId) {

        if (userId == 1) {
            return "Cemal Kirtan";
        }
         else if (userId == 2) {
                return "Kubra Sen";
            } else {
                return "Unknown";
            }
        }
}
