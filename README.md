# jogoDaForca
Esse projeto é minha solução para o segundo desafio proposto pelo programa Oracle Next Education 2022 em parceria com a Alura👋.

Responsividade foi a maior dificuldade neste desafio, pois meu projeto inicial encontrou problemas ao ser executado em dispositivos mobile, pois os eventos 'keypress', 'keycode' e 'keydown' simplesmente não retornavam os valores esperados fora o ambiente web desktop. Muita pesquisa depois descobri que isso é uma dificuldade encontrada por muitos programadores web ao trabalhar com inputs do teclado android (https://bugs.chromium.org/p/chromium/issues/detail?id=118639). Consegui contornar o problema usando o evento textInput. No entanto, ainda assim o comportamento não era o esperado! Tive que encontrar uma forma de adaptar a mecanica do jogo para o ambiente mobile sem perder a funcionalidade que havia alcançado no desktop. Foi então que, pesquisando, entendi melhor o conceito de 'mobile first' e entrei em contato com 'media query'.

Pretendo voltar a este projeto e melhorá-lo com algumas animações e diferentes modos de jogo.
