//require('./landing');
 //require('./album');
 //require('./collection');
 //require('./profile');

var albumPicasso = {
   name: 'The Colors',
   artist: 'Pablo Picasso',
   label: 'Cubism',
   year: '1881',
   albumArtUrl: '/images/album-placeholder.png',
 
   songs: [
       { name: 'Blue', length: '4:26' },
       { name: 'Green', length: '3:14' },
       { name: 'Red', length: '5:01' },
       { name: 'Pink', length: '3:21'},
       { name: 'Magenta', length: '2:15'}
     ]
 };
 
var playBar={
  playerUrl:'/templates/player_bar.html'
};
 
blocJams = angular.module('BlocJams', ['ui.router']);

blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });

   $stateProvider.state('collection', {
     url: '/collection',
     controller: 'Collection.controller',
     templateUrl: '/templates/collection.html'
   });

    $stateProvider.state('album', {
     url: '/album',
     controller: 'Album.controller',
     templateUrl: '/templates/album.html'
   });

    $stateProvider.state('player_bar',{
      url: '/player_bar',
      controller: 'Player_bar.controller',
      templateUrl:'/templates/player_bar.html'
    });

 }]);
 
 // This is a cleaner way to call the controller than crowding it on the module definition.
 blocJams.controller('Landing.controller', ['$scope', function($scope) {
   $scope.subText = "Turn the music up!";

   $scope.subTextClicked = function() {
     $scope.subText += '!';
   };      

   $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
   ];
 
 $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
 
 $scope.shuffleClicked = function(){
    $scope.shuffle($scope.albumURLs);
 };

}]);

 blocJams.controller('Collection.controller', ['$scope', function($scope) {
  $scope.albums = [];
   for (var i = 0; i < 33; i++) {
     $scope.albums.push(angular.copy(albumPicasso));
   };

  $scope.offHoverSong = function(song) {
    hoveredSong = null;
  };

    $scope.getSongState = function(song) {
      if (song === playingSong) {
        return 'playing';
      }
      else if (song === hoveredSong) {
        return 'hovered';
      }
      return 'default';
    };
 
    $scope.playSong = function(song) {
      playingSong = song;
    };
 
    $scope.pauseSong = function(song) {
      playingSong = null;
    };
}]);


blocJams.controller('Album.controller', ['$scope','SongPlayer', function($scope, SongPlayer) {
   $scope.album = angular.copy(albumPicasso);

<<<<<<< HEAD
   var hoveredSong = null;
   var playingSong = null;
=======
 var hoveredSong = null;
   
>>>>>>> song-player-service
 
   $scope.onHoverSong = function(song) {
     hoveredSong = song;
   };
 
   $scope.offHoverSong = function(song) {
     hoveredSong = null;
   };
  
<<<<<<< HEAD
   $scope.getSongState = function(song) {
     if (song === playingSong) {
=======
  $scope.getSongState = function(song) {
     if (song === SongPlayer.currentSong && SongPlayer.playing) {
>>>>>>> song-player-service
       return 'playing';
     }
     else if (song === hoveredSong) {
       return 'hovered';
     }
     return 'default';
   };

<<<<<<< HEAD
   $scope.playSong = function(song) {
      playingSong = song;
    };
 
   $scope.pauseSong = function(song) {
      playingSong = null;
=======
    $scope.playSong = function(song) {
      SongPlayer.setSong($scope.album, song);
      SongPlayer.play();
    };
 
    $scope.pauseSong = function(song) {
       SongPlayer.pause();
>>>>>>> song-player-service
    };

 }]);

<<<<<<< HEAD
blocJams.controller('Player_bar.controller', ['$scope', function($scope){
   $scope.player_bar = angular.copy(playBar);

}]);

=======
blocJams.controller('PlayerBar.controller', ['$scope', 'SongPlayer', function($scope, SongPlayer) {
   $scope.songPlayer = SongPlayer;
 }]);
 
  
 blocJams.service('SongPlayer', function() {
   return {
     currentSong: null,
     currentAlbum: null,
     playing: false,
 
     play: function() {
       this.playing = true;
     },
     pause: function() {
       this.playing = false;
     },
     setSong: function(album, song) {
       this.currentAlbum = album;
       this.currentSong = song;
     }
   };
 });
>>>>>>> song-player-service
