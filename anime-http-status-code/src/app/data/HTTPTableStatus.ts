const statusData = [
    // 1xx: Informational
    {
      image: 'https://pbs.twimg.com/media/F_AhG7oWIAAy2RT?format=jpg',
      httpCode: '100',
      httpMessage: 'Continue',
      description: 'O servidor recebeu a requisição e está aguardando que o cliente envie o restante dos dados.',
    },
    {
      image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/28/1468593869-abra-evolution-pokemon.gif',
      httpCode: '101',
      httpMessage: 'Switching Protocols',
      description: 'O servidor está trocando protocolos conforme solicitado pelo cliente.',
    },
    {
      image: 'https://media1.tenor.com/m/bmcU6fpKS4YAAAAd/gon-gon-confused.gif',
      httpCode: '102',
      httpMessage: 'Processing',
      description: 'O servidor recebeu e está processando a requisição, mas não tem resposta disponível ainda.',
    },
  
    // 2xx: Success
    {
      image: 'https://media1.tenor.com/m/HWdSvD9Wg20AAAAC/one-punch-man-ok.gif',
      httpCode: '200',
      httpMessage: 'OK',
      description: 'A requisição foi bem-sucedida. O servidor retornou a resposta solicitada.',
    },
    {
      image: 'https://64.media.tumblr.com/659ab9a6c59d8538347df93866d636d3/8edd934dba27bfb3-45/s540x810/a98cbf69ff1958e4f1cbb1ec53b41e6455011d7a.gif',
      httpCode: '201',
      httpMessage: 'Created',
      description: 'A requisição foi bem-sucedida e um novo recurso foi criado.',
    },
    {
      image: 'https://steamuserimages-a.akamaihd.net/ugc/449611652050198394/003B0F458420C44A75D10CBDC94A9C0B964C06F7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      httpCode: '202',
      httpMessage: 'Accepted',
      description: 'A requisição foi recebida, mas ainda não foi processada.',
    },
    {
      image: 'https://media1.tenor.com/m/8b2-2a17wIAAAAAC/wow-world-of-warcraft.gif',
      httpCode: '203',
      httpMessage: 'Non-Authoritative Information',
      description: 'O servidor retornou informações de outra fonte que não a original.',
    },
    {
      image: 'https://i.pinimg.com/originals/7b/72/86/7b7286c2a14d77676c7f0ca911d65b6a.gif',
      httpCode: '204',
      httpMessage: 'No Content',
      description: 'A requisição foi bem-sucedida, mas não há conteúdo para retornar.',
    },
    {
      image: 'https://i.pinimg.com/originals/10/66/36/1066363bef58792c363d9f420ba441cf.gif',
      httpCode: '205',
      httpMessage: 'Reset Content',
      description: 'A requisição foi bem-sucedida, mas o cliente deve redefinir a visualização do documento.',
    },
    {
      image: 'https://i.gifer.com/4y4c.gif',
      httpCode: '206',
      httpMessage: 'Partial Content',
      description: 'O servidor está retornando apenas parte do recurso devido ao cabeçalho `Range` enviado pelo cliente.',
    },
  
    // 3xx: Redirection
    {
      image: 'https://i.pinimg.com/originals/e5/e6/bd/e5e6bdedd1f6033f3420ae5e379da103.gif',
      httpCode: '300',
      httpMessage: 'Multiple Choices',
      description: 'O servidor oferece múltiplas opções de resposta.',
    },
    {
      image: 'https://comicvine.gamespot.com/a/uploads/original/11146/111461018/7915535-3962628725--QivC.gif',
      httpCode: '301',
      httpMessage: 'Moved Permanently',
      description: 'O recurso solicitado foi movido permanentemente para uma nova URL.',
    },
    {
      image: 'https://i.pinimg.com/originals/dc/7e/25/dc7e25b1570398c8164dc26b36be6b15.gif',
      httpCode: '302',
      httpMessage: 'Found',
      description: 'O recurso solicitado foi encontrado, mas está temporariamente em outro lugar.',
    },
    {
      image: 'https://012mashitalks.home.blog/wp-content/uploads/2020/05/bungo-stray-dogs-atsushi-and-dazai-gif-anime-funny.gif',
      httpCode: '303',
      httpMessage: 'See Other',
      description: 'O cliente deve usar uma URL diferente para acessar o recurso.',
    },
    {
      image: 'https://i.pinimg.com/originals/6f/fb/c2/6ffbc2302e0bffea29212de0ec8e9b1a.gif',
      httpCode: '304',
      httpMessage: 'Not Modified',
      description: 'O recurso não foi modificado desde a última requisição.',
    },
    {
      image: 'https://giffiles.alphacoders.com/100/100320.gif',
      httpCode: '305',
      httpMessage: 'Use Proxy',
      description: 'O recurso solicitado deve ser acessado através de um proxy.',
    },
    {
      image: 'https://i.imgur.com/02xpq2R.gif',
      httpCode: '307',
      httpMessage: 'Temporary Redirect',
      description: 'O recurso solicitado foi movido temporariamente, e o cliente deve usar a URL fornecida.',
    },
    {
      image: 'https://pa1.aminoapps.com/7244/f04d0580c966d5f5ac879708dcc9514ad63de626r1-298-200_hq.gif',
      httpCode: '308',
      httpMessage: 'Permanent Redirect',
      description: 'O recurso foi movido permanentemente para a URL fornecida, e o cliente deve usar essa nova URL.',
    },
  
    // 4xx: Client Error
    {
      image: 'https://pa1.aminoapps.com/5866/2eb8bfd66f85e729a5ec8eb34bff8d058baf22ef_00.gif',
      httpCode: '400',
      httpMessage: 'Bad Request',
      description: 'A requisição não pode ser processada devido a erro do cliente (por exemplo, sintaxe inválida).',
    },
    {
      image: 'https://www.icegif.com/wp-content/uploads/2024/05/anime-icegif-11.gif',
      httpCode: '401',
      httpMessage: 'Unauthorized',
      description: 'A requisição requer autenticação do usuário.',
    },
    {
      image: 'https://gifdb.com/images/high/no-money-anime-ey0ap3xauza7cjf0.gif',
      httpCode: '402',
      httpMessage: 'Payment Required',
      description: 'Este código está reservado para um futuro uso e ainda não é utilizado.',
    },
    {
      image: 'https://i.pinimg.com/originals/44/f2/24/44f224910629bd891e9663d51e949cc7.gif',
      httpCode: '403',
      httpMessage: 'Forbidden',
      description: 'O servidor entendeu a requisição, mas se recusa a autorizá-la.',
    },
    {
      image: 'https://c.tenor.com/kNHKLgXBPhYAAAAC/tenor.gif',
      httpCode: '404',
      httpMessage: 'Not Found',
      description: 'O servidor não conseguiu encontrar o recurso solicitado.',
    },
    {
      image: 'https://media.tenor.com/30S2MyziFDkAAAAM/anime-animu.gif',
      httpCode: '405',
      httpMessage: 'Method Not Allowed',
      description: 'O método especificado na requisição não é permitido para o recurso solicitado.',
    },
    {
      image: 'https://c.tenor.com/BN1ACtueGGAAAAAC/tenor.gif',
      httpCode: '406',
      httpMessage: 'Not Acceptable',
      description: 'O recurso solicitado não pode gerar uma resposta que seja aceitável para o cliente.',
    },
    {
      image: 'https://i.pinimg.com/originals/0a/25/ab/0a25abe79f17f1f817250e16f078c9e7.gif',
      httpCode: '407',
      httpMessage: 'Proxy Authentication Required',
      description: 'O cliente precisa autenticar-se com o proxy antes de acessar o recurso.',
    },
    {
      image: 'https://media.tenor.com/MtUHnhdARQkAAAAM/anime-fern.gif',
      httpCode: '408',
      httpMessage: 'Request Timeout',
      description: 'O servidor demorou demais para responder à requisição.',
    },
    {
      image: 'https://i.gifer.com/DUEV.gif',
      httpCode: '409',
      httpMessage: 'Conflict',
      description: 'A requisição não pôde ser processada devido a um conflito com o estado atual do recurso.',
    },
    {
      image: 'https://i.gifer.com/sCO.gif',
      httpCode: '410',
      httpMessage: 'Gone',
      description: 'O recurso solicitado não está mais disponível e não será recuperado.',
    },
    {
      image: 'https://64.media.tumblr.com/d42bc98738e723c4bdf89dff132b5eb2/tumblr_mo6pomCxtH1r32an8o1_500.gif',
      httpCode: '411',
      httpMessage: 'Length Required',
      description: 'A requisição precisa ter um cabeçalho `Content-Length` válido.',
    },
    {
      image: 'https://media.tenor.com/_N5WNDnDrfgAAAAM/alievz1-anime.gif',
      httpCode: '412',
      httpMessage: 'Precondition Failed',
      description: 'Uma das condições prévias definidas no cabeçalho `If-None-Match` falhou.',
    },
    {
      image: 'https://media.tenor.com/GHoZw342xugAAAAM/dragon-ball-annin.gif',
      httpCode: '413',
      httpMessage: 'Payload Too Large',
      description: 'O corpo da requisição é maior que o servidor está disposto a processar.',
    },
    {
      image: 'https://media.tenor.com/gJZGSe6Fb2UAAAAM/curls-gym.gif',
      httpCode: '414',
      httpMessage: 'URI Too Long',
      description: 'A URL solicitada é maior que o servidor está disposto a processar.',
    },
    {
      image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm13N3NsYW83Ynl4M3gwYXZkMzZkNTVsZDhoa2RnOHhncTh0MGllNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmaHxd6NnokQfRe/giphy.gif',
      httpCode: '415',
      httpMessage: 'Unsupported Media Type',
      description: 'O servidor não suporta o formato de mídia da requisição.',
    },
    {
      image: 'https://media.tenor.com/gvBRAwoqeDkAAAAM/reach-out-sky.gif',
      httpCode: '416',
      httpMessage: 'Range Not Satisfiable',
      description: 'O servidor não pode fornecer a parte solicitada do recurso.',
    },
    {
      image: 'https://i.gifer.com/42WR.gif',
      httpCode: '417',
      httpMessage: 'Expectation Failed',
      description: 'O servidor não pode atender às expectativas do cabeçalho `Expect` da requisição.',
    },
  
    // 5xx: Server Error
    {
      image: 'https://media.tenor.com/w5EFZpYKe8MAAAAM/anime-anime-funny.gif',
      httpCode: '500',
      httpMessage: 'Internal Server Error',
      description: 'O servidor encontrou uma situação inesperada que o impediu de completar a requisição.',
    },
    {
      image: 'https://media.tenor.com/5-SBG4RGsD4AAAAM/no-anime.gif',
      httpCode: '501',
      httpMessage: 'Not Implemented',
      description: 'O servidor não suporta a funcionalidade necessária para atender à requisição.',
    },
    {
      image: 'https://i.pinimg.com/originals/c4/b9/02/c4b90239979a3e764686a2d06c0e0c0e.gif',
      httpCode: '502',
      httpMessage: 'Bad Gateway',
      description: 'O servidor recebeu uma resposta inválida de um servidor upstream.',
    },
    {
      image: 'https://animeforums.net/uploads/monthly_2017_07/xD.gif.2e023bc55da5d449b3401d393bfb29e4.gif',
      httpCode: '503',
      httpMessage: 'Service Unavailable',
      description: 'O servidor está temporariamente fora de serviço devido a manutenção ou sobrecarga.',
    },
    {
      image: 'https://i0.wp.com/media4.giphy.com/media/jAe22Ec5iICCk/giphy.gif',
      httpCode: '504',
      httpMessage: 'Gateway Timeout',
      description: 'O servidor não recebeu uma resposta a tempo de um servidor upstream.',
    },
    {
      image: 'https://media.tenor.com/GKaRHApfkhwAAAAM/slap-handa-seishuu.gif',
      httpCode: '505',
      httpMessage: 'HTTP Version Not Supported',
      description: 'O servidor não suporta a versão HTTP usada na requisição.',
    },
  ];
  
  export default statusData;
  