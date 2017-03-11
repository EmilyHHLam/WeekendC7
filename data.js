var peopleArray = [
  {name: "Anisa Abdulkadir", shoutout: "Anisa showed me up with her Atom packages. Now its time for some retaliation."},
  {name: "Anna Springfield", shoutout: "Thanks to Anna for continuing to be a resource for asking tough questions, and for having good conversations."},
  {name: "Christopher Keller", shoutout: "Thanks to Chris for his speech today. I appreciated him talking about his family growing up and sharing. "},
  {name: "Claudia Calderas Mendez", shoutout: "I had great comfort and support when working with Claudia today."},
  {name: "Craig Baird", shoutout: "Craig's vulnerability in his speech today made me feel less alone with my own negative self talk."},
  {name: "Betsy Rowley", shoutout: "Shout out to Betsy for her help on the challenge. She was a lot of help and I appreciate her as a team mate."},
  {name: "Emily Hoang", shoutout: "Emily gave a brave speech today, thank you for sharing your story with us."},
  {name: "Erin Kinnen", shoutout: "Shoutout to Erin for telling hilarious stories about bats"},
  {name: "Keith Tomlinson", shoutout: "Shoutout to Keith for his speech today. It was brave for a lot of reasons. Additionally I appreciate his thoughtfulness. "},
  {name: "Kevin Dahlberg", shoutout: "Thanks to Kevin for his speech today, I can relate to him and I am not sure I would have gotten to know that side of him if he did not share."},
  {name: "Lisa Schoofs", shoutout: "Lisa, for being both super outgoing and organized enough to productively channel all that socializing!"},
  {name: "Logan Kelly", shoutout: "Thanks to Logan for his role as grammarian, I thought he was very empathetic and compassionate while still being able to give good constructive criticisms."},
  {name: "Nic Wilson", shoutout: "I want to thank Nic for how simply and concisely he understands and explains what is happening in the code. I really helped solidify some key concepts today. Thank you."},
  {name: "Olga Engels", shoutout: "Shoutout to Olga for working hard to be able to explain the steps in our group assignment!"},
  {name: "Teigen Leonard", shoutout: "Shout out to Teigen for sticking with me for the long haul and making some good progress together."},
  {name: "Tiffany Love", shoutout: "Tiffany really went out of her way to prep & support the team challenge, to make sure everyone was ready to present."},
  {name: "Y Paul Sussman", shoutout: "Y Paul's outgoing nature and positive attitude has made me feel more comfortable and welcome here at Prime."},
  {name: "Brianna Marie Dickman", shoutout: "Shout out to Bri for noticing that I wasn't tracking and offering to go over the stuff again. She clarified things for me and I was able to move forward."},
  {name: "Daniel Zera", shoutout: "Dan because he has a great collaborative attitude and is very helpful."}
];

$(document).ready(function() {
console.log("jQuery sourced");
//consoel.log(peopleArray[0]);
//show each of array with name and shoutout
var studentName ;
var shoutOut;
for (var i = 0; i< peopleArray.length; i++){

  $('.container').append('<div></div');
  var $el = $('.container').children().last();
  $el.append('<p>' + peopleArray[i].name + '</p>' );
  $el.append('<p>' + peopleArray[i].shoutout + '</p>');
  $el.hide();
  //put the grey boxes inside the buttonContainer class
  $('.buttonContainer').append('<div data-name= "' + peopleArray[i].name + '" class="squareBox"><div>');

console.log(peopleArray[i].name);
  dataShow($el, peopleArray[i].name);

  //   $el.show();

}

});

function dataShow(studentArray, studentName) {

//ar name = $el.data('name');
console.log('name passed'  + studentArray);

   $('.buttonContainer').on('click', '.squareBox', function() {
     var name = $(this).data('name');
     console.log('here' + name);

    if (studentName === name) {
     studentArray.show();
     }else {
       studentArray.hide();
     }
   });


}
