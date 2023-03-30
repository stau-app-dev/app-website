<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <TeamGrid class="pt-36" :teams="teams" />
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Team from '@/types/team';

export default Vue.extend({
  name: 'TeamPage',
  data() {
    return {
      teams: [
        {
          year: '2022-2023',
          members: [
            {
              name: 'Tate Chin',
              position: 'Flutter Developer',
              image: 'tate_chin.jpg',
              bio: 'Tate is an aspiring mathematician who is planning to study pure math at the University of Toronto. His hobbies include making electronics, programming, and taking care of cats.',
            },

            {
              name: 'Soheil Rajabali',
              position: 'Backend Developer',
              image: 'soheil_rajabali.jpg',
              bio: 'Soheil is very interested in robotics and engineering. He takes advantage of every opportunity as a SHAD alumni and an FTC competitor. He wishes to attend a mechatronics engineering program.',
            },

            {
              name: 'Tyler Guo',
              position: 'Flutter Developer',
              image: 'tyler_guo.jpg',
              bio: 'Tyler is a passionate computer programmer. He is aiming to study computer science or software engineering at the University of Waterloo. His hobbies include playing chess and piano.',
            },

            {
              name: 'Martin Sit',
              position: 'Project Manager',
              image: 'martin_sit.jpg',
              bio: 'Martin wishes to pursue a career in the STEM fields where he can leverage his passion for technology to solve real-world problems and improve people’s lives. He aims to one day build a revolutionary technology-focused business that could change the world.',
            },

            {
              name: 'Nicholas Yeung',
              position: 'UX/UI Designer',
              image: 'The_GOAT.jpg',
              bio: 'Nick is an avid cyclist and has a love for all things food and hockey. As an admirer of product design, and urban planning, Nick hopes to go into either of those fields. In the future Nick plans to pursue cycling competitively.',
            },

            {
              name: 'Brian Li',
              position: 'Web Developer',
              image: 'brian_li.jpg',
              bio: 'After multiple reconsiderations in his life decisions, Brian is STILL an aspiring programmer who wishes to shape the future through his innovations. Branching his interests into engineering, Brian wishes to pursue Computer or Software Engineering for his career.',
            },
          ],
        },
        {
          year: '2021-2022',
          members: [
            {
              name: 'Tate Chin',
              position: 'Flutter Developer',
              image: 'tate_chin.jpg',
              bio: 'Tate is an aspiring mathematician who is planning to study pure math at the University of Toronto. His hobbies include making electronics, programming, and taking care of cats.',
            },
            {
              name: 'Andre Giardina',
              position: 'UI/UX Designer',
              image: 'andre_giardina.jpg',
              bio: 'Andre is one of the graphic designers here on the team with a passion in business and interest in the foreign exchange market. His dream is to work in luxury real estate in the Southern United States, while adding a creative touch to his career.',
            },
            {
              name: 'Tyler Guo',
              position: 'Flutter Developer',
              image: 'tyler_guo.jpg',
              bio: 'Tyler is a passionate computer programmer. He is aiming to study computer science or software engineering at the University of Waterloo. His hobbies include playing chess and piano.',
            },
            {
              name: 'Emily Kim',
              position: 'Project Manager',
              image: 'emily_kim.jpg',
              bio: 'Emily is a student aspiring to work in the tech and business field. She takes advantage of every experiential learning opportunity as a SHAD and BETA Camp alumni. You will see her in the future purchasing Snapchat so that she and her friends can change their usernames.',
            },
            {
              name: 'Leo Li',
              position: 'Backend Developer',
              image: 'leo_li.jpg',
              bio: 'Leo is extremely interested in biology and robotics. He hopes to go to McMaster to focus on biomedical engineering and wishes to one day create his own app.',
            },
            {
              name: 'Brian Li',
              position: 'Backend Developer',
              image: 'brian_li.jpg',
              bio: 'Brian is an aspiring programmer who wishes to expand his knowledge in the world of coding and programming. Although he has no idea what University to attend, he wishes to continue studying computer science in the future.',
            },
            {
              name: 'Kenny Miu',
              position:
                'Head Flutter Developer & Head Backend Developer & Web Developer',
              image: 'kenny_miu.jpg',
              bio: 'For some reason, he decided to come back and help out despite having a both full-time job and a part-time job. Currently, he is a Nanotechnology Engineering student currently attending the University of Waterloo. He just finished his fourth coop at Applyboard as a Full-Stack Developer and will enter third year in May 2022.',
            },
            {
              name: 'Rosi Qu',
              position: 'Web Developer',
              image: 'rosi_qu.jpg',
              bio: 'Zyaire is a passinate proprammer who loves learn new skills. She loves math, physics and computer science, so she wants to become a professional programmer or a software engineer in the future. Her dream school is Universiy of Waterloo, but if Waterloo does not love her, University of Toronto is also a good choice for her.',
            },
            {
              name: 'Martin Sit',
              position: 'Web Developer & Flutter Developer',
              image: 'martin_sit.jpg',
              bio: 'Martin wishes to pursue a career in the STEM fields where he can leverage his passion for technology to solve real-world problems and improve people’s lives. He aims to one day build a revolutionary technology-focused business that could change the world.',
            },
            {
              name: 'Louis Sun',
              position: 'Web Developer',
              image: 'louis_sun.jpg',
              bio: 'Louis is an aspiring and passionate programmer who wishes to study computer science or software engineering at the University of Waterloo. He enjoys doing math contests, solving competitive programming problems, and playing badminton.',
            },
            {
              name: 'Nicholas Yeung',
              position: 'Head UX/UI Designer',
              image: 'nicholas_yeung.jpg',
              bio: 'Nick is an avid cyclist and has a love for all things food and hockey. As an admirer of product design, and urban planning, Nick hopes to go into either of those fields. In the future Nick plans to pursue cycling competitively.',
            },
          ],
        },
        {
          year: '2020-2021',
          members: [
            {
              name: 'Kevin Basta',
              position: 'Backend Developer',
              image: 'kevin_basta.jpg',
              bio: 'Kevin is an aspiring software engineer and filmmaker. He is very interested in programming, videography, and classical guitar. He is actively developing his programming skills.',
            },
            {
              name: 'Tate Chin',
              position: 'Android Developer',
              image: 'tate_chin.jpg',
              bio: 'Tate has a strong interest in mathematics and wants to make it his career. His goal is to do research and pursue what makes him happy. Tate also loves to play the piano and clarinet.',
            },
            {
              name: 'Tyler Guo',
              position: 'Android Developer',
              image: 'tyler_guo.jpg',
              bio: "Tyler is a passionate young programmer and one of St.A's app's android developers. He enjoys making useless discord bots and minecraft plugins in his spare time.",
            },
            {
              name: 'Tiffany Lee',
              position: 'Android Developer',
              image: 'tiffany_lee.jpg',
              bio: 'Tiffany has shown an interest in computer science and artificial intelligence since the age of ten. In the future, she hopes to study data science or engineering and wants to encourage other young girls to do the same.',
            },
            {
              name: 'Leo Li',
              position: 'Backend Developer',
              image: 'leo_li.jpg',
              bio: 'With a strong love for biology, arts, and engineering, Leo is a determined teenager, trying to pursue the career of biomedical engineering. He is constantly trying join numerous school teams and attempting different contests.',
            },
            {
              name: 'Sam Liu',
              position: 'iOS Developer',
              image: 'sam_liu.jpg',
              bio: 'Sam is a curious and opportunistic individual who loves to explore new things. He likes math, science, and technology, and wants to pursue a university degree in one of those fields at the University of Waterloo. Sam has many other hobbies, including basketball, guitar, and chess, among others.',
            },
            {
              name: 'Matthew Morelli',
              position: 'Web Developer',
              image: 'matthew_morelli.jpg',
              bio: 'Matthew is an aspiring computer science student. He earned the Bronze Duke of Edinburgh Award in Grade 9, and his interests are in programming, and he hopes to do that in the future.',
            },
            {
              name: 'Elaiza Palaypay',
              position: 'Project Manager',
              image: 'elaiza_palaypay.jpg',
              bio: 'Elaiza is an aspiring business leader and CPA who is interested in the advancements of technology in international businesses and markets. She is involved in many school clubs and is enthusiastic about new learning opportunities. Elaiza hopes to, one day, successfully open her own business that focuses on bringing people together through an easier and innovative way.',
            },
            {
              name: 'Louis Sun',
              position: 'Project Manager',
              image: 'louis_sun.jpg',
              bio: 'Louis has a strong interest in computer programming. He hopes to make the Canadian Computing Olympiad and wishes to attend the University of Waterloo to study computer science.',
            },
            {
              name: 'Nicholas Yeung',
              position: 'UX/UI Designer',
              image: 'nicholas_yeung.jpg',
              bio: 'Nicholas has a great passion for product and UX design. He enjoys surfing the web, scrolling through phone reviews, design blogs and mountain bike forums. In the future, Nick plans to go to university to study design, and become a UX designer.',
            },
          ],
        },
        {
          year: '2019-2020',
          members: [
            {
              name: 'Marcos Araujo Camacho',
              position: 'UI/UX Designer',
              image: 'marcos_araujo_camacho.jpg',
              bio: 'Marcos is an immigrant from Spain that moved to Canada in 2011. He has lived there with his family for nearly 8 years. He\'s had the privilege to be his elementary school "Tech Guy" and has worked with his brother on various projects including the St. A\'s App development.',
            },
            {
              name: 'Kevin Basta',
              position: 'Web Developer',
              image: 'kevin_basta.jpg',
              bio: 'Kevin is an aspiring software engineer and filmmaker. He is very interested in programming, videography, and classical guitar. He is actively developing his programming skills.',
            },
            {
              name: 'Susan Chen',
              position: 'iOS Developer',
              image: 'susan_chen.jpg',
              bio: 'Susan has competed and earned awards in a variety of competitions, from University of Waterloo math and science contests to the York University Tri-Sci Tourney. She is an aspiring chemical engineer and hopes to contribute towards creating a miracle product.',
            },
            {
              name: 'Ryan Chiu',
              position: 'Android Developer',
              image: 'ryan_chiu.jpg',
              bio: 'Ryan is a young teenager aspiring to one day become a successful entrepreneur with a background of either engineering or computer science.',
            },
            {
              name: 'Ryan Chong-Kit',
              position: 'Android Developer',
              image: 'ryan_chong_kit.jpg',
              bio: 'Aspiring Computer Science student in grade 12.',
            },
            {
              name: 'Emma Florentino',
              position: 'Project Manager',
              image: 'emma_florentino.jpg',
              bio: "Emma is fascinated with technology and it's relation to the world of marketing. She is the marketing trainer for her school’s DECA chapter and aspires to work in a STEM related field. Her goal is to encourage other young girls to pursue their passions!",
            },
            {
              name: 'Andre Giardina',
              position: 'UI/UX Designer',
              image: 'andre_giardina.jpg',
              bio: 'Andre was valedictorian and achieved the "Technology Award" in grade 8. He aspires to become a creative graphic designer/marketer. He has been skiing for 12 years and racing for 4. Somehow he can eat 5 meals a day and still be hungry.',
            },
            {
              name: 'Ernestine Ho',
              position: 'Android Developer',
              image: 'ernestine_ho.jpg',
              bio: 'Ernestine actively codes in her free time. In the future, she aspires to become a software engineer and aims to work around the world. She can sleep anywhere anytime even after drinking coffee.',
            },
            {
              name: 'Emma Hosey',
              position: 'UI/UX Designer',
              image: 'emma_hosey.jpg',
              bio: 'Emma has a strong interest in visual arts for as long as she can remember. She enjoys drawing digitally and on paper. In the future, she aspires to become a graphic designer.',
            },
            {
              name: 'Matthew Morelli',
              position: 'Backend Developer',
              image: 'matthew_morelli.jpg',
              bio: 'Matthew is an aspiring computer science student. He earned the Bronze Duke of Edinburgh Award in Grade 9, and his interests are in programming, and he hopes to do that in the future.',
            },
            {
              name: 'Jordon Ng',
              position: 'UI/UX Designer',
              image: 'jordon_ng.jpg',
              bio: 'As an avid lover of art and architecture, Jordan has dreamed of becoming an architect since he was four years old. He is currently in his senior year at St. Augustine CHS and plans on fulfilling his childhood dream after school.',
            },
            {
              name: 'Mehul Pillai',
              position: 'Android Developer',
              image: 'mehul_pillai.jpg',
              bio: 'Mehul hopes to attend a computer science program and work as a developer. He loves writing code and playing chem sketch.',
            },
            {
              name: 'John Tedesco',
              position: 'Backend Developer',
              image: 'john_tedesco.jpg',
              bio: 'John began programming 3 years ago with the desire of making. He wishes to attend Waterloo university to study computer science in order to later specialize in security or system design.',
            },
            {
              name: 'Jonathan Woo',
              position: 'iOS Developer',
              image: 'jonathan_woo.jpg',
              bio: 'Jonathan Woo is an iOS developer of the St. Augustine CHS app. After high school, he hopes to attend a university in USA for engineering or the University of Waterloo for the Software Engineering program.',
            },
          ],
        },
        {
          year: '2018-2019',
          members: [
            {
              name: 'Pablo Araujo Camacho',
              position: 'Android Developer & Web Developer',
              image: 'pablo_araujo_camacho.jpg',
              bio: "Pablo has been coding since he was nine years old. He is an aspiring computer science student and wants to be a software developer for Google in the future. He is a follower of God and is Imagine Dragons' biggest fan.",
            },
            {
              name: 'Charmaine Chun',
              position: 'Marketing',
              image: 'charmaine_chun.jpg',
              bio: 'Charmaine actively competes in engineering events and owns an online woodworking business. In the future, she aspires to become a mechanical engineer and designer. She thinks of her best ideas when she naps.',
            },
            {
              name: 'Kenny Miu',
              position: 'iOS Developer & Backend Developer',
              image: 'kenny_miu.jpg',
              bio: "Kenny participated in Waterloo's Catalyst Summer Program and is a FIRST Robotics mentor. In the future, he wants to study computer science and aspires to work in Silicon Valley in the future. He can sleep through absolutely anything.",
            },
            {
              name: 'Amanda Morelli',
              position: 'Co-Founder',
              image: 'amanda_morelli.jpg',
              bio: "Amanda is a former high school research intern at Sunnybrook Research Institute's Focused Ultrasound Lab, and is the president of her school’s HOSA chapter. She is an aspiring biomedical engineer and entrepreneur.",
            },
          ],
        },
      ] as Array<Team>,
    };
  },
});
</script>
