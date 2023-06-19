public class App {
    public static void main(String[] args) throws Exception {
       
        Conta c1 = new Conta(100);
        System.out.println("conta: " + c1.getNumero());
        System.out.println("Saldo: " + c1.getSaldo());

        Aplicacao aplicacao = new FatecBank();
        aplicacao.deposito(c1, 999.99);

        System.out.println("conta: " + c1.getNumero());
        System.out.println("Saldo: " + c1.getSaldo());
    }
}
