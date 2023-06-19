package brEduFatecFinanceira;

public class FatecBank extends BancoPadrao {
    
    @Override
    public void deposito(Conta conta, Double valor) {

        conta.setSaldo(conta.getSaldo() + valor);

    }

    @Override
    public Double saque(Conta conta, Double valor) {

        if(conta.getSaldo() >= valor) {
            conta.setSaldo(conta.getSaldo() - valor);
            return valor;
        }

        return 0D;
    }
}
