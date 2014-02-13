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
  
  $(buscaPosicaoPeca('A','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('B','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('C','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('D','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('E','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('F','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('G','2')).html(addPeca(peaoBranco));
  $(buscaPosicaoPeca('H','2')).html(addPeca(peaoBranco));
  
  
  $(buscaPosicaoPeca('A','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('B','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('C','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('D','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('E','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('F','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('G','7')).html(addPeca(peaoPreto));
  $(buscaPosicaoPeca('H','7')).html(addPeca(peaoPreto));
  
}

function adicionaReis(){
  $(buscaPosicaoPeca('D','1')).html(addPeca(reiBranco));
  $(buscaPosicaoPeca('E','1')).html(addPeca(rainhaBranco));
    
  $(buscaPosicaoPeca('D','8')).html(addPeca(reiPreto));
  $(buscaPosicaoPeca('E','8')).html(addPeca(rainhaPreto));
}

function adicionaRestante(){
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
