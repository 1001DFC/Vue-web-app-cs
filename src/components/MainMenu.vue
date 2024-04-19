<template>
  <div class="container">
    <div><a href="AboutMeInfo.vue" class="logo">DFC</a></div>
    <nav class="navbar">
      <ul>
        <li><a href="AboutMeInfo.vue" class="navbar-link">Home</a></li>
        <li><a href="AboutWebSite.vue" class="navbar-link">About WebSite</a></li>
        <li><a class="navbar-link">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between; /* aliniere elemente la capetele containerului */
  align-items: center; /* aliniere verticală pe axa secundară */
  position: fixed; /* meniul să fie fix pe partea de sus a paginii */
  top: 0; /* distanța față de partea de sus a paginii */
  left: 1rem; /* distanța față de partea stângă a paginii */
  width: 117rem; /* meniul să aibă lățimea completă a paginii */
  padding: 10px 20px; /* margini interioare pentru spațiu suplimentar */
  /* background-color: aqua; */
}

.logo {
  text-decoration: none; /* eliminare sublinierea link-ului */
  font-size: 24px; /* mărime font logo */
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 0 0.3rem 0.5rem #000;
  margin-left: 2rem;
}


.navbar {
  display: flex;
}

.navbar ul {
  list-style-type: none; /* eliminare stiluri implicite ale listei */
  margin: 0; /* eliminare margini implicite ale listei */
  padding: 0; /* eliminare padding-uri implicite ale listei */
  display: flex; /* afișare elemente într-o linie */
}

.navbar li {
  margin-left: 20px; /* spațiere între elementele meniului */
}

.navbar li a {
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 16px;
  color: #fff;
  text-decoration: none;
  margin: 0 2.5rem;
  text-shadow: 0 0.3rem 0.5rem #000;
}

.navbar li a:hover {
  background-color: blue;
}


</style>
