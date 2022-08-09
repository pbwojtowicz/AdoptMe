if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW registered");
        console.log(registration);
    }).catch(error =>{
        console.log("SW registration failed");
        console.log(error);
    });
}

function initMap() {
    // The location of the shelter
    const shelter = { lat: 50.04588050382137, lng: 19.883301368872996 };

    // The map, centered at zthe shelter
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: shelter,
   });
    // The marker, positioned at the shelter
    const marker = new google.maps.Marker({
     position: shelter,
     map: map,
   });
 }

  window.initMap = initMap;