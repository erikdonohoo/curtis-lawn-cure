(() => {
  // Prevent form from being submitted if its not filled out
  const form = document.querySelector('form');
  const email = document.querySelector('input#email');
  const name = document.querySelector('input#name');
  const message = document.querySelector('textarea#message');
  const nav = document.querySelector('nav');
  const navList = document.querySelector('.navlist');

  const prices = [
    [1500, 39, 40, 38, 37, 38],
    [2000, 45, 46, 41, 40, 42],
    [2500, 50, 52, 45, 44, 46],
    [3000, 55, 58, 48, 47, 50],
    [3500, 60, 64, 52, 51, 55],
    [4000, 65, 70, 56, 55, 60],
    [4500, 70, 75, 59, 58, 64],
    [5000, 75, 81, 63, 62, 69],
    [5500, 79, 86, 66, 65, 74],
    [6000, 84, 91, 70, 69, 78],
    [6500, 89, 95, 76, 75, 83],
    [7000, 94, 100, 79, 78, 88],
    [7500, 98, 105, 83, 82, 93],
    [8000, 103, 112, 86, 85, 97],
    [8500, 108, 117, 90, 89, 102],
    [9000, 113, 123, 93, 92, 106],
    [9500, 117, 128, 97, 96, 109],
    [10000, 122, 133, 101, 100, 113],
    [11000, 131, 144, 108, 107, 120],
    [12000, 141, 155, 115, 114, 127],
    [13000, 150, 165, 122, 121, 134],
    [14000, 160, 176, 129, 128, 141],
    [15000, 169, 187, 136, 135, 148],
    [16000, 179, 197, 143, 142, 154],
    [17000, 188, 207, 150, 149, 162],
    [18000, 198, 217, 157, 156, 171],
    [19000, 207, 227, 164, 163, 176],
    [20000, 217, 237, 172, 171, 183]
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
    innerDiv.textContent = `${priceInfo[0]} Sq. Feet`;
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
    innerDiv.textContent = 'Early Summery Spray';
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