(() => {
  // Prevent form from being submitted if its not filled out
  const form = document.querySelector('form');
  const email = document.querySelector('input#email');
  const name = document.querySelector('input#name');
  const message = document.querySelector('textarea#message');
  const nav = document.querySelector('nav');
  const navList = document.querySelector('.navlist');

  const prices = [
    [1500, 41, 40, 44, 41, 40],
    [2000, 46, 46, 47, 44, 44],
    [2500, 53, 52, 52, 48, 48],
    [3000, 57, 58, 56, 52, 52],
    [3500, 61, 63, 60, 57, 58],
    [4000, 66, 70, 65, 62, 62],
    [4500, 70, 75, 68, 64, 66],
    [5000, 77, 81, 73, 68, 71],
    [5500, 84, 85, 77, 71, 79],
    [6000, 87, 91, 82, 77, 83],
    [6500, 91, 95, 88, 84, 87],
    [7000, 98, 100, 92, 87, 92],
    [7500, 102, 105, 96, 90, 98],
    [8000, 106, 112, 101, 93, 102],
    [8500, 110, 117, 105, 99, 107],
    [9000, 116, 123, 108, 102, 110],
    [9500, 120, 128, 113, 107, 113],
    [10000, 125, 133, 117, 111, 118],
    [11000, 136, 144, 126, 119, 126],
    [12000, 146, 154, 134, 126, 134],
    [13000, 156, 164, 141, 134, 141],
    [14000, 164, 176, 150, 142, 148],
    [15000, 173, 186, 158, 150, 155],
    [16000, 185, 197, 166, 158, 161],
    [17000, 194, 206, 174, 165, 169],
    [18000, 205, 217, 182, 173, 177],
    [19000, 212, 226, 190, 181, 185],
    [20000, 223, 237, 200, 189, 192],
    [30000, 324, 338, 272, 258, 261],
    ['1 Acre', 468, 452, 382, 364, 363],
    ['2 Acre', 850, 862, 732, 698, 698, 685]
  ];

  const pricingTable = document.querySelector('.pricing-table');
  const smallTable = document.querySelector('.pricing-table.small')
  prices.forEach((priceInfo) => {
    const topDiv = document.createElement('div');
    topDiv.classList.add('row');
    const sqftDiv = document.createElement('div');
    sqftDiv.textContent = priceInfo[0];
    topDiv.append(sqftDiv);
    let nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[1]}`;
    topDiv.append(nextDiv);
    nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[2]}`;
    topDiv.append(nextDiv);
    nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[3]}`;
    topDiv.append(nextDiv);
    nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[3] - 1}`;
    topDiv.append(nextDiv);
    nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[4]}`;
    topDiv.append(nextDiv);
    nextDiv = document.createElement('div');
    nextDiv.textContent = `$${priceInfo[5]}`;
    topDiv.append(nextDiv);
    pricingTable.append(topDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    nextDiv.classList.add('head');
    let innerDiv = document.createElement('div');
    if (typeof priceInfo[0] === 'string') {
      innerDiv.textContent = `${priceInfo[0]}`;
    } else {
      innerDiv.textContent = `${priceInfo[0]} Sq. Feet`;
    }
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Spring Spray';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[1]}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Late Spring Spray';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[2]}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Hydretain';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[3]}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Early Summer Spray';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[3] - 1}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Late Summer Spray';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[4]}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);

    nextDiv = document.createElement('div');
    nextDiv.classList.add('row');
    innerDiv = document.createElement('div');
    innerDiv.textContent = 'Fall Spray';
    nextDiv.append(innerDiv);
    innerDiv = document.createElement('div');
    innerDiv.textContent = `$${priceInfo[5]}`;
    nextDiv.append(innerDiv);
    smallTable.append(nextDiv);
  });

  const today = new Date();
  const yearsSince = today.getFullYear() - 1979;
  document.querySelector('#years-research').textContent = yearsSince;

  // body close nav
  document.body.addEventListener('click', (event) => {
    if (!event.target.contains(nav)) {
      nav.classList.remove('open');
    }
  });

  // Go to contact form
  document.querySelector('.banner-btn').addEventListener('click', () => {
    location.hash = '';
    setTimeout(() => {
      location.hash = 'contact';
    });
  });

  // Manage opening, closing nav
  const toggleNav = (event) => { nav.classList.toggle('open'); event.stopPropagation(); };
  document.querySelector('#nav-toggle').addEventListener('click', toggleNav);
  navList.addEventListener('click', toggleNav);

  let isInvalid = true, isSubmitted = false;

  const handleChange = () => {
    if (!isInvalid) {
      form.classList.remove('error');
    }

    if (isInvalid && isSubmitted) {
      form.classList.add('error');
    }
  };

  const onInput = () => {
    isInvalid = !email.value && !name.value;
    handleChange();
  };

  email.addEventListener('keyup', onInput);
  name.addEventListener('keyup', onInput);
  message.addEventListener('keyup', onInput);

  form.addEventListener('submit', (event) => {
    isSubmitted = true;
    if (!email.value || !name.value) {
      event.preventDefault();
    }
    handleChange();
  });

})();