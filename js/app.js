(function (){
  "use strict";

 $("#pokeask").click(function(){
   let pokeid=$("#pokeid").val();
   console.log(pokeid);
       callingPokemon(pokeid).then((data)=>{
          console.dir(data);
          $("h4").text(data.name);
          $("#pokemonbild").attr("src","https://img.pokemondb.net/artwork/"+data.name+".jpg");
   })
 })


})();

function callingPokemon(pokeid){
  let url = "https://pokeapi.co/api/v2/"+"pokemon/"+pokeid+"/";
  let input = $.get(url,(data,status)=>{
    console.dir(data);
    if( status =="success"){
      return data;
    }else
    console.log(status);
  },"json");
  return input;
}
