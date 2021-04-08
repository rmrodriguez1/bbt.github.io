fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series="+series)
.then(response => response.json())
.then(data => displayEpisodes(data));


function displayEpisodes(data){
   var episodes = document.getElementById('episodes'); 
   for (var i=0; i<data.length; i++){
       episodes.append("Episode "+data[i].number+": "+data[i].title+"<br>");
   }
}