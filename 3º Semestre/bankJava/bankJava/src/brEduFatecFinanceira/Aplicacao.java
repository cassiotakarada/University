package brEduFatecFinanceira;

public class Aplicacao {

    public void deposito(Conta conta, Double valor) {
        conta.setSaldo(conta.getSaldo() + valor);
    }

    public Double saque(Conta conta, Double valor) {
        if (valor > conta.getSaldo()) {
            throw new IllegalArgumentException("Saldo insuficiente");
        }
        conta.setSaldo(conta.getSaldo() - valor);
        return valor;
    }
}