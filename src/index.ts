const dataToUse: object[] = [
  { slideName: 'Side #1' },
  { slideName: 'Side #2' },
  { slideName: 'Side #3' },
  { slideName: 'Side #4' },
  { slideName: 'Side #5' },
  { slideName: 'Side #6' },
  { slideName: 'Side #7' },
  { slideName: 'Side #8' },
];

const slides = document.getElementById('slides');
const leftController = document.querySelector('.left-controller');
const rightController = document.querySelector('.right-controller');

// interface SliderProps {
//   slideName: string;
// }

const dataToInject = dataToUse.map((slide, idx): string => {
  const { slideName }: any = slide;
  let whereIam: string = 'next';

  switch (idx) {
    case 0:
      whereIam = 'current';
      break;

    case dataToUse.length - 1:
      whereIam = 'last';
      break;
    default:
      break;
  }

  return `<li class="slide ${whereIam}">${slideName}</li>`;
});

// finally inject the result
slides.innerHTML = dataToInject.join('');

// make the functionality:
const launchTheSlider = (action?: string) => {
  const current = document.querySelector('.current');
  const last = document.querySelector('.last');
  let next = current.nextElementSibling;
  if (!next) {
    next = slides.firstElementChild;
  }
  current.classList.remove(['current']);
  next.classList.remove(['next']);
  last.classList.remove(['last']);

  if (action === 'prev') {
    current.classList.add('next');
    last.classList.add('current');
    next = last.previousElementSibling;

    if (!next) {
      next = slides.lastElementChild;
    }

    next.classList.remove(['next']);
    next.classList.add('last');
  }

  current.classList.add('last');
  next.classList.add('current');
  last.classList.add('next');
};

leftController.addEventListener('click', () => {
  launchTheSlider('prev');
});

rightController.addEventListener('click', () => {
  launchTheSlider();
});
