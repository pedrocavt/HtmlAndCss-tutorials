let map;
//Initiaçoze adm add the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.349804, lng: -6.260310 },
    zoom: 8,
  });
}

//Sticky menu background
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smoth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();
        
        const hash = this.hash;
        
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -50
            },800
        );
    }
});