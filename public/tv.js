var channels = {};


document.querySelector('.online').addEventListener("mouseenter", function( event ) {
    document.querySelector('.online').classList.add('long');
    document.querySelector('.online').classList.remove('short');
    document.querySelector('.online').textContent='Online';

})
document.querySelector('.offline').addEventListener("mouseenter", function( event ) {
    document.querySelector('.offline').classList.add('long');
    document.querySelector('.offline').classList.remove('short');
    document.querySelector('.offline').textContent='Offline';

})
document.querySelector('.online').addEventListener("mouseout", function( event ) {
    document.querySelector('.online').classList.add('short');
    document.querySelector('.online').classList.remove('long');
    document.querySelector('.online').textContent='c';

})
document.querySelector('.offline').addEventListener("mouseout", function( event ) {
    document.querySelector('.offline').classList.add('short');
    document.querySelector('.offline').classList.remove('long');
    document.querySelector('.offline').textContent='c';

})
$.ajax({
    url:`https://wind-bow.hyperdev.space/twitch-api/channels/ESL_SC2`,
    dataType: "jsonp",
    success: function(data, status, xhr) {
        console.log(data);
        for(var url in data.link){
            channels[url]=data.link.url;
        }

        console.log(channels);
    }
})
