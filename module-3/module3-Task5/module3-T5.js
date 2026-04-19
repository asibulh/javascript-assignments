const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'A close-up, high-detail portrait of a young girl with striking blue-green eyes. Her face is covered in light brown freckles, particularly across her nose and cheeks. Her hair appears slightly damp, and she is giving a subtle, gentle smile directly at the camera.',
    image: {
      large: "module3-T5-img/pic1.jpg",
      medium: "module3-T5-Thumbnails/pic1 (1).jpg",
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'A macro photograph showing clear, glistening water droplets resting on a vibrant green blade of grass. The largest droplet acts like a lens, refracting the light and showing the texture of the leaf beneath it. The background is a soft, creamy green bokeh. ',
    image: {
      large: "module3-T5-img/pic2.jpg",
      medium: "module3-T5-Thumbnails/pic2 (1).jpg",
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'A beautiful macro shot of morning dew. Several round water droplets are clinging to thin blades of grass. The lighting is bright and natural, creating shimmering "light orbs" or bokeh in the background, giving the scene a fresh and peaceful atmosphere.',
    image: {
      large: "module3-T5-img/pic3.jpg",
      medium: "module3-T5-Thumbnails/pic3 (1).jpg",
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'A moody, black-and-white photograph of a woman looking downward. Her face is partially shaded by the wide brim of a dark hat. She is wearing a dark top and several layers of elegant pearl necklaces that stand out sharply against the dark fabric. ',
    image: {
      large: "module3-T5-img/pic4.jpg",
      medium: "module3-T5-Thumbnails/pic4 (1).jpg",
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'A scenic landscape at sunset or sunrise. In the foreground, a few stalks of wheat stand tall against a golden, glowing sky. The suns rays are breaking through heavy clouds, casting a warm light over a vast, flat field and a distant road.',
    image: {
      large: "module3-T5-img/pic5.jpg",
      medium: "module3-T5-Thumbnails/pic5 (1).jpg",
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'An abstract "bokeh" photograph. The image is composed of many soft, out-of-focus circles of light in shades of green, white, and gray against a dark background. It creates a festive or dreamy visual effect.',
    image: {
      large: "module3-T5-img/pic6.jpg",
      medium: "module3-T5-Thumbnails/pic6 (1).jpg",
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'A wide landscape view of rolling green hills under a dramatic, cloudy sky at dusk. On the horizon, several wind turbines are visible, along with an electrical pylon, blending nature with renewable energy infrastructure. The valley is filled with soft shadows and patches of golden light.',
    image: {
      large: "module3-T5-img/pic7.jpg",
      medium: "module3-T5-Thumbnails/pic7 (1).jpg",
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'A bright and clear daytime sky. The image is dominated by a deep blue color, filled with scattered, wispy white cumulus clouds. It conveys a sense of openness and fair weather.',
    image: {
      large: "module3-T5-img/pic8.jpg",
      medium: "module3-T5-Thumbnails/pic8 (1).jpg",
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'This is another abstract bokeh image, very similar to pic6.jpg. It features glowing, blurred circles of light—primarily green and white—scattered across a dark, shadowy background, creating a sense of depth and glimmer.',
    image: {
      large: "module3-T5-img/pic9.jpg",
      medium: "module3-T5-Thumbnails/pic9 (1).jpg",
    },
  },
];



const section = document.querySelector("#pictures");

for (let i = 0; i < picArray.length; i++) {
  const article = document.createElement("article");
  article.classList.add("card");

  article.innerHTML = `
    <h2>${picArray[i].title}</h2>
    <figure>
      <img src="${picArray[i].image.medium}" alt="${picArray[i].title}">
      <figcaption>${picArray[i].caption}</figcaption>
    </figure>
    <p>${picArray[i].description}</p>
  `;

  section.appendChild(article);
}