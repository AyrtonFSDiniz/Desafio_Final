const prompt = require('prompt-sync')();

/*
Blue Ed Tech of Dead - Apocalipse
*/

console.log("##########################################################################");
console.log ("Bem-vindo a historia Blue Ed Tech of Dead!");
console.log("##########################################################################");

console.log(`Olá, muito prazer, meu nome é Ayrton e te convido a interagir com essa história de survivor horror num evento apocalíptico.
Durante a história você poderá decidir qual ação o personagem irá executar. Bacana, não? Mas cuidado, uma decisão mal pensada pode te levar a 
morte de nosso personagem.
Digite a opção que deseja conforme instrução e dê Enter para interagir.`);
console.log();
console.log("--------------------------------------------------------------------------");

var escolha1 = 0;
var escolha2 = 0;
var escolha3 = 0;
var escolha4 = 0;
var escolha5 = 0;
var lista = [];
var lista_itens = "";

class Principal {

    constructor() {

        this.nome = "";  
    }
    //metodos?
};

let personagem = new Principal();

personagem.nome = String(prompt("Digite o nome que quer dar ao personagem: "));
console.log();


//console.log(personagem);

/*setTimeout(*/
console.log(`- Despertador dispara, são 06:00h da manhã.

- Voce desliga o despertador e liga seu assistente pessoal JARVIS em seu smartwatch.`);

function inicio () {
   console.log(`"Bom dia ${personagem.nome}! O que deseja que eu faça?"`);

    console.log ("1 - Diga-me a agenda do dia \n2 - Diga-me as principais noticias");
    
    var escolha1 = +prompt ("Sua escolha é: "); 
      
    if (escolha1 === 1) {
        console.log(`"Hoje haverá uma reunião com o Sr. Santos, para
         fechar a parceria com a empresa Blue, para os fornecer hardware e software."`);
    
    } else if (escolha1 === 2) {
    console.log(`"Hoje cedo aconteceu um acidente no laboratório da empresa T_DNA, o destruindo parcialmente. Teme-se que um dos vírus que estavam sendo testados tenha infectado a área. As autoridades estão evacuando a cidade. São 3 pontos de evacuação, um no shopping, um no Wallmart e outro no hospital central. Todos devem ir para um desses dois locais para verificar se não estão infectados e para que possam ser levados para a base de recepção até que as autoridades tenham limpado a cidade do vírus."`);
    
    } else {
        console.log("Opa, escolha errada. Selecione uma das duas opções disponíveis");
        console.log();
        inicio();
       //colocar algo pra fazer voltar para a escolha
    }
        
}

inicio();

if (escolha1 == 1) {
  console.log(`"Meu Deus, preciso me preparar e ir para o ponto de evacuação. JARVIS, qual o ponto de evacuação mais próximo?", pergunta ${personagem.nome}.
  "O ponto mais próximo é o ponto do Wallmart senhor" responde JARVIS.
  "Quanto tempo até lá de carro?"
  "15 minutos senhor" diz JARVIS.
  "Hm, mas de carro pode ser que o trânsito esteje um caos por causa do corre corre. JARVIS, quanto tempo a pé?"
  "Um pouco mais de 1 hora senhor" pergunta ${personagem.nome}
  "Hm ,qual devo escolher?"
  `)
};

function transporte () {
console.log("1 - Ir de carro \n2 - Ir a pé");
var escolha2 = +prompt ("Sua escolha é: ");

if (escolha2 === 1) {
  console.log(`"Bom, vou de carro, muito mais rápido"`)
} else if (escolha2 === 2) {
  console.log(`"Melhor ir a pé, evito transtorno se o trânsito estiver parado"`)
} else {
   console.log("Opa, escolha errada. Selecione uma das duas opções disponíveis");
  console.log();
  transporte();
}
};
transporte();

function itens () {

  console.log(`"Bom, mas antes de ir preciso levar algumas coisas que me ajude até chegar lá." pensa ${personagem.nome}.`);

  console.log(`Após procurar a casa toda, ${personagem.nome} encontra os seguintes itens:
  
  - Lanterna,
  - Canivete,
  - Kit de primeiro socorros,
  - Garrafa plástica,
  - Corda,
  - Comida.
  
  Infelizmente você não poderá levar tudo, pois quanto mais itens levar mais pesado será, então terá que escolher apenas 3 itens da lista. Digite abaixo os itens que deseja levar. Obs. pense bem nos itens, pois levar algo que não será útil pode custar sua vida!`);
 

}

itens();

var lista = [];
var adicionar = prompt(lista.push());
console.log(`Os itens que você escolheu foram: ${adicionar}.`);

console.log(`"Agora que já tenho os itens necessários, vamos a jornada."`)


