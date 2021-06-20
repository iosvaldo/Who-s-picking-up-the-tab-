// this small program is designed to select a random name from a list of names. The person who is selected will have to pay for everybody's food bill. 


function whosPaying(names) {
    
var random_name = Math.floor(Math.random()*names.length);

var filler_name =(names[random_name]);

return filler_name + " is going to buy lunch today!"
   
}
console.log (whosPaying(["oz", "eva", "olivia", "john", "erica"]) );
