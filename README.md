*Exo :*
* Tous les films qui ont ED CHASE dans les acteurs :  
`db.Sakila_films.find({Actors: {$elemMatch: {'Last name': 'CHASE', 'First name': 'ED'}}}).pretty()`

* Tous les documentaires horreur :  
`db.Sakila_films.find({Description: /documentary/i, Category: 'Horror'}).pretty()`

* Le nombre de films de catégorie G :  
`db.Sakila_films.find({Rating: 'G'}).count()`

* Tous les films de 2012 ou 2013, et qui durent entre 60 et 150 min:  
`db.video_movieDetails.find( {$and: [ {$or: [ {year: 2012}, {year: 2013} ] }, {runtime: {$gt: 60, $lt: 150}} ] }, {title: 1, year: 1, runtime: 1}).pretty()`

* Tous les films qui ont une image tomato ‘certified’ :  
`db.video_movieDetails.find({'tomato.image': 'certified'}, {title: 1}).pretty()`

* Les différents champs ‘rated’, et le nombre de films pour chacun :  
`db.video_movieDetails.aggregate([{$group: {_id: '$rated', count: {$sum: 1}}}])`
 
