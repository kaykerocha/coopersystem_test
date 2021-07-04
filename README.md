# Projeto de seleção Coopersystem (React Native)
  
O teste consiste em criar uma mini aplicação que react native que simula um resgate personalizado de fundos de investimentos em ações.  
  
Serão avaliados:  
* Integração com api rest
* Navegação entre telas  
* Validação de formulários conforme regras de negócios  
* Padrões de codificação  
* Testes unitários ( jest js )  
	
 
**Obs:** Os layouts dos protótipos são só ilustrativos, podem usar os frameworks de ux/estilo de sua preferência.
  
### Protótipos  
* React Native  
	* [Lista de investimentos](https://github.com/leonardo-coopersystem/avaliacao-coopersystem/blob/master/prototipos-react-native/1%20-%20Lista%20de%20investimentos.png?raw=true)  
	* [Resgate personalizado](https://github.com/leonardo-coopersystem/avaliacao-coopersystem/blob/master/prototipos-react-native/2%20-%20Simula%C3%A7%C3%A3o%20do%20resgate.png?raw=true)  
	* [Modal de confirmação](https://github.com/leonardo-coopersystem/avaliacao-coopersystem/blob/master/prototipos-react-native/3%20-%20Confirma%C3%A7%C3%A3o.png?raw=true)
  
  
### Fluxo de navegação  
* Lista de investimentos  
	* Executar uma chamada get no endereço [http://www.mocky.io/v2/5e76797e2f0000f057986099](http://www.mocky.io/v2/5e76797e2f0000f057986099)
	* Montar a  tela conforme o protótipo fazendo a integração com serviço acima.
	* Ao clicar em um plano que não esta em carência (indicadorCarencia = 'N'), navegar para próxima tela. 
*  Resgate personalizado  
	 * Montar a  tela conforme o protótipo usando as informações do fundo de investimento selecionado na tela anterior.
	 * Digitar os valores que deseja resgatar de cada ação e clicar em confirmar resgate
* Modal de confirmação
	* Montar a  tela conforme o protótipo.

### Regras de Negocio  
* Tela 1: Lista de investimentos  
	* Fundos de investimentos em carência (indicadorCarencia = 'S') não pode realizar resgate, deve ficar desabilitado na lista de investimentos.  
  
* Resgate personalizado  
	* Realizar o calculo do saldo da ação usando o campo percentual, que e o percentual que essa ação representa no valor total do investimento.
	* Valor a resgatar de cada ação não pode ser maior que saldo acumulado da mesma, deve ser exibido um alerta para cliente quando isso acontecer.  
	* A cada interação, deve ser atualizado o campo valor total a resgatar.  
	* Valor total a resgatar não pode ser maior que valor total disponível do investimento, deve ser exibido um alerta para cliente quando isso acontecer.  
	* Ao clicar no botão de confirmar, alem de validar as regras acimas, deve validar se o valor total a resgatar não e igual a 0, caso o contrario, deve exibir um alerta ao cliente para preencher os valores a resgatar da forma que ele deseja.  
	* Após todas a validações deve abrir o modal de resgate efetuado.

### Cenário de teste

#### 01 - Clicar em confirmar sem preenncher nenhum campo
- Clicar no investimento I
- Clicar em confirmar sem preencher nenhum valor
- **Resultado esperado:** Deve aparecer um modal pedido para o cliente preencher pelo menos um dos campos a resgatar.


#### 02 - Clicar em confirmar com um dos campos a resgatar com valor invalido
- Clicar no investimento I
- Digitar um valor acima do disponivel na primeira ação

Ex: BBAS3 tem 11 mil de saldo, digitar 15 mil no valor a resgatar


- Digitar um valor abaixo do disponivel na segunda ação

Ex: VALE3 tem 8 mil disponivel, digitar 2 mil no valor a resgatar

- Clicar em confirmar

- **Resultado esperado:** Deve aparecer um modal alertando que foi digitado um valor invalido na ação BBAS3, que o maximo disponivel e XXXXX.


#### 03 - Clicar em confirmar com todos os campos com valor validos
- Clicar no investimento I
- Digitar um valor acima igual o disponivel na primeira ação

Ex: BBAS3 tem 11 mil de saldo, digitar 11 mil no valor a resgatar


- Digitar um valor abaixo do disponivel na segunda ação

Ex: VALE3 tem 8 mil disponivel, digitar 2 mil no valor a resgatar

- Clicar em confirmar

- **Resultado esperado:** Deve aparecer um modal com a mensagem que o resgate foi efetuado com sucesso, e quando clinar em novo resgate, voltar pra tela inicial.
