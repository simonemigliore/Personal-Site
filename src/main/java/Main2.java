import org.scribe.builder.ServiceBuilder;
import org.scribe.builder.api.LinkedInApi;
import org.scribe.model.*;
import org.scribe.oauth.OAuthService;


public class Main2 {
    private static String API_KEY = "77pdngiaagggdm";
    private static String API_SECRET = "QdbdHE8MLBxC6Uqr";

    public static void main(String[] args) {


        Token accessToken = null;

        //Using the Scribe library we enter the information needed to begin the chain of Oauth2 calls.
        OAuthService service = new ServiceBuilder()
                .provider(LinkedInApi.class)
                .callback("http://www.simonemigliore.eu")
                .apiKey(API_KEY)
                .apiSecret(API_SECRET)
                .build();

        Token requestToken = service.getRequestToken();

        String authUrl = service.getAuthorizationUrl(requestToken);




        Verifier v = new Verifier(authUrl);
        accessToken = service.getAccessToken(requestToken, v); // the requestToken you had from step 2

        OAuthRequest request = new OAuthRequest(Verb.GET, "http://api.twitter.com/1/account/verify_credentials.xml");
        service.signRequest(accessToken, request); // the access token from step 4
        Response response = request.send();
        System.out.println(response.getBody());
    }
}
