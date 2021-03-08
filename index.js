var songs = ["Girls Like You ft. Cardi B.mp3","Let Me Down Slowly.mp3","Sub Urban - Cradles [Bass Boosted - HQ].mp3"];
        
        
        var songTitle = document.getElementById("songTitle");
        var fillBar = document.getElementById("fill");
        
        var song = new Audio();
        var currentSong = 0;    
        
        window.onload = playSong;   
        
        function playSong(){
            if (currentSong==0){
                song.src = songs[0];
                songTitle.textContent = "Girls Like You ft. Cardi B.mp3";   
            }
            if (currentSong==1){
                song.src = songs[1];
                songTitle.textContent = "Let Me Down Slowly.mp3";   
            }
            if (currentSong==2){
                song.src = songs[2];
                songTitle.textContent = "Sub Urban - Cradles [Bass Boosted - HQ].mp3";   
            }
    
            song.play();    
        }
        
        function playOrPauseSong(){
            
            if(song.paused){
                song.play();
                $("#play img").attr("src","Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","Play.png");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            
            var position = song.currentTime / song.duration;
            
            fillBar.style.width = position * 100 +'%';
        });
        
    
        function next(){
            
            currentSong++;
            if(currentSong > 2){
                currentSong = 0;
            }
            playSong();
            $("#play img").attr("src");
            $("#image img").attr("src");
            $("#bg img").attr("src");
        }
    
        function pre(){
            
            currentSong--;
            if(currentSong < 0){
                currentSong = 2;
            }
            playSong();
            $("#play img").attr("src","Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }