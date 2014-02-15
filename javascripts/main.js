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
      
      td.innerHTML = "<div class='tamanhoPeca connectedSortable'><div class='fundo'>&nbsp;</div></div>";
      
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
  
  //$('.tamanhoPeca').draggable({ containment: 'table' });
  
  //$(buscaPosicaoPeca('A','2')+".tamanhoPeca").addClass('connectedSortable');
  //$(buscaPosicaoPeca('A','3')+".tamanhoPeca").addClass('connectedSortable');
  
  $('.tamanhoPeca').sortable({
    connectWith: ".connectedSortable",
    forcePlaceholderSize: false
    
  });
  
  $( ".tamanhoPeca" ).disableSelection();
  
  $('.tamanhoPeca').bind('DOMNodeInserted', function(e) {
    var element = e.target;
    
    $(element).parent().children(".fundo").remove();
    
  } );
  
  $('.tamanhoPeca').bind('DOMNodeRemoved', function(e) {
    var element = e.target;
    
    if ($(element).parent().find('*').length === 0 ) {
      $(element).parent().find('.tamanhoPeca').append('<div class="fundo">&nbsp;</div>');
    }
    
   });
  
}

function addPeca(nomePeca){
  
  if( !nomePeca ){
    return "";
  }
  
  var peao = "<div class='tamanhoPeca "+nomePeca+" connectedSortable'><div class='peca' >"+nomePeca+"</div></div>";
  return peao;
}

function adicionaPeao(){
  //console.log( buscaPosicaoPeca('I','1'));
  
  //$(buscaPosicaoPeca('A','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('B','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('C','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('D','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('E','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('F','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('G','2')).html(addPeca(peaoBranco));
  //$(buscaPosicaoPeca('H','2')).html(addPeca(peaoBranco));
  
  
  //$(buscaPosicaoPeca('A','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('B','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('C','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('D','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('E','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('F','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('G','7')).html(addPeca(peaoPreto));
  //$(buscaPosicaoPeca('H','7')).html(addPeca(peaoPreto));
    
  pecaarguments(2, peaoBranco, 'A','B','C','D','E','F','G','H');
  pecaarguments(7, peaoPreto,  'A','B','C','D','E','F','G','H');
}

function pecaarguments(){
    for (i=2; i<arguments.length;i++){
      $(buscaPosicaoPeca(arguments[i],arguments[0])).html(addPeca(arguments[1]));
    }
}

function adicionaReis(){
  
  $(buscaPosicaoPeca('D','1')).html(addPeca(reiBranco));
  $(buscaPosicaoPeca('E','1')).html(addPeca(rainhaBranco));
    
  $(buscaPosicaoPeca('D','8')).html(addPeca(reiPreto));
  $(buscaPosicaoPeca('E','8')).html(addPeca(rainhaPreto));
}

function adicionaRestante(){
  pecaarguments(1, bispoBranco, 'C', 'F');
  pecaarguments(8, bispoPreto, 'C', 'F');
  
  pecaarguments(1, cavaloBranco, 'B', 'G');
  pecaarguments(8, cavaloPreto, 'B', 'G');
  
  pecaarguments(1, torreBranco, 'A', 'H');
  pecaarguments(8, torrePreto, 'A', 'H');
    
}

function buscaPosicaoPeca( letra, numero ){
  return '.coluna' + letra + '.linha' + numero;
}

function mover(lInicial,nInicial,lFinal,nFinal){
  var inicio = $(buscaPosicaoPeca(lInicial,nInicial));
  
//  $(buscaPosicaoPeca(lFinal,nFinal) + '>.tamanhoPeca').append( inicio.find('.peca').parent() );  
  
    $(buscaPosicaoPeca(lFinal,nFinal) + '>.tamanhoPeca').append( inicio.find('.peca').parent() );  
  

}


$( function (){
  inicial();   
});
