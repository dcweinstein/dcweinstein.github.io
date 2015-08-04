$(document).ready(function() {
  console.log("ready");

  var scrollTop;
  var scrollLeft;
  var top;
  var left;
  var width;
  var height;

  // Set modal content
  // $('#initOne').click(function() {
  //   $('.project').html('Bike Share Program');
  //   $('.project-manager').html('Nick Terhall');
  //   $('.goal').html('Install card scanners and bikes on campus so that students can checkout bikes from campus and return at any other campus bike rack');
  //   $('.more-info-selector').attr('href', "Bike-Share-Document.pdf");
  // });


  // p.info Major: Computer Engineering
 //-       p.info Hometown: Cedar Rapids, Iowa
 //-       p.info Years in Student Government: 2
 //-       strong
 //-         .header.more Biography
 //-       p Michael Snook is a sophomore in Computer Engineering with an expected graduation in 2017. He is from Cedar Rapids, Iowa and was the Treasurer of Freshmen Council during his freshman year at Iowa State. He also served as a Freshman Honors Program Leader his sophomore year. He currently serves as the Vice President of the Memorial Union Board of Directors and as the Chair of the Memorial Union Student Advisory Committee. Within Student Government, Michael represents the Engineering Constituency and serves as the Vice Speaker of the Senate. Michael has served on both the Finance and Rules Committees. His sophomore year, he wrote a bill in collaboration with the Finance Director that allowed Student Government to allocate an additional $166,000 to student organizations. He is very willing to meet with students to answer questions or collaborate on projects.
 //-       strong
 //-         .header Goals
 //-       p 1. Improve collaboration between the students and Student Government.
 //-       p 2. Ensure the efficient operations of the Student Government Senate.
 //-       p 3. Improve the Student Experience.

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
      "background": "url('../assets/img/members/Breitbarth_Daniel_Pres0.jpg')",
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
      "background": "url('../assets/img/members/missing.jpg')",
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
      "background": "../img/members/missing.jpg",
      "background-size": "cover"
    });
  });

  $('#ztbarnes').click(function() {
    $('.modal-member-name').html('Zaak Barnes');
    $('.modal-img').css({
      "background": "url('../assets/img/members/Barnes_Zaackary_DirectorofGovernmentRelations.png')",
      "background-size": "cover"
    });
  });

  $('#abbehnke').click(function() {
    $('.modal-member-name').html('Tony Behnke');
    $('.modal-img').css({
      "background": "url('../assets/img/members/Behnke_Tony_CodirectorStudentAffairs.png')",
      "background-size": "cover"
    });
  });

  $('#bergfeld').click(function() {
    $('.modal-member-name').html('Nick Bergfeld');
    $('.modal-img').css({
      "background": "url('../assets/img/members/Bergfeld_Nick_EngineerSenator.png')",
      "background-size": "cover"
    });
  });

  $('#dpb').click(function() {
    $('.modal-member-name').html('Dan Breitbarth');
    $('.modal-img').css({
      "background": "url('../assets/img/members/Breitbarth_Daniel_Pres0.jpg')",
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
