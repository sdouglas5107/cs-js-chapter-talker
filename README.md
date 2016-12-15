## **Gerenciador de Assuntos para talks do capítulo de javascrip da concrete**

### **Requisitos**
#### 1. Usuário
* Deve ser com email da concrete;
* Deve haver o papel do administrador;
* Administrador será responsável por criar a votação;
* Cadastro deve ter nome, email e senha.

#### 2. Talk 
* Deve ter uma data pra acontecer
* Deve ser criada por um administrador

#### 2. Assunto
* Um usuário pode submeter um Assuntos para uma talk;
* Somente se a data de criação do Assunto for menor que 5 dias da data que o talk vai acontecer
* Automaticamente atribuir um voto ao Assunto submetido, esse voto será de quem submeteu, exceto se quem submeteu for administrador, nesse caso o Assunto ficará sem votos, até que alguém vote nele;
* Usuários podem votar em um único Assunto;
* Os Assuntos devem ser listados pela quantidade de votos, em segundo critério, data;
* 5 Dias antes da data do talk, a votação deve ser encerrada e o que tiver mais votação será a talk eleita;
* Caso haja empate no número de votos, o Assunto eleito será aquele que foi criado primeiro.
