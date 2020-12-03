let phrases = [
    { text: 'отправить смешную гифку Деме', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'проверить новые мемы в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'разобраться, о чём поет Максимка', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'смотреть YouTube', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'резко запланировать переезд куда-нибудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'читать про иммиграцию', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'листать Instagram', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'создать свой плейлист в Spotify', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'посмотреть трейлер сериала и заодно первый(и все остальные) сезоны', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'проверить новые мемы в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'cъесть сладкое(незаметно)', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  };
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i <= 2; i= i+1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  };
