// 3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   3.1. Pilnas vardas.
//   3.2. Vartotojo vardas / nick'as.
//   3.3. El. paštas.
//   3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps. Kol kas naudoti bet kokią Google Map vietovę.
//   3.5. Telefono numeris.
//   3.6. Internetinio puslapio adresas.
//   3.7. Įmonės, kurioje dirba, pavadinimas.
// 4. Šiame puslapyje turės būti atvaizduojama:
//   4.1. Visi vartotojo parašyti įrašai (posts). Post'ų įrašuose nereikia atvaizduoti komentarų. Kiekvienas post'as turi turėti nuorodą.


let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');
fetch('https://jsonplaceholder.typicode.com/users/' + userId)
  .then(res => res.json())
  .then(user => {
    let userInfoElement = document.querySelector('#user-info');
    let name = user.name;
    let username = user.username;
    let email = user.email;
    let address = user.address;
    let fullAddress = `${address.street} ${address.suite}, ${address.city} (zip: ${address.zipcode}).`;
    let mapsLink = `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`;
    let phone = user.phone;
    let website = user.website;
    let companyName = user.company.name;
    userInfoElement.innerHTML = `<ul>
                                  <li><strong>Name:</strong> ${name}</li>
                                  <li><strong>Username:</strong> ${username}</li>
                                  <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                                  <li><strong>Address:</strong> <a href="${mapsLink}" target="_blank">${fullAddress}</a></li>
                                  <li><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></li>
                                  <li><strong>Website:</strong> <a href="https://${website}" target="_blank">${website}</a></li>
                                  <li><strong>Company Name:</strong> ${companyName}</li>
                                 </ul>`;
  })
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then(res => res.json())
  .then(posts => {
    let userPosts = document.querySelector('#user-posts');
    let postsListTitle = document.createElement('h2');
    postsListTitle.textContent = 'User Posts:';
    let postsList = document.createElement('ul');
    userPosts.append(postsListTitle, postsList);
    posts.map(post => {
      let postItem = document.createElement('li');
      postItem.innerHTML = `<a href="./post.html?post_id=${post.id}">${post.title}</a>`;
      postsList.append(postItem);
    })
  })