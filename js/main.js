function initMap() {
	
	const image = {
		url: 'https://source.unsplash.com/random/100x100',
		size: new google.maps.Size(50, 50)	
	};

	const map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: -31.761323, lng: -52.348068},
  	zoom: 16
	});

	const marker = new google.maps.Marker({
    position: {lat: -31.761323, lng: -52.348068},
    map: map,
    title: 'Hello World!',
    icon: image
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

	const infowindow = new google.maps.InfoWindow({
		content: '<p>Olá aqui é a casa do Abner</p>'
	})

}	
