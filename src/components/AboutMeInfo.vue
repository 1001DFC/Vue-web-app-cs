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
      <h3>PROFILE INFO</h3>
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
        success of the teams I work with.<br />
        &emsp; Additionally, I am passionate about technology and enjoy learning
        new skills and staying updated with the latest advancements in the
        field. What sets me apart from other candidates is my extensive
        experience in remote work and proficiency in various programming
        languages.<br />
        &emsp;Notably, I actively engaged in a collaborative project, where I
        practiced pair-programming alongside a seasoned professional. Throughout
        this endeavor, I adeptly utilized tools such as Slack, MySQL Workbench,
        and Gitlab, while also demonstrating my proficiency in Vue.js and
        Vuetify frameworks. This experience not only enhanced my technical
        skills but also provided invaluable lessons in version control, quality
        assurance, and the importance of writing efficient and concise code.
        Moreover, it afforded me the opportunity to navigate both independent
        work and collaborative team environments, further honing my adaptability
        and teamwork skills.
      </p>
    </div>
    <div class="employment-history">
      <h3>EMPLOYMENT HISTORY</h3>
      <h4>Trainer at RoboCod -> Oct 2021-Aug 2023</h4>
      <p>
        &emsp;In my role as a trainer, I gained expertise in various programming
        and development areas. I instructed children in coding, where I covered
        a wide range of skills including: <br />
        &emsp;&emsp; • Game development using Construct3<br />&emsp;&emsp; •
        Website creation utilizing HTML, CSS, and JavaScript<br />
        &emsp;&emsp; • Proficiency in Python and C++<br />
        &emsp; &emsp;• Hands-on experience with Arduino for electronic component
        programming<br />
        &emsp;Through this experience, I honed my ability to effectively
        communicate complex technical concepts to learners of all ages while
        fostering their creativity and problem-solving skills.
      </p>
      <h4>Assistant accointat at Direct Logistics Corp -> Mar 2021-Present</h4>
      <p>
        In my current role as an Accounting Assistant, I have developed a strong
        skill set focused on payroll management and financial record-keeping. My
        responsibilities include:<br />&emsp;&emsp; • Efficient management of
        payroll for our drivers, ensuring timely and accurate compensation.<br />&emsp;&emsp;
        • Preparation and dispatch of necessary documentation related to payroll
        processing.<br />&emsp;&emsp; • Close tracking of expenses and
        meticulous maintenance of financial records.<br />&emsp;&emsp; •
        Dedication to ensuring prompt and accurate compensation for employees,
        contributing to the overall smooth operation and well-being of the
        team.<br />&emsp; Through this experience, I have honed my attention to
        detail, organizational abilities, and commitment to ensuring financial
        accuracy and employee satisfaction.
      </p>
    </div>
    <div class="education">
      <h3>EDUCATION</h3>
      <h4>
        &emsp;&emsp;• Master's degree: Advanced Mechatronics Systems, University of Oradea ->
        Oct 2023 - Present
      </h4>
      <h4>
        &emsp;&emsp;• Bachelor's degree: Mechatronics Engineer, University of Oradea -> Oct
        2019 - Jul 2023
      </h4>
      <h4>
        &emsp;&emsp;• High School Diploma: Mechatronics, High School Traian Vuia Oradea -> Sep
        2015 - July 2019
      </h4>
    </div>
    <div class="hobbies">
      <h3>HOBBIES</h3>
      <p>
        &emsp;Embracing a diverse range of hobbies is integral to my lifestyle. I am
        passionate about reading, 3D modeling, engaging in sports and physical
        activities, trying new things, and playing video games. Additionally, I
        thoroughly enjoy the enriching experiences of traveling, taking
        leisurely walks, immersing myself in nature, and experimenting with
        cutting-edge technologies.
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
.prezent-info {
  border: solid #fff;
}
.info-career {
  border: solid #fff;
  margin: 2.5rem 0rem;
}
.employment-history {
  border: solid #fff;
  margin: 2.5rem 0rem;
}
.education{
  border: solid #fff;
  margin: 2.5rem 0rem;
}
.hobbies{
  border: solid #fff;
  margin: 2.5rem 0rem;
}
p {
  display: flex;
  margin: 2rem 2rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  justify-content: flex-start;
}
h3 {
  display: flex;
  margin: 2rem 2.5rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  justify-content: flex-start;
}
h4 {
  display: flex;
  margin: 1rem 1rem;
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
