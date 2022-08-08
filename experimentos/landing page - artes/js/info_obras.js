
var url_ = location.href; 
var string = url_.substring(url_.lastIndexOf("=")+1,url_.length);
    
if(string == 'homem_vitruviano')
{ 

    $(".name_obra").text("Homem Vitruviano");
    $(".image_obra").css('background-image', 'url("imagens/homem_vitruviano.png")');
    $(".text_obra").text("Homem Vitruviano: O desenho que acompanha as notas feitas pelo arquiteto romano Vitrúvio por volta do ano 1490 num dos seus diários. Descreve uma figura masculina nua separada e simultaneamente em duas posições sobrepostas com os braços inscritos num círculo e num quadrado. A cabeça é calculada como sendo um oitavo da altura total. Às vezes, o desenho e o texto são chamados de Cânone das Proporções. ");
    
}
else if(string == 'ultima_ceia')
{ 
    $(".name_obra").text("Última Ceia");
    $(".image_obra").css('background-image', 'url("imagens/ultima_ceia.png")');
    $(".image_obra").css("width","auto");
    $(".text_obra").text("Última Ceia: A Última Ceia (em italiano: L'Ultima Cena e também Il Cenacolo) é um afresco de Leonardo da Vinci para a igreja de Santa Maria delle Grazie em Milão, Itália. O trabalho presume-se que tenha sido iniciado por volta de 1495-96 e foi encomendado como parte de um plano de reformas na igreja e nos seus edifícios conventuais pelo patrono de Leonardo, Ludovico Sforza, duque de Milão. Representa o episódio bíblico da Última Ceia de Jesus com os Apóstolos antes de ser preso e crucificado. É um dos bens culturais mais conhecidos e estimados do mundo.");

}
else if(string == 'salvator_mundi')
{ 
    $(".name_obra").text("Salvator Mundi");
    $(".image_obra").css('background-image', 'url("imagens/salvator_mundi.png")');
    $(".text_obra").text("Salvator Mundi: É uma pintura de Jesus Cristo como Salvator Mundi (Salvador do Mundo), que foi atribuída por alguns estudiosos como uma obra de autoria de Leonardo da Vinci desde sua redescoberta em 2005. A pintura mostra Cristo, no estilo renascentista, a dar uma bênção com a mão direita levantada e os dedos cruzados enquanto segura uma esfera de cristal na mão esquerda. A pintura foi vendida em leilão pela Christie's em Nova York, em 15 de novembro de 2017, por 450,3 milhões de dólares, estabelecendo uma nova marca para a pintura mais cara já vendida. ");
}
else if(string == 'mona_lisa')
{ 
    $(".name_obra").text("Mona Lisa");  
    $(".image_obra").css('background-image', 'url("imagens/mona_lisa.png")');
    $(".text_obra").text("Mona Lisa: A Mona Lisa (também conhecida como A Gioconda) é a obra que o artista melhor concebeu a técnica do sfumato. O quadro representa uma mulher com uma expressão introspectiva e um pouco tímida. O seu sorriso restrito é muito sedutor, mesmo que um pouco conservador. O seu corpo representa o padrão de beleza da mulher na época de Leonardo. Este quadro é provavelmente o retrato mais famoso na história da arte, senão, o quadro mais famoso e valioso de todo o mundo.");

}
else if(string == 'sao_joao_batista')
{ 
    $(".name_obra").text("São João Batista");  
    $(".image_obra").css('background-image', 'url("imagens/sao_joao_batista.png")');
    $(".text_obra").text("São João Batista: É uma pintura a óleo em madeira de nogueira de Leonardo da Vinci feita no período da Alta Renascença. Provavelmente completada de 1513 a 1516, acredita-se que seja a sua pintura final. O tamanho original da pintura era de 69 x 57 cm. Agora é exibido no Musée du Louvre em Paris, França. ");
}

