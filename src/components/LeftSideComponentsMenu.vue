<template>
  <div class="leftsidemenu" >
    <img src="../assets/Cristi.jpg"/>
    <h2 class="skl center">Skills</h2>
    <ul class="ul-skl">
      <li class="li-skl center" v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
    <h2 class="lang center">Language</h2>
    <ul class="ul-lang">
      <li class="li-lang center" v-for="(lang, index) in languages" :key="index">{{ lang }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Vue.js",
        "JavaScript",
        "Python",
        "Django",
        "Version Control",
        "Flask",
        "HTML",
        "Css",
        "C++",
        "GIT",
        "Slack",
      ],
      languages:["Romanian","English"],
    };
  },
  
};
</script>

<style scoped>
.leftsidemenu{
  position: relative; /* facem containerul poziționat relativ */
  top: 4rem;
  left: 2rem;
  display: flex;
  width: 20rem;
  justify-content: center;
  background-color: #fff;
}

img {
  position: absolute;
  top: 1rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: contain;
}

.skl {
  color: #fff;
  position: absolute;
  top: 18rem;
} 
.ul-skl {
  position: absolute;
  top: 21.5rem;
  border: solid #fff;
}

.li-skl {
  color: #fff;
  margin: 1.5rem;
  font-size: 1.3rem;
}
.lang {
  color: #fff;
  position: absolute;
  top: 62rem;
}

.ul-lang {
  position: absolute;
  top: 65rem;
  border: solid #fff;

}

.li-lang{
  color: #fff;
  margin: 1rem 3rem; 
  font-size: 1.3rem;
}
</style>
