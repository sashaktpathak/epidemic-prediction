
var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 36.32, lng: 5.05 },
        mapTypeId: 'satellite'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}
function placeMarker(map, location) {
    location = new google.maps.LatLng(location[0], location[1])
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
latlong = []
$.get('/getClusteredData', (data, status) => {
    console.log(data)
    var count = Object.keys(data).length;
    console.log(count);
    for (i = 0; i < count; i += 1) {
        var count2 = Object.keys(data[i]).length;
        for (j = 0; j < count2; j += 1) {
            //console.log(data[i][j][0])
            latlong.push(data[i][j][0]);
        }
    }
})
// $.get('/getCentroid', (data, status) => {
//     var count = Object.keys(data).length;
//     console.log(count);
//     for (i = 0; i < count; i += 1) {
//         placeMarker(map, [data[i][0], data[i][1]])
//     }
// })
// Heatmap data: 500 Points
function getPoints() {
    k = []
    for (i = 0; i < latlong.length; i += 1) {
        k.push(new google.maps.LatLng(latlong[i][0], latlong[i][1]))
    }
    return k;
}
