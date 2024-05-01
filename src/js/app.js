document.addEventListener('DOMContentLoaded', function(){
  const submitButton = document.getElementById('submitButton');
  const messageForm = document.getElementById('messageForm');
  const nameInput = document.getElementById('text');
  const buttonRecipe = document.querySelector('.button-recipe');
  const buttonPlan = document.querySelector('.button-plan');
  const desktopAppSection = document.querySelector('.desktop-app');
  const appNotification = document.querySelector('.app-notification');


  appNotification.classList.add('hidden');
  desktopAppSection.classList.add('hidden');
  buttonRecipe.classList.add('hidden');
  buttonPlan.classList.add('hidden');

  if (localStorage.getItem('userName')) {
    const userName = localStorage.getItem('userName');
    nameInput.value = userName;
    showApp(userName);
  }

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userName = nameInput.value.trim();
    if (userName !== '') {
      localStorage.setItem('userName', userName);
      showApp(userName);
    } else {
      alert('Nie tak prędko! Najpierw podaj swoje imię.');
    }
  });
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userName = nameInput.value.trim();
    if (userName !== '') {
      localStorage.setItem('userName', userName);
      showApp(userName);
    } else {
      alert('Nie tak prędko! Najpierw podaj swoje imię.');
    }
  });

  const deleteNotificationButtons = document.querySelectorAll(
    '.delete-notification-b, .delete-notification-o, .delete-notification-g'
  );
  deleteNotificationButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.parentElement.style.display = 'none';
    });
  });

  function showApp(userName) {
    messageForm.classList.add('hidden');
    desktopAppSection.classList.remove('hidden');
    appNotification.classList.remove('hidden');
    buttonRecipe.classList.remove('hidden');
    buttonPlan.classList.remove('hidden');

    const userNameElement = document.querySelector('.user-name');
    userNameElement.innerText = userName;
  }
});

//   submitButton.addEventListener('click', function(event){
//     event.preventDefault();
//
//     const nameInput = document.getElementById('text');
//     const userName = nameInput.value.trim();
//
//     if(userName !== '') {
//       messageForm.classList.add('hidden');
//       desktopAppSection.classList.remove('hidden');
//       appNotification.classList.remove('hidden');
//       buttonRecipe.classList.remove('hidden');
//       buttonPlan.classList.remove('hidden');
//
//
//       const userNameElement = document.querySelector('.user-name');
//       userNameElement.textContent = userName;
//     }else {
//       alert('Nie tak prędko! Najpierw podaj swoję imię.');
//     }
// });
//
//   const deleteNotificationButtons = document.querySelectorAll('.delete-notification-b, .delete-notification-o, .delete-notification-g');
//   deleteNotificationButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       this.parentElement.style.display = 'none';
//     });
//   });
// });

