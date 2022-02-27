$(document).ready(function() {
    function createPlaylistCard(obj, pos) {
        // <div id="card3" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
        //     <h3 class="video-card-title">The Heart of Soba</h3>
        // </div>

        var viewCount= document.getElementById('views-count')
        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.className = 'playlist-card';

        var thumbnail = document.createElement('img');
        thumbnail.src = obj.thumbnail;
        thumbnail.className = 'thumbnail';

        var title = document.createElement('h3');
        title.className = 'video-card-title';
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        return mainDiv;
    }
    $('#card1').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/1 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId

                $('#views-count').html(response.views)
                $('#"video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;
                $('#card1').addClass('active-card')
                $('#card2').removeClass('active-card')
                $('#card3').removeClass('active-card')
                $('#card4').removeClass('active-card')
                $('#card5').removeClass('active-card')
                $('#card6').removeClass('active-card')
        })
    })

    $('#card2').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/2 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId
                $('#views-count').html(response.views)
                $('#video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;
                $('#card2').addClass('active-card')
                $('#card1').removeClass('active-card')
                $('#card3').removeClass('active-card')
                $('#card4').removeClass('active-card')
                $('#card5').removeClass('active-card')
                $('#card6').removeClass('active-card')
        })
    })

    $('#card3').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/3 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId
                $('#views-count').html(response.views)
                $('#video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;

                $('#card3').addClass('active-card')
                $('#card1').removeClass('active-card')
                $('#card2').removeClass('active-card')
                $('#card4').removeClass('active-card')
                $('#card5').removeClass('active-card')
                $('#card6').removeClass('active-card')
        })
    })

    $('#card4').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/4 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId
                $('#views-count').html(response.views)
                $('#video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;

                $('#card4').addClass('active-card')
                $('#card1').removeClass('active-card')
                $('#card3').removeClass('active-card')
                $('#card2').removeClass('active-card')
                $('#card5').removeClass('active-card')
                $('#card6').removeClass('active-card')
        })
    })

    $('#card5').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/5 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId
                $('#views-count').html(response.views)
                $('#video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;

                $('#card5').addClass('active-card')
                $('#card1').removeClass('active-card')
                $('#card3').removeClass('active-card')
                $('#card4').removeClass('active-card')
                $('#card2').removeClass('active-card')
                $('#card6').removeClass('active-card')
        })
    })

    $('#card6').click(function(){
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/6 ',function(data,status){
               var response = data;
                var video=document.getElementById('video-player')
                video.src="https://player.vimeo.com/video/"+response.vimeoId
                $('#views-count').html(response.views)
                $('#video-title').html(response.title)
                $('#video-description').html(response.description)
                viewCount.innerHTML=response.views;

                $('#card6').addClass('active-card')
                $('#card1').removeClass('active-card')
                $('#card3').removeClass('active-card')
                $('#card4').removeClass('active-card')
                $('#card5').removeClass('active-card')
                $('#card2').removeClass('active-card')
        })
    })
});