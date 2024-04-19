<template>
  <div class="container-about-me">
    <div class="prezent-info">
      <h2 class="myname center">{{ mydata.name }}</h2>
      <h5 class="myadress center">{{ mydata.adress }}</h5>
      <button class="btn-show" @click="toggleDetalis">Show Details</button>
      <ul v-if="detailsAreVisible">
        <li class="myphone center">
          <strong>Phone:&nbsp;</strong>{{ mydata.phone }}
        </li>
        <li class="myemail center">
          <strong>Email:&nbsp;</strong>{{ mydata.email }}
        </li>
      </ul>
    </div>
    <div class="info-career">
      <p>
        &emsp;I am a versatile professional with experience both as a trainer in
        coding and as an Accounting Assistant. In my role as a trainer, I
        instructed children in various programming languages, covering game
        development, website creation, and Python/C++ programming, along with
        hands-on experience in Arduino. As an Accounting Assistant, I am adept
        at efficiently managing payroll for drivers, handling documentation,
        tracking expenses, and maintaining accurate financial records. With a
        strong focus on detail, organization, and commitment to ensuring
        employee satisfaction, I contribute to the smooth operation and overall
        success of the teams I work with.<br> &emsp; Additionally, I am passionate about
        technology and enjoy learning new skills and staying updated with the
        latest advancements in the field. What sets me apart from other
        candidates is my extensive experience in remote work and proficiency in
        various programming languages.<br> &emsp;Notably, I actively engaged in a
        collaborative project, where I practiced pair-programming alongside a
        seasoned professional. Throughout this endeavor, I adeptly utilized
        tools such as Slack, MySQL Workbench, and Gitlab, while also
        demonstrating my proficiency in Vue.js and Vuetify frameworks. This
        experience not only enhanced my technical skills but also provided
        invaluable lessons in version control, quality assurance, and the
        importance of writing efficient and concise code. Moreover, it afforded
        me the opportunity to navigate both independent work and collaborative
        team environments, further honing my adaptability and teamwork skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      mydata: {
        id: "cristi",
        name: "Florin Cristian Daian",
        phone: "+40744972766",
        email: "dfc.daian@gmail.com",
        adress: "Romania, Bihor, Mihai-Bravu, 339",
      },
    };
  },
  methods: {
    toggleDetalis() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style scoped>
div {
  color: #fff;
  width: 95rem;
}
.container-about-me {
  position: relative;
  top: 6rem;
  left: 22rem;
  width: auto;
}
.prezent-info{
  border: solid #fff;
}
.info-career{
  border: solid #fff;
  margin: 2.5rem 0rem;
}
p{
  display: flex;
  margin: 2rem 2rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  justify-content: flex-start;
}
.myname {
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* background-color: aqua;  */
}
.myadress {
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

button {
  position: relative;
  top: 60%;
  left: 46%;
  border: solid blue;
  /* transform: translate(-50%, -50%); */
}
.btn-show {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.myphone {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.myemail {
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
</style>
