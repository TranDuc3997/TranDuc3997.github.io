package patternAdapter;

public class VietnameseClient {
	public static void main(String[] args) {
        VietnameseTarget client =  new TranslatorAdapter(new FranceAdaptee());
        client.send("Xin chào");
    }
}
