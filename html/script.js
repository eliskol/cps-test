let arr = [];


function namecheck(){
  if(!name){
  name = prompt("what's ur name")
  namecheck();
  return name;
}
}
namecheck();

function save(){

cps = Number(document.getElementById('clicks').innerHTML);

if(name != "null" && cps < 20){

fetch(`./save`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, clickspersecond: cps}),
        })
}
else{
  console.log("dont input a blank name, or dont try to send false results!");
}

}



 fetch(`/messages/leaderboard.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        var i = 0;
       
        data.forEach((name) => {
        // console.log(data[i].name + " got " + data[i].clickspersecond + " clicks per second");
          i++;
        })

        data.sort((a,b) => {
          return b.clickspersecond - a.clickspersecond;
          });

          data.forEach((e) => {
      //   console.log(`${e.name} ${e.clickspersecond}`);

            arr.push(`${e.name}: ${e.clickspersecond} cps`);
            console.log(arr);
            return arr;
            

          });
  return arr;
    }) 

