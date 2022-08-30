// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
let userBlock = document.getElementsByClassName('user')[0];

let url = new URL(location.href);
let userid = url.searchParams.get('id');
console.log(userid);


fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then(responseUser => responseUser.json())
    .then(user => createUserCard(user));

function createUserCard(user) {
    let userCard = document.createElement('div');
    userCard.classList.add('userCard');
    let postsBlock = document.createElement('div');
    postsBlock.classList.add('postsBlock');
    let userId = document.createElement('div');
    userId.innerText = `ID: ${user.id}`;
    let userName = document.createElement('div');
    userName.innerText = `Name: ${user.name}`;
    let userUserName = document.createElement('div');
    userUserName.innerText = `User name: ${user.username}`;
    let userEmail = document.createElement('div');
    userEmail.innerText = `Email: ${user.email}`;
    let userAddress = document.createElement('div');
    userAddress.innerText = `Address: `;

//address data
    let userAddressStreet = document.createElement('div');
    userAddressStreet.innerText = `Street: ${user.address.street}`;
    let userAddressSuite = document.createElement('div');
    userAddressSuite.innerText = `Suite: ${user.address.suite}`;
    let userAddressCity = document.createElement('div');
    userAddressCity.innerText = `City: ${user.address.city}`;
    let userAddressZipcode = document.createElement('div');
    userAddressZipcode.innerText = `Zipcode: ${user.address.zipcode}`;
    let userAddressGeo = document.createElement('div');
    userAddressGeo.innerText = `Geo: `;

//geo data
    let userAddressGeoLat = document.createElement('div');
    userAddressGeoLat.innerText = `Lat: ${user.address.geo.lat}`;
    let userAddressGeoLng = document.createElement('div');
    userAddressGeoLng.innerText = `Lng: ${user.address.geo.lng}`;

    let userPhone = document.createElement('div');
    userPhone.innerText = `Phone: ${user.phone}`;
    let userWebsite = document.createElement('div');
    userWebsite.innerText = `Website: ${user.website}`;
    let userCompany = document.createElement('div');
    userCompany.innerText = `Company: `;

//Company data
    let userCompanyName = document.createElement('div');
    userCompanyName.innerText = `Name: ${user.company.name}`;
    let userCompanyCatchPhrase = document.createElement('div');
    userCompanyCatchPhrase.innerText = `CatchPhrase: ${user.company.catchPhrase}`;
    let userCompanyBS = document.createElement('div');
    userCompanyBS.innerText = `BS: ${user.company.bs}`;

    // 5 Добавить кнопку
    // "post of current user", при клике на которую, появляются title всех постов текущего юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

//button
    let userPostsButton = document.createElement('button');
    userPostsButton.classList.add('userPostsButton');
    userPostsButton.innerText = `post of current user`;
    userPostsButton.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
            .then(responsePostsTitle => responsePostsTitle.json())
            .then(posts => {
                for (const post of posts) {
                    let postBlock = document.createElement('div');
                    postBlock.classList.add('postBlock');
                    postsBlock.append(postBlock);
                    let titlePosts = document.createElement('p');

                    titlePosts.innerText = `Title: ${post.title}`;
                    postsBlock.appendChild(titlePosts);

// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
                    let postDetails = document.createElement('a');
                    postDetails.innerText = `Post details`;
                    postDetails.href = `../post/post-details.html?id=${post.id}`;
                    postsBlock.appendChild(postDetails);
                    postBlock.append(titlePosts,postDetails);

                }

            });
    }
    userBlock.append(userCard,userPostsButton,postsBlock);
    userCard.append(userId, userName, userUserName, userEmail, userAddress, userPhone, userWebsite, userCompany);
    userAddress.append(userAddressStreet, userAddressSuite, userAddressCity, userAddressZipcode, userAddressGeo);
    userAddressGeo.append(userAddressGeoLat, userAddressGeoLng);
    userCompany.append(userCompanyName, userCompanyCatchPhrase, userCompanyBS);
}


