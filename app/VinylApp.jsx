var React = require("react");
var SearchComponent = require('./SearchComponent.jsx');
var AlbumComponent = require('./AlbumComponent.jsx');
var VinylApp = React.createClass({
	render: function() {
        return <div><h1>{this.state.currentAlbumData.title}</h1>
        <SearchComponent performAlbumSearch={this.performAlbumSearch}/>
       <AlbumComponent 
           currentAlbumData={this.state.currentAlbumData}/>
        </div>;
	},
	getInitialState: function(){
		var stateObj = {
			albums: [],
            currentAlbumData: ""
		};
		return stateObj;
	},
    performAlbumSearch: function(search) {
        $.get('/search/artist/' + search, function(data){
            console.log(data);
        });
    },
	getAlbums: function() {
		var that = this;
		$.get('/albums', function(result) {
			that.setState({
				messages: result
			});
		}, 'json');
	},
	componentDidMount: function() {
        
        var that = this;
              that.setState({
        currentAlbumData: {"styles": ["Hard Rock"], "videos": [{"duration": 255, "embed": true, "title": "AC/DC - Back in Black", "description": "AC/DC - Back in Black", "uri": "https://www.youtube.com/watch?v=pAgnJDJN4VA"}, {"duration": 212, "embed": true, "title": "AC/DC - You Shook Me All Night Long", "description": "AC/DC - You Shook Me All Night Long", "uri": "https://www.youtube.com/watch?v=Bomv-6CJSfM"}, {"duration": 211, "embed": true, "title": "AC/DC - You Shook Me All Night Long", "description": "AC/DC - You Shook Me All Night Long", "uri": "https://www.youtube.com/watch?v=Lo2qQmj0_h4"}, {"duration": 241, "embed": true, "title": "AC/DC - Back in Black", "description": "AC/DC - Back in Black", "uri": "https://www.youtube.com/watch?v=j5rGm3kdTuk"}, {"duration": 217, "embed": true, "title": "AC/DC - What Do You Do For Money Honey", "description": "AC/DC - What Do You Do For Money Honey", "uri": "https://www.youtube.com/watch?v=7iF26wKF-_M"}], "series": [], "labels": [{"name": "Albert Productions", "entity_type": "1", "catno": "APLP 046", "resource_url": "https://api.discogs.com/labels/33440", "id": 33440, "entity_type_name": "Label"}], "community": {"status": "Accepted", "rating": {"count": 99, "average": 4.45}, "want": 568, "contributors": [{"username": "Spankwa", "resource_url": "https://api.discogs.com/users/Spankwa"}, {"username": "muetdhiver", "resource_url": "https://api.discogs.com/users/muetdhiver"}, {"username": "adrien2329", "resource_url": "https://api.discogs.com/users/adrien2329"}, {"username": "no.ambition", "resource_url": "https://api.discogs.com/users/no.ambition"}, {"username": "Wegi", "resource_url": "https://api.discogs.com/users/Wegi"}, {"username": "vokuhila", "resource_url": "https://api.discogs.com/users/vokuhila"}, {"username": "skproductions", "resource_url": "https://api.discogs.com/users/skproductions"}, {"username": "jo.jo", "resource_url": "https://api.discogs.com/users/jo.jo"}, {"username": "Masterpaul", "resource_url": "https://api.discogs.com/users/Masterpaul"}, {"username": "nadsat", "resource_url": "https://api.discogs.com/users/nadsat"}, {"username": "orjanbirkus", "resource_url": "https://api.discogs.com/users/orjanbirkus"}, {"username": "motosanta2011", "resource_url": "https://api.discogs.com/users/motosanta2011"}], "have": 725, "submitter": {"username": "Spankwa", "resource_url": "https://api.discogs.com/users/Spankwa"}, "data_quality": "Needs Vote"}, "year": 1980, "images": [{"uri": "", "height": 600, "width": 600, "resource_url": "", "type": "primary", "uri150": ""}, {"uri": "", "height": 600, "width": 600, "resource_url": "", "type": "secondary", "uri150": ""}, {"uri": "", "height": 600, "width": 600, "resource_url": "", "type": "secondary", "uri150": ""}, {"uri": "", "height": 600, "width": 600, "resource_url": "", "type": "secondary", "uri150": ""}, {"uri": "", "height": 579, "width": 600, "resource_url": "", "type": "secondary", "uri150": ""}, {"uri": "", "height": 579, "width": 600, "resource_url": "", "type": "secondary", "uri150": ""}], "format_quantity": 1, "id": 400591, "genres": ["Rock"], "thumb": "", "extraartists": [{"join": "", "name": "Cliff Williams", "anv": "", "tracks": "", "role": "Bass", "resource_url": "https://api.discogs.com/artists/402564", "id": 402564}, {"join": "", "name": "Phil Rudd", "anv": "", "tracks": "", "role": "Drums", "resource_url": "https://api.discogs.com/artists/402565", "id": 402565}, {"join": "", "name": "Tony Platt", "anv": "", "tracks": "", "role": "Engineer", "resource_url": "https://api.discogs.com/artists/252388", "id": 252388}, {"join": "", "name": "Benjamin Armbrister", "anv": "Benji Armbrister", "tracks": "", "role": "Engineer [Assistant]", "resource_url": "https://api.discogs.com/artists/462253", "id": 462253}, {"join": "", "name": "Jack Nuber", "anv": "Jack Newber", "tracks": "", "role": "Engineer [Assistant]", "resource_url": "https://api.discogs.com/artists/295825", "id": 295825}, {"join": "", "name": "Brad Samuelsohn", "anv": "", "tracks": "", "role": "Engineer [Mixing]", "resource_url": "https://api.discogs.com/artists/391498", "id": 391498}, {"join": "", "name": "Angus Young", "anv": "", "tracks": "", "role": "Lead Guitar", "resource_url": "https://api.discogs.com/artists/273544", "id": 273544}, {"join": "", "name": "Paul Bryant (2)", "anv": "", "tracks": "", "role": "Mastered By [Vinyl]", "resource_url": "https://api.discogs.com/artists/466513", "id": 466513}, {"join": "", "name": "Robert John Lange", "anv": "Robert John \"Mutt\" Lange", "tracks": "", "role": "Producer", "resource_url": "https://api.discogs.com/artists/239886", "id": 239886}, {"join": "", "name": "Malcolm Young", "anv": "", "tracks": "", "role": "Rhythm Guitar", "resource_url": "https://api.discogs.com/artists/273543", "id": 273543}, {"join": "", "name": "Brian Johnson", "anv": "", "tracks": "", "role": "Vocals", "resource_url": "https://api.discogs.com/artists/402566", "id": 402566}, {"join": "", "name": "Angus Young", "anv": "Young", "tracks": "", "role": "Written-By", "resource_url": "https://api.discogs.com/artists/273544", "id": 273544}, {"join": "", "name": "Brian Johnson", "anv": "Johnson", "tracks": "", "role": "Written-By", "resource_url": "https://api.discogs.com/artists/402566", "id": 402566}, {"join": "", "name": "Malcolm Young", "anv": "Young", "tracks": "", "role": "Written-By", "resource_url": "https://api.discogs.com/artists/273543", "id": 273543}], "title": "Back In Black", "artists": [{"join": ",", "name": "AC/DC", "anv": "", "tracks": "", "role": "", "resource_url": "https://api.discogs.com/artists/84752", "id": 84752}], "date_changed": "2016-05-15T03:06:36-07:00", "master_id": 8471, "tracklist": [{"duration": "5:10", "position": "A1", "type_": "track", "title": "Hells Bells"}, {"duration": "5:17", "position": "A2", "type_": "track", "title": "Shoot To Thrill"}, {"duration": "3:36", "position": "A3", "type_": "track", "title": "What You Do For Money Honey"}, {"duration": "3:31", "position": "A4", "type_": "track", "title": "Given The Dog A Bone"}, {"duration": "4:12", "position": "A5", "type_": "track", "title": "Let Me Put My Love Into You"}, {"duration": "4:17", "position": "B1", "type_": "track", "title": "Back In Black"}, {"duration": "3:29", "position": "B2", "type_": "track", "title": "You Shook Me All Night Long"}, {"duration": "4:01", "position": "B3", "type_": "track", "title": "Have A Drink On Me"}, {"duration": "4:04", "position": "B4", "type_": "track", "title": "Shake A Leg"}, {"duration": "4:12", "position": "B5", "type_": "track", "title": "Rock And Roll Ain't Noise Pollution"}], "status": "Accepted", "released_formatted": "25 Jul 1980", "estimated_weight": 230, "master_url": "https://api.discogs.com/masters/8471", "released": "1980-07-25", "date_added": "2005-02-17T06:05:15-08:00", "country": "Australia", "notes": "Recorded at Compass Point Studios April-May 1980.\nMade by E.M.I. (Australia) Limited, Sydney, N.S.W.\n\n(C) 1980 J. Albert & Son Pty. Ltd.\n(P) 1980 Albert Productions \n\nCat on cover: APLP.046\nCat on label: APLP-046", "identifiers": [{"type": "Matrix / Runout", "description": "Side 1, runout, stamped", "value": "APLP 046 A MAXICUT"}, {"type": "Matrix / Runout", "description": "Side 2, runout, stamped", "value": "APLP 046 B MAXICUT"}], "companies": [{"name": "Compass Point Studios", "entity_type": "23", "catno": "", "resource_url": "https://api.discogs.com/labels/264020", "id": 264020, "entity_type_name": "Recorded At"}, {"name": "EMI (Australia) Limited", "entity_type": "16", "catno": "", "resource_url": "https://api.discogs.com/labels/154119", "id": 154119, "entity_type_name": "Made By"}, {"name": "Albert Productions", "entity_type": "13", "catno": "", "resource_url": "https://api.discogs.com/labels/33440", "id": 33440, "entity_type_name": "Phonographic Copyright (p)"}, {"name": "J. Albert & Son Pty. Ltd.", "entity_type": "14", "catno": "", "resource_url": "https://api.discogs.com/labels/268774", "id": 268774, "entity_type_name": "Copyright (c)"}], "uri": "https://www.discogs.com/ACDC-Back-In-Black/release/400591", "formats": [{"qty": "1", "descriptions": ["LP", "Album"], "name": "Vinyl"}], "resource_url": "https://api.discogs.com/releases/400591", "data_quality": "Needs Vote"},
                render: function() {
                    return (
                      <div>
                        
                      </div>
                    );
          }
        
      });
//        db.getRelease(176126, function(err, data){
//            that.setState({
//               data: data 
//            });
//        });
	}
});

module.exports = VinylApp;





