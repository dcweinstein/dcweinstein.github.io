$(document).ready(function() {

  var scrollTop;
  var scrollLeft;
  var top;
  var left;
  var width;
  var height;

  // Set modal content
  $('#initOne').click(function() {
    $('.project').html('Bike Share Program');
    $('.project-manager').html('Nick Terhall');
    $('.goal').html('Install card scanners and bikes on campus so that students can checkout bikes from campus and return at any other campus bike rack');
    $('.project-status').html('Classes working on protoypes and further planning');
    $('.more-info-selector').html("More Info");
    $('.more-info-selector').attr('href', "Bike-Share-Document.pdf");
  });

  $('#initTwo').click(function() {
    $('.project').html('Recycling Expansion to Campus Buildings');
    $('.project-manager').html('Aly Straube');
    $('.goal').html('Expand ISU recycling program to other campus buildings starting with library');
    $('.project-status').html('Library part completed. Expanding');
    $('.more-info-selector').html("");
  });

  $('#initThree').click(function() {
    $('.project').html('Supplemental Instruction Reform');
    $('.project-manager').html('Hillary Kletscher');
    $('.goal').html('');
    $('.project-status').html('');
    $('.more-info-selector').html("");
  });

  $('#initFour').click(function() {
    $('.project').html('Connection Student Government and Freshman Council');
    $('.project-manager').html('Blake Singbush');
    $('.goal').html('Connecting GSB and FC by coming up with issues current Freshmen face by working on projects that help the betterment of Freshmen.');
    $('.project-status').html('Creating a team to brainstorm projects for Spring semester');
    $('.more-info-selector').html("");
  });

  $('#initFive').click(function() {
    $('.project').html('Frisbee Golf Course Renovations');
    $('.project-manager').html('');
    $('.goal').html('Implement an "adpot a trashcan" program at frisbee golf courses');
    $('.project-status').html('Currently on hold');
    $('.more-info-selector').html("");
  });

  $('#initSix').click(function() {
    $('.project').html('Student to Student Exchange Site');
    $('.project-manager').html('Mike Hoefer');
    $('.goal').html('Create a universal, widely adopted medium for textbook exchange among Iowa State students');
    $('.project-status').html('Investigating both new and current vendors, including Textbook Friend and IowaBookExchange. Working with computer engineering students on a capstone project. Year long project.');
    $('.more-info-selector').html("");
  });

  $('#initSeven').click(function() {
    $('.project').html('Iowa State Green Fund');
    $('.project-manager').html('Mike Hoefer and Aly Straube');
    $('.goal').html('Create an Iowa State Green Fund, used to support sustainability projects on campus');
    $('.project-status').html('Investigating previous proposals, survey results show student interest. Meetings with Merry Rankin ongoing');
    $('.more-info-selector').html("");
  });

  $('#initEight').click(function() {
    $('.project').html('Improve Useability of Bike Pump');
    $('.project-manager').html('Mike Hoefer');
    $('.goal').html('Provide clear instructions for use of public bike pump');
    $('.project-status').html('Graphic found - waiting on quotes for industrial strength sticker. Waiting on meeting with lanscape architect.');
    $('.more-info-selector').html("");
  });

  $('#initNine').click(function() {
    $('.project').html('Clicker Voting System for Student Government Senate');
    $('.project-manager').html('Peter Benzoni');
    $('.goal').html('Develope a shared GSB/GPSS Clicker system for voting in Student Government Senate');
    $('.project-status').html('Talking to GPSS');
    $('.more-info-selector').html("");
  });

  $('#initTen').click(function() {
    $('.project').html('Universal Calendar for Student Organizations');
    $('.project-manager').html('Michael Hoefer');
    $('.goal').html('Create a common calendar for all student organization public events.');
    $('.project-status').html('In contact with Jim Twetten and George Micalone. Waiting on beta test of student organization database');
    $('.more-info-selector').html("");
  });

  $('#initEleven').click(function() {
    $('.project').html('Purchasing Large Tent');
    $('.project-manager').html('UA Committee: Dan Breitbarth');
    $('.goal').html('Purchase Large Tent to be used by student organazations on Central Campus');
    $('.project-status').html('Researching Cost, Meeting with University Administration');
    $('.more-info-selector').html("");
  });

  $('#initTwelve').click(function() {
    $('.project').html('Transfer Credit');
    $('.project-manager').html('Peter Benzoni, Elvir Klempic, David Parkinson, Katy Roat');
    $('.goal').html('Look into policy of having transfer credits count towards your GPA');
    $('.project-status').html('Drafting Resolution to go before GSB Senate before proceding with talks with Administration');
    $('.more-info-selector').html("");
  });

  $('#initThirteen').click(function() {
    $('.project').html('More Food Options');
    $('.project-manager').html('Megan Black');
    $('.goal').html('Trying to Get Food Carts inside buildings to provide quick and easy food to students');
    $('.project-status').html('Meeting with Dining Leadership to discuss viability');
    $('.more-info-selector').html("");
  });

  $('#initFourteen').click(function() {
    $('.project').html('Smoking Ban/e-cigarettes');
    $('.project-manager').html('Danielle Nygard, Megan Sweere');
    $('.goal').html('Trying to get Smoking Bans more heavily enforced on campus, along with adding e-cigarettes to the smoking ban');
    $('.project-status').html('Meeting with Faculty Senate and PNS Council');
    $('.more-info-selector').html("");
  });

  $('#initFifteen').click(function() {
    $('.project').html('Printing Credits');
    $('.project-manager').html('Reagan Huber, Nick Terhall');
    $('.goal').html('Looking towards revamping how the printing system works on campus');
    $('.project-status').html('Research Phase');
    $('.more-info-selector').html("");
  });

  $('#initSixteen').click(function() {
    $('.project').html('Spring Orientation');
    $('.project-manager').html('Sam Schultee');
    $('.goal').html('Create A new student orientation program for students starting in Spring Semester');
    $('.project-status').html('Contacting University Committee');
    $('.more-info-selector').html("");
  });

  $('#initSeventeen').click(function() {
    $('.project').html('Bike Pump in Freddy Court');
    $('.project-manager').html('Mike Hoefer');
    $('.goal').html('Looking into possiblity of installing Bike Pump (like the one by Memorial Union) in Freddy Court');
    $('.project-status').html('In Contact with Freddy Court Council');
    $('.more-info-selector').html("");
  });

  $('#initEightteen').click(function() {
    $('.project').html('Safe Trek Safety App');
    $('.project-manager').html('Carlton Stripe');
    $('.goal').html('Implement a Safety App onto the Iowa State campus for when students feel unsafe in certain locales and situations');
    $('.project-status').html('Initial contact with ISU Police and Dean of Student Affairs office');
    $('.more-info-selector').html("");
  });

  $('#initNineteen').click(function() {
    $('.project').html('Student Organization Event Planning');
    $('.project-manager').html('Carlton Stripe');
    $('.goal').html('Make the planning and authorizing of student organizations\' events more streamlined');
    $('.project-status').html('Gathering input from College Councils and Student Groups who often plan events');
    $('.more-info-selector').html("");
  });

  $('#initTwenty').click(function() {
    $('.project').html('SAC Online FAQ Database');
    $('.project-manager').html('Carlton Stripe');
    $('.goal').html('The Student Answer Center (SAC) is creating a new online "One-Stop Shop" FAQ for students to utiliize. This is to be in conjunction with the current SAC that is located in Beardshear Hall.');
    $('.project-status').html('Working in partnership with GSB to develop the overall content for the online database');
    $('.more-info-selector').html("");
  });

  $('#initTwentyone').click(function() {
    $('.project').html('Student Affairs Commission/28E');
    $('.project-manager').html('Lissandra Villa');
    $('.goal').html('To enter into a 28E agreement with the City of Ames for a one-year trial period as a potential replacement for the Student Affairs Commission. Simultaneously there will be investigations into how to improve the Student Affairs Commission as it stands.');
    $('.project-status').html('Must first get contract approved by Student Government Senate');
    $('.more-info-selector').html("");
  });

  $('#initTwentytwo').click(function() {
    $('.project').html('ISU Ambassadors');
    $('.project-manager').html('Jamie Rix & Justin Bahr');
    $('.goal').html('Justin and I are currently preparing all ambassadors prepared for the Capitol. Joe Murphy will be joining our meeting on Thursday to insure everyone is on the same page regarding the tuition freeze and performance based funding. I am also working on ordering polo\'s for the ambassadors so that we appear as one strong unit at the capitol! Justin will be attending the Board of Regents meeting on Wednesday at the alumni center and I will be attending the Senate meeting on Wednesday as well if anyone has questions for me.');
    $('.project-status').html('');
    $('.more-info-selector').html("");
  });

  $('#initTwentythree').click(function() {
    $('.project').html('It\'s On Us');
    $('.project-manager').html('Amanda Loomis & Hillary Kletscher');
    $('.goal').html('Campaign to end Sexual Assualt and create awareness.');
    $('.project-status').html('Website awaiting approval, PR Campaign in the works');
    $('.more-info-selector').html("");
  });

  $('#initTwentyfour').click(function() {
    $('.project').html('Study Group Matching');
    $('.project-manager').html('Melissa Gofforth');
    $('.goal').html('Match students in large lectures with peer study groups, by utilizing Blackboard features. This will mostly target first year students');
    $('.project-status').html('Logistics');
    $('.more-info-selector').html("");
  });

  $('#initTwentyfive').click(function() {
    $('.project').html('Expanding Clubfest');
    $('.project-manager').html('Tony Behnke');
    $('.goal').html('Tony Behnke	To allow more student organizations to be involved with clubfest. Currently it is too crowded and is breaking fire codes and must be moved or made smaller... The project will have clubfest outside in the fall and allow 350 organizations to be outside with each their own table and weather protected by tents, rather than the current 250 oragnizations sharing tables.');
    $('.project-status').html('Just put together numbers with the Student Activities Center and working with senators to create a bill.');
    $('.more-info-selector').html("");
  });

  $('#initTwentysix').click(function() {
    $('.project').html('Beautifying Parking Ramp Underpassage');
    $('.project-manager').html('Cody West');
    $('.goal').html('Add lighting and color to the walkway under the MU parking ramp.');
    $('.project-status').html('Meeting with FP&M');
    $('.more-info-selector').html("");
  });

  $('#initTwentyseven').click(function() {
    $('.project').html('Picnic tables for Central Campus');
    $('.project-manager').html('Abbie Lang');
    $('.goal').html('Adding seating to Central Campus for students and events');
    $('.project-status').html('Meeting with Administration');
    $('.more-info-selector').html("");
  });

  $('#initTwentyeight').click(function() {
    $('.project').html('Creating a Humanity organization umbrella');
    $('.project-manager').html('Neil Vezeau');
    $('.goal').html('To create an organization that will be an umbrella for all humanitarian groups on campus.');
    $('.project-status').html('Creating Leadership');
    $('.more-info-selector').html("");
  });

  $('#initTwentynine').click(function() {
    $('.project').html('Student Diversity Committee');
    $('.pm-title').html('');
    $('.project-manager').html('');
    $('.goal').html('<p>Help create an inclusive Cyclone Community which celebrates diversity</p><p>Advocate and empower underrepresented groups on-campus</p><p>Collaborate with the City of Ames, University Administration and Student Organizations to execute projects to enhance and retain diversity on campus</p>');
    $('.status-title').html('Cabinet Officers');
    $('.project-status').html('<table style="border-collapse: collapse;" width="450" border="1" cellpadding="5px"><tbody><tr><td width="180">Name</td><td width="269">Title</td><td width="48">Email</td></tr><tr><td>Tyler McKnight</td><td>Assistant Director of LGBT Affairs</td><td><a href="mailto:tjm91@iastate.edu">tjm91@iastate.edu</a></td></tr><tr><td>Jerrel Ellis</td><td>Assistant Director of Multicultural Student Affairs</td><td><a title="Email Ellis" href="mailto:ellis@iastate.edu">ellis</a></td></tr><tr><td>Olivia Ward</td><td>Assistant Director of Gender Equality Affairs</td><td><a title="Email olivia" href="mailto:oagard@iastate.edu">oagard</a></td></tr><tr><td>Paul Kyungjoon Chung</td><td>Assistant Director of International Student Affairs</td><td><a title="Email Paul" href="mailto:chung@iastate.edu">chung</a></td></tr><tr><td><a title="Vice Speaker of the Senate" href="http://www.gsb.iastate.edu/wordpress/legislative/vice-speaker-of-the-senate-2">Dan Breitbarth</a></td><td>Senator</td><td><a title="Email Dan" href="mailto:dpb@iastate.edu">dpb</a></td></tr><tr><td><a href="http://www.gsb.iastate.edu/wordpress/legislative/standing-committees/university-affairs/university-affairs-committee-chair/senator-2">Peter Benzoni</a></td><td>Senator</td><td><a title="Email Dan" href="mailto:pbenzoni@iastate.edu">pbenzoni</a></td></tr><tr><td>Laura Wiederholt</td><td>Assistant Director of Student Disabilities Affairs</td><td><a title="Email laura" href="mailto:lauraew@iastate.edu">lauraew</a></td></tr><tr><td>Wes Hamstreet</td><td>Assistant Director of Non-traditional Student Affairs</td><td><a title="Email Wes" href="mailto:wesleyh@iastate.edu">wesleyh</a></td></tr></tbody></table>');
    $('.more-info-selector').html("");
  });

  $('#initThirty').click(function() {
    $('.project').html('ISU Ambassadors');
    $('.pm-title').html('');
    $('.project-manager').html('');
    $('.goal-title').html('');
    $('.goal').html('');
    $('.status-title').html('');
    $('.project-status').html('<h3>Directors of the ISU Ambassadors</h3><p>Any questions about the ISU Ambassadors can be directed towards Jamie Rix, Director of ISU Ambassadors or Justin Bahr,  Director of Government Relations.</p><h3>ISU Ambassadors</h3><p>ISU Ambassadors is a group dedicated to creating a bridge between the students of Iowa State’s campus and real world politics. There are several ways in which this transpires:</p><h3>At the State Capitol:</h3><p>Ambassadors present student interests and concerns to state legislators on a weekly basis, organize Regents\' Day and generally have a felt presence in Des Moines.</p><h3>With the Board of Regents:</h3><p>Ambassadors provide an inside perspective of Iowa State’s needs and concerns.</p><h3>On Campus Events:</h3><p>Ambassadors plan and organize debates on hot-button issues, open forums between officials up for election and other events to encourage student participation in the political process, such as a mock election or voter registration.</p><br><p>ISU Ambassadors not only works towards political ends, but to enhance the professionalism and leadership abilities of all its members. Ambassadors are also hard working students, committed to creating a positive image and strong future for Iowa State University.</p>');
    $('.more-info-selector').html("");
  });

  // Open Modal
  $('.init-div').click(function() {
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

    $('.modal-frame').css({
      "top": top,
      "left": left,
      "width": width,
      "height": height,
      "borderRadius": "0",
      "display": "block"
    });
    $('.opaque-back').css({
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

    $('.modal-frame').animate({
      width: newWidth + 'px',
      height: newHeight + 'px',
      top: newTop + 'px',
      left: newLeft + 'px',
      borderRadius: '1.5%'
    }, 500);
    $('.opaque-back').animate({
      opacity: '.5'
    });
  });


  // Close Modal
  $('#close-Modal').click(function() {
    $('.modal-frame').animate({
      width: width,
      height: height,
      top: top,
      left: left,
      borderRadius: '0'
    }, 500, function() {
      $('.modal-frame').css({"display": "none"});
    });
    $('.opaque-back').animate({
      opacity: '0'
    }, 500, function() {
      $('.opaque-back').css({"display": "none"});
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
