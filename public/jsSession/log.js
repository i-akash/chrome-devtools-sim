document.querySelector('#hello').addEventListener('click', () => {
    console.log('Hello, Console!');
  });
  
  document.querySelector('#dante').addEventListener('click', logWarning);
  
  function logWarning() {
    quoteDante();
  }
  
  function quoteDante() {
    console.warn('Abandon Hope All Ye Who Enter');
  }
  
  document.querySelector('#hal').addEventListener('click', () => {
    console.error(`I'm sorry, Dave. I'm afraid I can't do that.`);
  });
  
  document.querySelector('#table').addEventListener('click', () => {
    console.table([
      {
        first: 'René',
        last: 'Magritte',
      },
      {
        first: 'Chaim',
        last: 'Soutine',
        birthday: '18930113',
      },
      {
        first: 'Henri',
        last: 'Matisse',
      }
    ]);
  });
  
  document.querySelector('#group').addEventListener('click', () => {
    const label = 'Adolescent Irradiated Espionage Tortoises';
    console.group(label);
    console.info('Leo');
    console.info('Mike');
    console.info('Don');
    console.info('Raph');
    console.groupEnd(label);
  });
  
  document.querySelector('#custom').addEventListener('click', () => {
    const spacing = '5px';
    const styles = 
          `padding: ${spacing}; background-color: darkblue; color: white; font-style: 
           italic; border: ${spacing} solid crimson; font-size: 2em;`;
    console.log('%cVariety is the spice of life', styles);
  });
  
  document.querySelector('#error').addEventListener('click', () => {
    document.querySelector('#date').textContent = new Date();
  });
  
  document.querySelector('#violation').addEventListener('click', (e) => {
    const duration = 3000;
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // Block the main thread for 3 seconds.
    }
  });
  
  document.querySelector('#network').addEventListener('click', (e) => {
    fetch('/coffee');
  });