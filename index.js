function addingEventListener() {
    const input = document.getElementById('main');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    main.addEventListener('click', clickAlert);
  }
  
  addingEventListener();
