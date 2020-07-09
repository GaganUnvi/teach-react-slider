import React, { useState } from 'react';

const images = [
  {
    image: 'https://source.unsplash.com/WLUHO9A_xik/1600x900',
    quote:
      'Sometimes life is going to hit you in the head with a brick. Do not lose faith.',
    author: 'Steve Jobs',
    link: 'https://en.wikipedia.org/wiki/Steve_Jobs',
  },
  {
    image: 'https://source.unsplash.com/SwO3r4BUl1I/1600x900',
    quote:
      'Do not worry about a thing cause every little thing gonna be all right.',
    author: 'Bob Marley',
    link: 'https://en.wikipedia.org/wiki/Bob_Marley',
  },

  {
    image: 'https://source.unsplash.com/2bGL3ydxJzs/1600x900',
    quote: 'You miss 100% of the shots you do not take.',
    author: 'Wayne Gretzky',
  },

  {
    image: 'https://source.unsplash.com/H4l6KUy3E6w/1600x900',
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
    link: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
  },

  {
    image: 'https://source.unsplash.com/hzgs56Ze49s/1600x900',
    quote:
      'Here’s to the nights we don’t remember and the friends we won’t forget.',
    author: 'Anonymous',
  },
];

function AnotherSlider() {
  const [index, setIndex] = useState(0);

  const position = index * 100;
  const left = `-${position}%`;

  return (
    <div className="App">
      <div className="slides" style={{ left }}>
        {images.map((s, index) => (
          <a
            className="slide"
            style={{ backgroundImage: `url(${s.image})` }}
            href={s.link || undefined}
            target={s.link ? '_blank' : undefined}
          >
            <div className="slide-content">
              <div className="quote">{s.quote}</div>
              <div className="author">{s.author}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="dots">
        {images.map((s, i) => (
          <span
            className={i === index ? 'dot-fade' : 'dot'}
            onClick={() => {
              setIndex(i);
            }}
          ></span>
        ))}
      </div>
      <span
        className="prev"
        onClick={() => setIndex((index !== 0 ? index : images.length) - 1)}
      >
        &#10094;
      </span>
      <span
        className="next"
        onClick={() => setIndex(index !== images.length - 1 ? index + 1 : 0)}
      >
        &#10095;
      </span>
    </div>
  );
}

export default AnotherSlider;
