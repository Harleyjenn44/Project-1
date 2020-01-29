var gculture = [
    'Andals', 'Cave People', 'Crannogmen', 'Dornishmen', 'Dothraki', 'First Men', 'Freefolk', 'Ghiscari', 'Hill Tribes', 'Hornfoot', 'Ibbenese', 'Ironborn', 'Jogos Nhai', 'Lhazareen', 'Northmen', 'Qartheen', 'Rhoynar', 'Sanori', 'Shadow Men', 'Southerner', "Theens", 'Valyrians'
    ];
    
    var gnamem = [
    'Eddard', 'Ned', 'Robert', 'Jamie', 'Tywin', 'Tyrion', 'Jorah', 'Viserys', 'Raegar', 'Raegal', 'Jon', 'Rob', 'Theon', 'Bran', 'Joffrey', 'Sandor', 'Gregor', 'Varys', 'Gendry', 'Tormund', 'Ramsay', 'Daario', 'Tommen', 'Jaqen', 'Roose'
    ];
    
    var gnamef = [
      'Catelyn', 'Cersei', 'Daenerys', 'Sansa', 'Arya', 'Melisandre', 'Margaery', 'Talisa', 'Ygritte', 'Brienne', 'Gilly', 'Missandei', 'Ellaria'
    ];
    
    var glname=[
    'Lannister', 'Stark', 'Tulley', 'Baratheon', 'Targaryen', 'Tyrell', 'Martell', 'Greyjoy', 'Bolten', 'Arren', 'Frey', 'Mormont', 'Baclkfyre', 'Umber', 'Reyne'
    ];
    
    var lnamem = [
    'Aragorn', 'Bilbo', 'Beorn', 'Frodo', 'Tom', 'Boromir', 'Celeborn', 'Celebrimbor', 'Denethor', 'Elrond', 'Faramir', 'Gandolf', 'Gimli', 'Samruman', 'Salron', 'Moradin', 'Gollum', 'Isildor', 'Legolas', 'Radagast', 'Theodin'
    ];
    
    var lnamef = [
      'Arwen', 'Galadriel', 'Eowyn', 'Luthien', 'Shelob', 'Tauriel', 'Haleth', 'Nienor'
    ];
    
    var llname = [
      'Baggins', 'OfGodor', 'OfRohan', 'OfOsgiliath', 'OfMinasAngor', 'OfMinasMorgul', 'OfRivendell'
    ]
    
    var manname = [
    'Eddard', 'Ned', 'Robert', 'Jamie', 'Tywin', 'Tyrion', 'Jorah', 'Viserys', 'Raegar', 'Raegal', 'Jon', 'Rob', 'Theon', 'Bran', 'Joffrey', 'Sandor', 'Gregor', 'Varys', 'Gendry', 'Tormund', 'Ramsay', 'Daario', 'Tommen', 'Jaqen', 'Roose','Aragorn', 'Bilbo', 'Beorn', 'Frodo', 'Tom', 'Boromir', 'Celeborn', 'Celebrimbor', 'Denethor', 'Elrond', 'Faramir', 'Gandolf', 'Gimli', 'Samruman', 'Salron', 'Moradin', 'Gollum', 'Isildor', 'Legolas', 'Radagast', 'Theodin'
    ]
    
    var womanname = [
    'Arwen', 'Galadriel', 'Eowyn', 'Luthien', 'Shelob', 'Tauriel', 'Haleth', 'Nienor', 'Catelyn', 'Cersei', 'Daenerys', 'Sansa', 'Arya', 'Melisandre', 'Margaery', 'Talisa', 'Ygritte', 'Brienne', 'Gilly', 'Missandei', 'Ellaria'
    ]

    var lastname=[
      'Baggins', 'Of Godor', 'Of Rohan', 'Of Osgiliath', 'Of Minas Angor', 'Of Minas Morgul', 'Of Rivendell', 'Lannister', 'Stark', 'Tulley', 'Baratheon', 'Targaryen', 'Tyrell', 'Martell', 'Greyjoy', 'Bolten', 'Arren', 'Frey', 'Mormont', 'Baclkfyre', 'Umber', 'Reyne'
    ]
    
    var Conflict = {
    0:"They went and had a picnic.",
    1:"They argued over who took the last turkey leg!",
    2:"They slapped each other over a turkey leg!",
    3:"They punched each other over who stole the war horse!",
    4:"They jousted over who was the  better jouster!",
    5:"They called their bannermen and fought a war!"
    }
    
    var Endings={
      0:"The passerby left, and you continue your walk.",
      1:"The passerby took everything you own, and left you naked on the path.",
      2:"Suddenly, a Dragon swoops in from above, and destroys everything.  There is nothing left of you or the passerby."
    }
    
    var gcity = "Kings Landing";
    
    var lcity = "The Shire";
    
    var cities = [
      'Kings Landing', 'The Shire'
    ]
    var namelog=$('#nametext');

    var con='';

    var end='';

    var name='';

    var fname='';

    var cstart=cities[Math.floor(Math.random()*cities.length)];
    

    $('#Male').on("click", function(event) {
      var headers = {'Authorization': "Bearer uG60W3Bu5ezwoDyDopGM"};
var key='https://the-one-api.herokuapp.com/v1/character?gender=Male';
 $.ajax({
url: key,
 headers: headers,
method: "GET"
}).then(function(response){
var menname=response.docs[Math.round(Math.random() * 635)].name;
name = menname+"\u00A0"+lastname[Math.floor(Math.random() * lastname.length)];
console.log(name);
namelog.append(name);
var cstart=cities[Math.floor(Math.random()*cities.length)];
console.log(cstart)
namelog.append('<br /> at: '+cstart);
    })})

$('#Female').on("click", function(event) {
name=gnamef[Math.floor(Math.random() * gnamef.length)]+"\u00A0"+lastname[Math.floor(Math.random() * lastname.length)];
console.log(fname)
namelog.append(name);
namelog.append('<br /> at: '+cstart);
})

$('#btnc0').on("click", function(event) {
con=Conflict[0];
console.log(con);
namelog.append('<br />'+'Conflict rating:0');
})

$('#btnc1').on("click", function(event) {
con=Conflict[1];
namelog.append('<br />'+'Conflict rating:1');
})

$('#btnc2').on("click", function(event) {
con=Conflict[2];
namelog.append('<br />'+'Conflict rating:2');
})

$('#btnc3').on("click", function(event) {
con=Conflict[3];
namelog.append('<br />'+'Conflict rating:3');
})

$('#btnc4').on("click", function(event) {
con=Conflict[4];
namelog.append('<br />'+'Conflict rating:4');
})

$('#btnc5').on("click", function(event) {
con=Conflict[5];
namelog.append('<br />'+'Conflict rating:5');
})



$('#end0').on('click', function(event) {
    end=Endings[0];
    console.log(end);
    namelog.append('<br />'+'Ending=Good');
})
$('#end1').on('click', function(event) {
    end=Endings[1];
    console.log(end);
    namelog.append('<br />'+'Ending=Bad');
})
$('#end2').on('click', function(event) {
    end=Endings[2];
    console.log(end)
    namelog.append('<br />'+'Ending=Destruction');
})

$('#endText').on('click', function(event) {
var storytext=$('#text');
storytext.append('One day you,'+"\u00A0"+name+', were walking through'+"\u00A0"+cstart+"\u00A0"+'when all of a sudden a passerby approaches you!  You have a breif discussion, and then...'+'<br />'+con+'<br />'+end);
})