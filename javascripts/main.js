console.log('This would be the main JS file.');


var reiBranco = '&#9812;';
var rainhaBranco = '&#9813;';
var torreBranco = '&#9814;';
var bispoBranco = '&#9815;';
var cavaloBranco = '&#9816;';
var peaoBranco = '&#9817;';
var reiPreto = '&#9818;';
var rainhaPreto = '&#9819;';
var torrePreto = '&#9820;';
var bispoPreto = '&#9821;';
var cavaloPreto = '&#9822;';
var peaoPreto = '&#9823;';

function converte(j){
  console.log(j);
  switch(j){
    case 0: return 'A';
    case 1: return 'B';
    case 2: return 'C';
    case 3: return 'D';
    case 4: return 'E';
    case 5: return 'F';
    case 6: return 'G';
    case 7: return 'H';
    
  }
  
  return j; 
}

function inicial(){
  
  var tabela = document.createElement("table");
  
  var tr = null;//document.createElement('tr');
  var td = null;// document.createElement('td');
  
  var preto = false;
  //this.preto = true;
  for( i = 0; i<8; i++) {
    tr = document.createElement('tr');
    
    for( j = 0; j<8;j++){
      td = document.createElement('td');
      
      var classe = this.preto ? 'preto': 'branco';
      
      
      classe += ' coluna' + converte(j);
      classe += ' linha' + (8-i);
      
        
      td.setAttribute('class', classe);
      tr.appendChild(td);  
      
      this.preto = !this.preto;
    }
    
    this.preto = !this.preto;
    tabela.appendChild(tr);
    
    
  }
  
  document.body.appendChild(tabela);    
  
  $('table').attr('style',"width:500px");
  
  $('tr').attr('style',"width:50px;height:50px");
  $('td').attr('style',"width:50px;height:50px");
  
  //$('table').attr('style',"width:100%");
  
  adicionaPeao();
  adicionaReis();
  adicionaRestante();
  //$('.colunaA').html(addPeca(reiBranco));
  //$('.linha1').html(addPeca());
  
  //$('.colunaD+.linha2').html("Samuel");
  
  $('.tamanhoPeca').draggable({ containment: "body" });
  
}

function addPeca(nomePeca){
  
  if( !nomePeca ){
    return "";
  }
  
  var peao = "<div id='P' class='tamanhoPeca "+nomePeca+"'>"+nomePeca+"</div>";
  return peao;
}

function adicionaPeao(){
  console.log( buscaPosicaoPeca('I','1'));
  
  
  // acho que irá diminuir.. a repetição de codico
  // essa função usa o arguments...array.. acredito que essa mesma função da para usar para as outras peças..
  // porém torne ela em uma função global... 
  function peaoarguments(){
    for (i=2; i<arguments.length;i++){
      $(buscaPosicaoPeca(arguments[i],arguments[0])).html(addPeca(arguments[1]));
    }
  }
  // o primeiro parametro (arguments[0])é a linha dos que será adicionada a peça 
  // o segundo parametro (arguments[1]) e o segundo o nome da peca
  peaoarguments('2',peaoBranco,'A','B','C','D','E','F','G','H');
  peaoarguments('7',peaoBranco,'A','B','C','D','E','F','G','H');
 
  
}

function adicionaReis(){
  // como aqui
  $(buscaPosicaoPeca('D','1')).html(addPeca(reiBranco));
  $(buscaPosicaoPeca('E','1')).html(addPeca(rainhaBranco));
  
  $(buscaPosicaoPeca('D','8')).html(addPeca(reiPreto));
  $(buscaPosicaoPeca('E','8')).html(addPeca(rainhaPreto));
}

function adicionaRestante(){
  // como aqui
  $(buscaPosicaoPeca('C','1')).html(addPeca(bispoBranco));
  $(buscaPosicaoPeca('F','1')).html(addPeca(bispoBranco));  
  $(buscaPosicaoPeca('C','8')).html(addPeca(bispoPreto));
  $(buscaPosicaoPeca('F','8')).html(addPeca(bispoPreto));
  
  $(buscaPosicaoPeca('B','1')).html(addPeca(cavaloBranco));
  $(buscaPosicaoPeca('G','1')).html(addPeca(cavaloBranco));  
  $(buscaPosicaoPeca('B','8')).html(addPeca(cavaloPreto));
  $(buscaPosicaoPeca('G','8')).html(addPeca(cavaloPreto));
  
  $(buscaPosicaoPeca('A','1')).html(addPeca(torreBranco));
  $(buscaPosicaoPeca('H','1')).html(addPeca(torreBranco));  
  $(buscaPosicaoPeca('A','8')).html(addPeca(torrePreto));
  $(buscaPosicaoPeca('H','8')).html(addPeca(torrePreto));
  
}

function buscaPosicaoPeca( letra, numero ){
  return '.coluna' + letra + '.linha' + numero;
}


$( function (){
  inicial();   
  //exercicio();
});
