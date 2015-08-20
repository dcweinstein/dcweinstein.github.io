$(document).ready(function() {
  console.log("ready");

  var scrollTop;
  var scrollLeft;
  var top;
  var left;
  var width;
  var height;


  // Set modal content
  $('#snook').click(function() {
    $('.modal-member-name').html('Michael Snook');
    $('.modal-position').html('Vice Speaker of the Senate');
    $('.email').html('snook@iastate.edu');
    $('.major').html('Major: Computer Engineering');
    $('.hometown').html('Hometown: Cedar Rapids, Iowa');
    $('.sgYears').html('Years in Student Government: 2');
    $('.bio').html('Michael Snook is a sophomore in Computer Engineering with an expected graduation in 2017. He is from Cedar Rapids, Iowa and was the Treasurer of Freshmen Council during his freshman year at Iowa State. He also served as a Freshman Honors Program Leader his sophomore year. He currently serves as the Vice President of the Memorial Union Board of Directors and as the Chair of the Memorial Union Student Advisory Committee. Within Student Government, Michael represents the Engineering Constituency and serves as the Vice Speaker of the Senate. Michael has served on both the Finance and Rules Committees. His sophomore year, he wrote a bill in collaboration with the Finance Director that allowed Student Government to allocate an additional $166,000 to student organizations. He is very willing to meet with students to answer questions or collaborate on projects.');
    $('.goalOne').html('1. Improve collaboration between the students and Student Government.');
    $('.goalTwo').html('2. Ensure the efficient operations of the Student Government Senate.');
    $('.goalThree').html('3. Improve the Student Experience.');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Snook_Michael_ViceSpeaker.jpg')",
      "background-size": "cover"
    });
  });

  $('#dgavin').click(function() {
    $('.modal-member-name').html('Dan Gavin');
    $('.modal-position').html('Director of New Student Outreach');
    $('.email').html('dgavin@iastate.edu');
    $('.major').html('Major: History, Secondary Education');
    $('.hometown').html('Hometown: Albany, NY');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Expected graduation is Fall 2017. My freshmen year, I lived in Wilson Hall (Tower Power!) and served as my floor’s Treasurer. My second semester, I began my position as a Cyclone Aide in the Office of New Student Programs. I found that I had a passion for new students and their transition experience to Iowa State. In the fall of my sophomore year, I received the position of Cyclone Aide Adviser. I am part of a team of Advisers who are helping to prepare the new class of Cyclone Aides for Orientation and Destination Iowa State. I’m excited to get the new school year started in the fall with Destination Iowa State and hear from new students what they want Student Government to do for them to make their experience better');
    $('.goalOne').html('1. Kickoff the year with Destination Iowa State and get great ideas for events or changes that can make the new student experience better');
    $('.goalTwo').html('2. Work closely with IRHA to form an open community with new students with outreach throughout the school year');
    $('.goalThree').html('3. Keep constant outreach throughout the school year and an open inbox so that students can voice concerns and excitement about their experience and any ideas that they have');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Gavin_Daniel.png')",
      "background-size": "cover"
    });
  });

  $('#hsbbas').click(function() {
    $('.modal-member-name').html('Hamad Abbas');
    $('.modal-position').html('Finance Director');
    $('.email').html('hsbbas@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#rbbarnes').click(function() {
    $('.modal-member-name').html('Rachael Barnes');
    $('.modal-position').html('Associate Justice');
    $('.email').html('rbbarnes@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#ztbarnes').click(function() {
    $('.modal-member-name').html('Zaak Barnes');
    $('.modal-position').html('Director of Government Relations');
    $('.email').html('ztbarnes@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Barnes_Zaackary_DirectorofGovernmentRelations.png')",
      "background-size": "cover"
    });
  });

  $('#abbehnke').click(function() {
    $('.modal-member-name').html('Tony Behnke');
    $('.modal-position').html('Co-Director of Student Affairs');
    $('.email').html('abbehnke@iastate.edu');
    $('.major').html('Major: Agricultural Communications');
    $('.hometown').html('Hometown: Alden, Minnesota');
    $('.sgYears').html('Years in Student Government: 2');
    $('.bio').html('I am a small town guy who was looking for a change and bigger view of the world so I decided to come to Iowa State, upgrading from a High School graduating class of 24 to a freshman class at Iowa State of over 6,000! The change was scary at first but once I began getting involved with community service and student government, this big town started having that small town feel in no time. I am very passionate about people around me and caring for others and their ideas. I am always looking to meet someone new and learn about them and share interests. I like to think I am very outgoing, dedicated, and easy to talk to!');
    $('.goalOne').html('1. Keep the BikeShare program moving along smoothly');
    $('.goalTwo').html('2. Create new infastructure supporting Biking and Walkers along Bissel Dr.');
    $('.goalThree').html('<p>3. Improving recycling on campus</p><p>4. Creating a more educational biking website.</p>');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Behnke_Tony_CodirectorStudentAffairs.png')",
      "background-size": "cover"
    });
  });

  $('#bergfeld').click(function() {
    $('.modal-member-name').html('Nick Bergfeld');
    $('.modal-position').html('Engineering Senator');
    $('.email').html('bergfeld@iastate.edu');
    $('.major').html('Major: Industrial and Manufacturing Systems Engineering');
    $('.hometown').html('Hometown: Winthrop, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('');
    $('.goalOne').html('Goals would include, Bridging the gap between Students and Student Government. Also talking to Engineering Students about possible issues they have on campus.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Bergfeld_Nick_EngineerSenator.png')",
      "background-size": "cover"
    });
  });

  $('#bbormann').click(function() {
    $('.modal-member-name').html('Brenna Bormann');
    $('.modal-position').html('Associate Justice');
    $('.email').html('bbormann@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#dpb').click(function() {
    $('.modal-member-name').html('Dan Breitbarth');
    $('.modal-position').html('President');
    $('.email').html('dpb@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('Dan Breitbarth is a Senior in Business Economics and Management with an expected graduation in 2016. He is from Saylorville, Iowa and has served as President of Willow Residence Hall, a member of IRHA, the Iowa Statesmen, Business Council, and as Vice-Speaker of Student Government Senate from 2014-2015. He is also a member of numerous University Committees and is always looking for ways to improve the student experience. Please feel free to contact Dan via email at dpb@iastate.edu or call him at 515-294-9660. ');
    $('.goalOne').html('1. Identify and solve issues that current, future, and former students of Iowa State face.');
    $('.goalTwo').html('2. Serve as a good steward of the students needs and requests at state and national functions.');
    $('.goalThree').html('3. Collaborate with university employees and administration to continue the positive progression of the university and it’s students. ');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Breitbarth_Daniel_Pres0.jpg')",
      "background-size": "cover"
    });
  });

  $('#cabutton').click(function() {
    $('.modal-member-name').html('Cole Button');
    $('.modal-position').html('IRHA Senator');
    $('.email').html('cabutton@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Button_Cole.png')",
      "background-size": "cover"
    });
  });

  $('#edchitty').click(function() {
    $('.modal-member-name').html('Elizabeth Chitty');
    $('.modal-position').html('SUV Senator');
    $('.email').html('edchitty@iastate.edu');
    $('.major').html('Major: Animal Science(Pre-Vet) with a minor in Agronomy');
    $('.hometown').html('Hometown: Muscatine, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Elizabeth Chitty is a senior in Animal Science with an Agronomy minor and a Pre-Vet option. She expects to graduate in the spring of 2016. She is a South Carolina native but moved to Muscatine, Iowa during high school.  Elizabeth serves as the social chair of Water Polo Club, the treasurer of Conservation Club, and is an active member of Pre-Vet Club and Students Helping Rescue Animals. She is also a volunteer at the ISU College of Veterinary Medicine\'s Wildlife Care Clinic and the Story County Animal Shelter.');
    $('.goalOne').html('1. Elizabeth\'s main goal for the year is to improve student housing/residence experience focusing on Schilletter and University Village.');
    $('.goalTwo').html('2. She also plans to keep Iowa State beautiful by promoting recycling and lowering the amount of litter around campus.');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Chitty_Danielle.png')",
      "background-size": "cover"
    });
  });

  $('#jaclark').click(function() {
    $('.modal-member-name').html('Jeremy Clark');
    $('.modal-position').html('UROC Senator');
    $('.email').html('jaclark@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Clark_Jeremy.png')",
      "background-size": "cover"
    });
  });

  $('#scortex').click(function() {
    $('.modal-member-name').html('Sarah Cortez');
    $('.modal-position').html('Director of Visual Media');
    $('.email').html('scortez@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Cortez_Sarah.png')",
      "background-size": "cover"
    });
  });

  $('#bcraw').click(function() {
    $('.modal-member-name').html('Ben Crawford');
    $('.modal-position').html('Engineering Senator');
    $('.email').html('bcraw@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Crawford_Ben_SpeakerofSenate.jpg')",
      "background-size": "cover"
    });
  });

  $('#edecious').click(function() {
    $('.modal-member-name').html('Elijah Decious');
    $('.modal-position').html('Campustown Senator');
    $('.email').html('edecious@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#hdeer98').click(function() {
    $('.modal-member-name').html('Hassan Deer');
    $('.modal-position').html('UROC Senator');
    $('.email').html('hdeer98@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Deer_Hassan.png')",
      "background-size": "cover"
    });
  });

  $('#akolxdok').click(function() {
    $('.modal-member-name').html('Akol Dok');
    $('.modal-position').html('Associate Justice');
    $('.email').html('akolxdok@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#mkdolch').click(function() {
    $('.modal-member-name').html('Marsahll Dolch');
    $('.modal-position').html('Student Government Social Chair');
    $('.email').html('mkdolch@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#rldunn').click(function() {
    $('.modal-member-name').html('Robert Dunn');
    $('.modal-position').html('Business Senator');
    $('.email').html('rldunn@iastate.edu');
    $('.major').html('Major: Accounting');
    $('.hometown').html('Hometown: Urbana, Illinois');
    $('.sgYears').html('Years in Student Government');
    $('.bio').html('I hail from Urbana-Champaign Illinois, home of the University of Illinois at Urbana-Champaign and grew up a die hard Fighting Illini fan! After graduating high school in 2000, I moved to Southern California to experience a new environment and worked my way through my first bachelors degree in Political Science from California State University San Bernardino. After returning home to Urbana, personal circumstances would land me in Iowa in 2012. It was after moving to Iowa that I was given an opportunity to return to school and pursue a 2nd degree in Accounting. So, I am now a Fighting Illini and a Cyclone at once! I hope to graduate in December of 2016 and will be working to sit for the CPA exam and work for a public accounting firm.');
    $('.goalOne').html('<p>My goals as a Senator are to fight for students rights. In particular, our sacred 1st Amendment right are being sacrificed in the name of "safety", "convenience", and "civility." In particular, I want to start discussion on the eventual removal of "the free speech zone." Iowa State University is a public university hence the entire university should be a "free speech zone." Not just a tiny area in front of the Library.</p><p>I also want to add viewpoint to the campus anti discrimination policy. Too often, unpopular views are targeted and marginalized on campus by faculty, administrators, and student leaders. Students, staff, and faculty should not have to fear negative reprisals for expressing their views. Its time to add ideological viewpoints to the protected class status on campus.</p><p>Finally, as a non traditional student, I want to be a voice for the non traditional community on Senate.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Dunn_Robert.png')",
      "background-size": "cover"
    });
  });

  $('#cfaunce').click(function() {
    $('.modal-member-name').html('Charles Faunce');
    $('.modal-position').html('Engineering Senator');
    $('.email').html('cfaunce@iastate.edu');
    $('.major').html('Major: Chemical Engineering');
    $('.hometown').html('Hometown: North Aurora, IL');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('<p>Charlie Faunce is a junior in Chemical Engineering at Iowa State University and expected to graduate in May 2017.  He is from North Aurora Illinois, a suburb of Chicago, where he attended Marmion Academy an all-boys, catholic, military, and college prep high school.  He was a company commander for the JROTC program and also captain of the football team.  Charlie currently works for Iowa State Recreation Services as a referee for intramural sports including Football, basketball, dodgeball, and volleyball.</p><br><p>Charlie was elected in February as a Senator for the College of Engineering when a vacancy appeared.  He was then reelected in the month of April for a new term as Engineering Senator.  During his first year on Student Governemtn he was elected onto the Public Relations Committee where he will be working to help get students more interested in Student Government and inform students of different events happening around campus.</p>');
    $('.goalOne').html('1. Help students understand what Student Government does for them');
    $('.goalTwo').html('2. Work on projects to improve student life at Iowa State');
    $('.goalThree').html('3. Make every students adventure at Iowa State more enjoyable');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Faunce_Charles.png')",
      "background-size": "cover"
    });
  });

  $('#bgarrido').click(function() {
    $('.modal-member-name').html('Brian Garrido');
    $('.modal-position').html('Associate Justice');
    $('.email').html('bgarrido@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#bcgaura').click(function() {
    $('.modal-member-name').html('Brittany Gaura');
    $('.modal-position').html('LAS Senator');
    $('.email').html('bcgaura@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Gaura_Brittany.png')",
      "background-size": "cover"
    });
  });

  $('#farouq').click(function() {
    $('.modal-member-name').html('Farouq Ghandour');
    $('.modal-position').html('Director of Philanthropic Outreach');
    $('.email').html('');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#apg').click(function() {
    $('.modal-member-name').html('Adam Goldberg');
    $('.modal-position').html('Design Senator');
    $('.email').html('apg@iastate.edu');
    $('.major').html('Major: Industrial Design');
    $('.hometown').html('Hometown: Cedar Rapids, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Adam Parker Goldberg is an enthusiastic Cyclone at Iowa State University. Along with serving the College of Design on Student Government Senate, Adam is a member of the Greek Community, the Honors Program, Iowa State Dance Marathon, and is a Cyclone Life Blogger and Student Admissions Representative.');
    $('.goalOne').html('Adam looks forward to discovering the interworking of Student Government, experiencing challenging discourse, learning about more clubs, organizations, and individuals at Iowa State University, and serving his peers.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Goldberg_Adam.png')",
      "background-size": "cover"
    });
  });

  $('#plgray').click(function() {
    $('.modal-member-name').html('Paxton Gray');
    $('.modal-position').html('IRHA Senator');
    $('.email').html('plgray@iastate.edu');
    $('.major').html('Major: Environmental Science');
    $('.hometown').html('Hometown: Adams, Minnesota');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('I am a freshman from a small-town in Minnesota. I am majoring in environmental science and am passionate about sustainability. This is my first year in student government, and I look forward to connecting with, and serving the students at Iowa State.');
    $('.goalOne').html('1. Increase Sustainability on Campus');
    $('.goalTwo').html('2. Improve Residence Hall Experiene');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Gray_Paxton.png')",
      "background-size": "cover"
    });
  });

  $('#guenther').click(function() {
    $('.modal-member-name').html('Adam Guenther');
    $('.modal-position').html('UROC Senator');
    $('.email').html('guenther@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#loghalv').click(function() {
    $('.modal-member-name').html('Logan Halverson');
    $('.modal-position').html('Chief of Staff');
    $('.email').html('loghalv@iastate.edu');
    $('.major').html('Major: Forestry');
    $('.hometown').html('Hometown: Independence, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Logan Halverson is a Junior in Forestry with an emphasis in renewable materials and a minor in Industrial Technology. He is from Independence, Iowa and is an active member in the Forestry Club, Xi Sigma Pi Forestry honor society, and the Swing Dance Club. He spent one semester as the Forestry Club Representative in the College of Agriculture and Life Sciences Student Council. In his free time, Logan enjoys spending time outdoors, having adventures, and staying fit.');
    $('.goalOne').html('1. Maintain proper and effective communication between all members of the cabinet and the President and Vice President.');
    $('.goalTwo').html('2. Provide all necessary assistance to the President and Vice President to ensure they have what they need to effectively do their jobs.');
    $('.goalThree').html('3. Effectively create a strong team dynamic within the Cabinet by resolving individual issue, motivating team members, and by providing assistance to those who are in need.');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#mhuebsch').click(function() {
    $('.modal-member-name').html('Matthew Huebsch');
    $('.modal-position').html('URCO Senator');
    $('.email').html('mhuebsch@iastate.edu');
    $('.major').html('Major: Electrical Engineering');
    $('.hometown').html('Hometown: Osage, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('I worked construction for a few years after high school. Then joined the Marine Corps as an active duty Rifleman.  After the Marine Corps I went to attended NIACC (North Iowa Area Community College) for a few years.  While there I took general education courses. I transferred to ISU in the fall of 2014 to obtain my Electrical Engineering degree.');
    $('.goalOne').html('My goals for the next year are to learn as much as possible in all my classes and learn how to manage my time in order to be a valuable asset to Iowa State University Student Government.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#jkersch').click(function() {
    $('.modal-member-name').html('Jane Kersch');
    $('.modal-position').html('URCO Senator');
    $('.email').html('jkersch@iastate.edu');
    $('.major').html('Major: Political Science');
    $('.hometown').html('Hometown: Dubuque, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Jane is a junior studying Political Science, Global Resource Systems, and Sustainability, representing off campus students. Over the last three years at Iowa State, she has been involved with the Committee on Lectures, Global Health and AIDS Coalition, United States Student Association, and several political campaigns.');
    $('.goalOne').html('1. Work to create a partnership between Student Government and the United States Student Association, the nation\'s oldest, largest, and most inclusive student led organization, which advocates for student issues at the state and federal level.');
    $('.goalTwo').html('2. Address critical issues facing Iowa State students, specifically our massive student debt problem and rising tuition, sexual assault, and unsustainable environmental practices.');
    $('.goalThree').html('3. Be a supportive ally to marginalized and oppressed students, especially queer identifying students, students of color, international students, women, disabled students, veterans, non-traditional students, and any other student who feels that their needs are not being met or feel unsafe at our university.');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Kersch_Jane.png')",
      "background-size": "cover"
    });
  });

  $('#jklodt').click(function() {
    $('.modal-member-name').html('Jennifer Klodt');
    $('.modal-position').html('Business Senator');
    $('.email').html('jklodt@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#jlackore').click(function() {
    $('.modal-member-name').html('Joshua Lackore');
    $('.modal-position').html('Frederikson Court Senator');
    $('.email').html('jlackore@iastate.edu');
    $('.major').html('Major: Mechanical Engineering');
    $('.hometown').html('Hometown: Osage, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Joshua Lackore is a farm kid from Osage, Ia. As being an undergraduate research assistant for 2 years, he have been working and collaborating with students. During this year, Josh will be on University Affairs Committee where he will be working on projects to improve student life on campus.');
    $('.goalOne').html('1. To be able to connect and hear what the community is in need of');
    $('.goalTwo').html('2. See physical change on campus');
    $('.goalThree').html('3. Serve the students');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Lackore_Joshua.png')",
      "background-size": "cover"
    });
  });

  $('#arlang').click(function() {
    $('.modal-member-name').html('Abbie Lang');
    $('.modal-position').html('UROC Senator');
    $('.email').html('arlang@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Lang_Abbie.png')",
      "background-size": "cover"
    });
  });

  $('#kleidahl').click(function() {
    $('.modal-member-name').html('Kathryn Leidahl');
    $('.modal-position').html('Panhellenic Senator');
    $('.email').html('kleidahl@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Leidahl_Kathryn.png')",
      "background-size": "cover"
    });
  });

  $('#lelovatt').click(function() {
    $('.modal-member-name').html('Bryony Lovatt');
    $('.modal-position').html('Co-Director of Student Affairs');
    $('.email').html('lelovatt@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Lovatt_Bryony.png')",
      "background-size": "cover"
    });
  });

  $('#marlenee').click(function() {
    $('.modal-member-name').html('Ian Marlenee');
    $('.modal-position').html('UROC Senator');
    $('.email').html('marlenee@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Marlenee_Ian.png')",
      "background-size": "cover"
    });
  });

  $('#tjm91').click(function() {
    $('.modal-member-name').html('Tyler McKnight');
    $('.modal-position').html('UROCSenator');
    $('.email').html('tjm91@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#georgem').click(function() {
    $('.modal-member-name').html('George Melookaran');
    $('.modal-position').html('Treasurer');
    $('.email').html('georgem@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Melookaran_George.png')",
      "background-size": "cover"
    });
  });

  $('#dmoore3').click(function() {
    $('.modal-member-name').html('David D. Moore III');
    $('.modal-position').html('Human Sciences Senator');
    $('.email').html('dmoore3@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Moore_David.png')",
      "background-size": "cover"
    });
  });

  $('#jmurguia').click(function() {
    $('.modal-member-name').html('Jazmin Murguia');
    $('.modal-position').html('Director of Student Diversity');
    $('.email').html('jmurguia@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Murguia_Jazmin.png')",
      "background-size": "cover"
    });
  });

  $('#pdmyers').click(function() {
    $('.modal-member-name').html('Peter Myers');
    $('.modal-position').html('Business Senator');
    $('.email').html('pdmyers@iastate.edu');
    $('.major').html('Major: Finance');
    $('.hometown').html('Hometown: Houston, TX');
    $('.sgYears').html('Years in Student Government: 3');
    $('.bio').html('Peter Myers is a junior majoring in finance and minoring in political science. Originally from Houston, Texas, Senator Myers is enjoying every aspect of being a Cyclone at Iowa State. In addition to serving as Business Senator, Myers also serves as an ISU Ambassador where he lobbies students’ opinions and concerns to Iowa legislators at the Capitol. He is also a member of Beta Gamma Sigma Business Honor Society and the University Honors Program, and was previously a member of Freshmen Council. ');
    $('.goalOne').html('1. Build a bridge between Business Students and Student Government to improve students’ experience both within the College of Business and Iowa State');
    $('.goalTwo').html('2. Reach out to as many business students as possible on issues/concerns as well as  legislation in the Student Government Senate by having face-to-face communication with constituents and being easily accessible');
    $('.goalThree').html('<p>3. Work with the Public Relations Committee to increase visibility/awareness, student engagement, and transparency</p><p>4. Work with the Public Relations Committee and Election Commission to increase voter turnout in Student Government elections</p><p>5. Continue efforts to implement a safe, reliable rideshare program in Ames</p><p>6. Work collectively with the student body and Student Government to create a campus-wide celebration that is student-driven and focused on Iowa State’s traditions</p><p>7. Work with the Director of Philanthropic Events to create a campus-wide philanthropy event</p>');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Myers_Peter.png')",
      "background-size": "cover"
    });
  });

  $('#pneid').click(function() {
    $('.modal-member-name').html('Parker Neid');
    $('.modal-position').html('Director of Sustainability');
    $('.email').html('pneid@iastate.edu');
    $('.major').html('Major: Management Information Systems');
    $('.hometown').html('Hometown: Columbus, Nebraska');
    $('.sgYears').html('Years in Student Government: 2');
    $('.bio').html('<p>Since the start of my life at ISU, I have been a part of the Honors program, the Green Umbrella, and Freshmen Council. The First Year Honors program was an excellent way to expand my education (including assisting in the publishing of a textbook!) and to meet students and staff on campus. As a member of the Green Umbrella, I helped host campus-wide events including National Campus Sustainability Day and Sustainapalooza. On Freshmen Council I served on the Social Justice committee and learned more than I would have ever imagined about ISU. I am also a Student Admissions Representative (STAR), Destination Iowa State team leader, and Cardinal Key inductee. I have traveled the world with fellow Cyclones to China, Wellington, Colorado, and Kansas City.</p><br><p>One of my highlights from my first year at Iowa State was traveling to Harvest Farms over Spring Break. Through the Alternative Breaks program, I visited a Christian addiction rehabilitation center on a farm in Wellington, Colorado. The experience was thought-provoking, educational, and inspirational to say the least. The mountains, Iowa State students, and stories were all incredible. It only increased my desire to study, intern, or serve abroad before graduation!</p>');
    $('.goalOne').html('One general overarching goal for next year is to expand recycling on campus.  This starts with the ability to recycle more items in more locations at ISU. Specifically working with the MU and ISU Dining. In addition, I look forward to interacting with the talented students and staff regarding the future of the bike sharing program. With proper planning, the program has potential for success on campus and in Ames. I look forward to working with Student Government Leaders, enthusiastic students, and talented staff!');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Neid_Parker.png')",
      "background-size": "cover"
    });
  });

  $('#atnguyen').click(function() {
    $('.modal-member-name').html('Andrew Nguyen');
    $('.modal-position').html('Director of Information Technology');
    $('.email').html('atnguyen@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Nguyen_Andrew.png')",
      "background-size": "cover"
    });
  });

  $('#drnygard').click(function() {
    $('.modal-member-name').html('Danielle Nygard');
    $('.modal-position').html('UROC Senator');
    $('.email').html('drnygard@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Nygard_Danielle.png')",
      "background-size": "cover"
    });
  });

  $('#pearson1').click(function() {
    $('.modal-member-name').html('Justin Pearson');
    $('.modal-position').html('Associate Justice');
    $('.email').html('pearson1@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#ctperez').click(function() {
    $('.modal-member-name').html('Chistorpher Perez');
    $('.modal-position').html('LAS Senator');
    $('.email').html('ctperez@iastate.edu');
    $('.major').html('Major: Political Science, German, and International Studies');
    $('.hometown').html('Hometown: Norwalk, Iowa');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('<p>Christopher Perez is a senior in Political Science, German, and International Studies with an expected graduation date in 2016. He is from Norwalk, Iowa and has served as the Vice President of Communications for his fraternity on campus. Chris is also involved with the Department of World Languages and Cultures and works as a Student Ambassador for the department.</p><br><p>This is Chris’ first term on Student Government and is apart of the Rules Committee and serves as a senator for LAS. Chris is interested in helping the diversity of Iowa State’s campus and making legislation and Student Government as a whole more transparent. Feel free to contact Chris whenever you have questions.</p>');
    $('.goalOne').html('Chris’ main goals for this year involve improving the attitude of students towards Student Government and biking around campus. Chris believes that much more can be done to help improve the way students get around via bikes. Another goal of his is to promote the positives of Student Government as a whole so people are more apt to enjoy coming to senate meetings and sit in the gallery.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#maneeshm').click(function() {
    $('.modal-member-name').html('Maneesh Pillai');
    $('.modal-position').html('Student Organization Financial Advocate');
    $('.email').html('maneeshm@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Pillai_Maneesh.png')",
      "background-size": "cover"
    });
  });

  $('#zdreece').click(function() {
    $('.modal-member-name').html('Zackary Reece');
    $('.modal-position').html('UROC Senator');
    $('.email').html('zdreece@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Reece_Zackary.png')",
      "background-size": "cover"
    });
  });

  $('#schultes').click(function() {
    $('.modal-member-name').html('Sam Shulte');
    $('.modal-position').html('Ex-Officio Ames City Council Student Liaison');
    $('.email').html('schultes@iastate.edu');
    $('.major').html('Major: Biochemistry');
    $('.hometown').html('Hometown: West Des Moines, IA');
    $('.sgYears').html('Years in Student Government: 3');
    $('.bio').html('Sam is a Senior at Iowa State. He is a Student Government representative on the Special Student Fee and Tuition Committee and is a representative on the Student Organization Sponsorship Program. He is involved on campus as the Principal Euphonium of the Iowa State University Wind Ensemble and as a Research Assistant in the Peters Laboratory.');
    $('.goalOne').html('Sam wants to improve relations between Iowa State University and the City of Ames by helping to establish an alternative to the Student Affairs Commission. He also wants to support bike safety, Campustown safety, and the Rent Smart Ames program.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Schulte_Sam.png')",
      "background-size": "cover"
    });
  });

  $('#singbush').click(function() {
    $('.modal-member-name').html('Blake Singbush');
    $('.modal-position').html('Director of Academic Affairs');
    $('.email').html('singbush@iastate.edu');
    $('.major').html('Major: Psychology & Criminal Justice');
    $('.hometown').html('Hometown: Johnston, IA');
    $('.sgYears').html('Years in Student Government: 2');
    $('.bio').html('Born and raised a cyclone, got involved with student government through Freshmen Council. Proud member of Phi Kappa Psi fraternity.');
    $('.goalOne').html('I plan on finishing up with the Testing Center Initiative. Other project ideas include using blackboard to organize group study sessions.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#smithkbp').click(function() {
    $('.modal-member-name').html('Katie Smith');
    $('.modal-position').html('Director of Special Events');
    $('.email').html('smithkbp@iastate.edu');
    $('.major').html('Major: Double major in Public Relations and Women\'s Studies');
    $('.hometown').html('Hometown: De Soto, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('After transferring from the University of Northern Iowa, Katie felt right at home here at Iowa State University.  Within three weeks, Katie was actively involved in the LGBTA Alliance, becoming their Public Relations and Advertising chair.  As an avid ally, Katie was in charge of planning the Spring Charity LGBTA Alliance Drag Show which raised over 1,200 dollars for the Ames Youth and Shelter Services.  In April of 2015, Katie was elected president of the LGBTA Alliance and the Director of Special Events for Iowa State University\'s Student Government.');
    $('.goalOne').html('Plan a fun "Meet Your Government Day" to interact and build connections with the student body, To plan and execute Big 12 On The Hill in Washington D.C. to lobby for higher education, To organize retreats for student government.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#rlstarn').click(function() {
    $('.modal-member-name').html('Ryan Starn');
    $('.modal-position').html('UROC Senator');
    $('.email').html('rlstarn@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Starn_Ryan.png')",
      "background-size": "cover"
    });
  });

  $('#cmstaudt').click(function() {
    $('.modal-member-name').html('Cole Staudt');
    $('.modal-position').html('LAS Senator');
    $('.email').html('cmstaudt@iastate.edu');
    $('.major').html('Major: Double Major in Political Science and Public Relations');
    $('.hometown').html('Hometown: Rockford, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('I grew up in a small town of 700, graduated with 36 people and then came to Iowa State in the fall of 2013. I got involved in student government early, joining IRHA in September 2013 as the Director or IT. The next year I was selected as Director of Finance for IRHA and then served a semester as VP. I also am the President of Business Affairs for Cyclone Family Weekend and a proud member of Beta Theta Pi Fraternity. I enjoy going for runs and driving around Ames with my friends and doing just about anything to get away from doing homework.');
    $('.goalOne').html('Help to make SG more approachable to students and make the rules easy enough for anyone to understand.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Staudt_Cole.png')",
      "background-size": "cover"
    });
  });

  $('#msunderm').click(function() {
    $('.modal-member-name').html('Mickey Sundermann');
    $('.modal-position').html('Director of Communications');
    $('.email').html('msunderm@iastate.edu');
    $('.major').html('Major: Public Relations and Religious Studies');
    $('.hometown').html('Hometown: Waukee, IA');
    $('.sgYears').html('Years in Student Government: 1st year at ISU, plus one year at Wartburg');
    $('.bio').html('<p>Mickey Sundermann is a junior from Waukee, IA. She attended Wartburg College for the first year and a half of her college career. There, she was active with Tower Agency, the Way of Jesus, and Dance Marathon. She was on the Morale Team and helped with marketing and video production for Wartburg’s 2015 event.</p><p>At ISU, Sundermann is chartered member of Alpha Phi’s Zeta Delta International Fraternity. She is the Director of Iowa State Young Life College after being a middle-school leader for three years. She also works with youth ministry year round through Riverside Lutheran Bible Camp in Story City, IA as a counselor and the camp store gal, and with Harvest Vineyard Church in Ames, IA.</p><p>Sundermann is excited to serve the student body and Student Government as the Director of Communications. She intends to help increase publicity of the group and make it more approachable for the student body. Please feel free to email her anytime if you have questions, comments, or ideas.</p>');
    $('.goalOne').html('1. Work on rebranding Student Government');
    $('.goalTwo').html('2. Connect with the students on a more personal level, especially by showing off the Students First initiative at DIS.');
    $('.goalThree').html('3. Be more present on social media — I would love for students to get excited about our posts!');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Sundermann_Mickey.png')",
      "background-size": "cover"
    });
  });

  $('#adelais').click(function() {
    $('.modal-member-name').html('Adelai Swanson');
    $('.modal-position').html('Director of ISU Ambassadors');
    $('.email').html('adelais@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Swanson_Adelai.png')",
      "background-size": "cover"
    });
  });

  $('#mjsweere').click(function() {
    $('.modal-member-name').html('Megan Sweere');
    $('.modal-position').html('Vice President');
    $('.email').html('mjsweere@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Sweere_Megan_VP.jpg')",
      "background-size": "cover"
    });
  });

  $('#mteubert').click(function() {
    $('.modal-member-name').html('Matthew Teubert');
    $('.modal-position').html('LAS Senator');
    $('.email').html('mteubert@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Teubert_Matthew.png')",
      "background-size": "cover"
    });
  });

  $('#austint').click(function() {
    $('.modal-member-name').html('Austin Thielmann');
    $('.modal-position').html('IRHA Senator');
    $('.email').html('austint@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#cmtillo').click(function() {
    $('.modal-member-name').html('Connor Tillo');
    $('.modal-position').html('LAS Senator');
    $('.email').html('cmtillo@iastate.edu');
    $('.major').html('Major: Political Science');
    $('.hometown').html('Hometown: West Burlington, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('As a cadet in the United States Air Force, the former president of Buchanan Hall and a member of IRHA, I\'ve always served to promote the interests of my friends and my classmates. As the senator representing the College of Liberal Arts and Sciences, I\'ll continue to do the same.');
    $('.goalOne').html('Iowa State\'s Student Government wants to meet the needs of the students that we represent. We can do this by giving students the chance to excel with access to great networking and opportunities to competitive funding. With the new rebranding of Student Government, it is on us to make a better name for our constituents and our university.');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Tillo_Conner.png')",
      "background-size": "cover"
    });
  });

  $('#estonsoni').click(function() {
    $('.modal-member-name').html('Emily Tosoni');
    $('.modal-position').html('IRHA Senator');
    $('.email').html('estonsoni@iastate.edu');
    $('.major').html('Major: Political Science');
    $('.hometown').html('Hometown: Elkhorn, Nebraska');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('Emily Tosoni is a sophomore in Political Science. She is from Elkhorn, Nebraska and has been a member of Freshmen Council during her freshman year at Iowa State. Emily is on the Student Government Diversity Committee. She is also active in the Pre-Law Club and Cy’s Gluten Free Friends Club.');
    $('.goalOne').html('1. Actively engage students to find out problems that can be fixed on campus');
    $('.goalTwo').html('2. Work with the Senate efficiently to pass bills and resolutions that are really important to students');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Tosoni_Emily.png')",
      "background-size": "cover"
    });
  });

  $('#stevenv').click(function() {
    $('.modal-member-name').html('Steven Valentino');
    $('.modal-position').html('IFC Senator');
    $('.email').html('stevenv@iastate.edu');
    $('.major').html('Major: Political Science and Economics');
    $('.hometown').html('Hometown: Long Valley, NJ');
    $('.sgYears').html('Years in Student Government: 1.5');
    $('.bio').html('A current sophomore in Political Science and Economics and a proud member of Tau Kappa Epsilon Fraternity. He has the aspirations to eventually go to grad school to earn a doctorate in Political Science. Currently, as a member of Student Government, Steven presently serves as a member of Finance Committee and University Affairs Committee. Always willing to meet and work with constituents who contact him.');
    $('.goalOne').html('1. Work with a wider base of students.');
    $('.goalTwo').html('2. Continue to work closely with administration to address current issues facing Iowa State students.');
    $('.goalThree').html('3. Continue to work with student organizations to give them the resources and support they need to function.');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Valentino_Steven.png')",
      "background-size": "cover"
    });
  });

  $('#npvezeau').click(function() {
    $('.modal-member-name').html('Neil Vezeau');
    $('.modal-position').html('Dir. Graduate & Professional Student Outreach / Agriculture & Life Sciences Senator');
    $('.email').html('npvezeau@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/missing.jpg')",
      "background-size": "cover"
    });
  });

  $('#davidw1').click(function() {
    $('.modal-member-name').html('David Weinstein');
    $('.modal-position').html('Webmaster');
    $('.email').html('davidw1@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Weinstein_David.png')",
      "background-size": "cover"
    });
  });

  $('#codywest').click(function() {
    $('.modal-member-name').html('codywest');
    $('.modal-position').html('Agriculture & Life Sciences Senator');
    $('.email').html('codywest@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/West_Cody.png')",
      "background-size": "cover"
    });
  });

  $('#gweston').click(function() {
    $('.modal-member-name').html('George Weston');
    $('.modal-position').html('Graduate Senator');
    $('.email').html('gweston@iastate.edu');
    $('.major').html('');
    $('.hometown').html('');
    $('.sgYears').html('');
    $('.bio').html('');
    $('.goalOne').html('');
    $('.goalTwo').html('');
    $('.goalThree').html('');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Weston_George.png')",
      "background-size": "cover"
    });
  });

  $('#jzirk').click(function() {
    $('.modal-member-name').html('Jacob Zirkelbach');
    $('.modal-position').html('IRHA Senator');
    $('.email').html('jzirk@iastate.edu');
    $('.major').html('Major: Computer Engineering');
    $('.hometown').html('Hometown: Monticello, IA');
    $('.sgYears').html('Years in Student Government: 1');
    $('.bio').html('I like cats.  I\'m in a lot of clubs.   School is great.');
    $('.goalOne').html('1. To always leave everything better than or equal to the way I found it, so I will always have a net positive impact on the world.');
    $('.goalTwo').html('2. Accurately represent and convey the thoughts and feeling of IRHA to Student Government.');
    $('.goalThree').html('3. Make it so more people will say:  "I didn\'t choose the StuG Lyfe.  The StuG Lyfe chose me.');
    $('.modal-img').css({
      "background": "url('/assets/img/members/Zirkelbach_Jacob.png')",
      "background-size": "cover"
    });
  });

  // Open Modal
  $('.faces-div').click(function() {
    console.log("clicked");
    $("body").css("overflow", "hidden");
    scrollTop = $(window).scrollTop();
    scrollLeft = $(window).scrollLeft();
    top = $(this).offset().top;
    left = $(this).offset().left;
    width = $(this).width();
    height = $(this).height();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var newHeight = 600;
    var newWidth = 600;

    top -= scrollTop;
    left -= scrollLeft;

    $('.meetus-modal-frame').css({
      "top": top,
      "left": left,
      "width": width,
      "height": height,
      "borderRadius": "0",
      "display": "block"
    });
    $('.meetus-opaque-back').css({
      "display": "block"
    });
    $('#close-Modal').css({
      "opacity": "1"
    });
    $('.project').css({
      "opacity": "1"
    });
    $('.pm-title').css({
      "opacity": "1"
    });
    $('.project-manager').css({
      "opacity": "1"
    });
    $('.goal-title').css({
      "opacity": "1"
    });
    $('.goal').css({
      "opacity": "1"
    });
    $('.more-info-selector').css({
      "opacity": "1"
    });

    var newTop = $(window).height();
    newTop = newTop / 2;
    newTop -= 285;

    var newLeft = $(window).width();
    newLeft = newLeft / 2;
    newLeft -= 285;

    if(windowHeight < 600) {
      newTop = 0;
      newHeight = windowHeight;
    }
    if(windowWidth < 600) {
      newLeft = 0;
      newWidth = windowWidth;
    }

    $('.meetus-modal-frame').animate({
      width: newWidth + 'px',
      height: newHeight + 'px',
      top: newTop + 'px',
      left: newLeft + 'px',
      borderRadius: '1.5%'
    }, 500);
    $('.meetus-opaque-back').animate({
      opacity: '.5'
    });
  });


  // Close Modal
  $('#meetus-close-Modal').click(function() {
    $('.meetus-modal-frame').animate({
      width: width,
      height: height,
      top: top,
      left: left,
      borderRadius: '0'
    }, 500, function() {
      $('.meetus-modal-frame').css({"display": "none"});
    });
    $('.meetus-opaque-back').animate({
      opacity: '0'
    }, 500, function() {
      $('.meetus-opaque-back').css({"display": "none"});
    });
    $('#close-Modal').animate({
      opacity: '0'
    }, 500);
    $('.project').animate({
      opacity: '0'
    }, 500);
    $('.pm-title').animate({
      opacity: '0'
    }, 500);
    $('.project-manager').animate({
      opacity: '0'
    }, 500);
    $('.goal-title').animate({
      opacity: '0'
    }, 500);
    $('.goal').animate({
      opacity: '0'
    }, 500);
    $('.more-info-selector').animate({
      opacity: '0'
    }, 500);
    $("body").css("overflow", "");
  });
});
