// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
let usersBlock = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
.then(responseUsers => responseUsers.json())
.then(users => {

        for (const user of users) {
            let userBlock = document.createElement('div');
            let userId = document.createElement('h3');
            userId.innerText = `ID:${user.id}`;
            let userName = document.createElement('p');
            userName.innerText = `Name - ${user.name}`;
            userBlock.classList.add('user');
            let userLink = document.createElement('a');
            userLink.href = `../user/user-details.html?id=${user.id}&${user.name}`;
            userLink.innerText = 'user details';
            userLink.classList.add('link');

            userBlock.append(userId,userName,userLink);
            usersBlock.append(userBlock);

        }
    });


