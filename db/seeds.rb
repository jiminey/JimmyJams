# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

user1 = User.create(username: "jimmythanhnguyen", password: "pleasehireme")

Song.destroy_all

song1 = Song.create(title: 'Sunflower', artist: 'Post Malone & Swae Lee')
song2 = Song.create(title: 'No Role Modelz', artist: 'J. Cole')
song3 = Song.create(title: 'Call Me Maybe', artist: 'Carly R. Jepsen')
song4 = Song.create(title: 'Hey Soul Sister', artist: 'Train')
song5 = Song.create(title: "Firestone ft. Conrad Sewell", artist: 'Kygo')
song6 = Song.create(title: 'Best Part', artist: 'Daniel Caesar')
song7 = Song.create(title: '1-800-273-8255 ft. Alessia Cara & Khalid', artist: 'Logic')
song8 = Song.create(title: 'My Girl', artist: 'The Temptations')
song9 = Song.create(title: 'Honesty', artist: 'Pink$weat')
song10 = Song.create(title: 'Waiting for Love', artist: 'Avicii')
song11 = Song.create(title: 'Come Back To Earth', artist: 'Mac Miller')
song12 = Song.create(title: 'Is It Love', artist: '3LAU feat. Yeah Boy')

song1.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/nFXdMNsnQMwvYnSvQbN9udMv'), filename: 'sunflower.jpg')

song2.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/vBSvntsgbnsiPngxomzYHyYG'), filename: 'jcole.jpg')

song3.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/qg6zuTS8ZtfUg4VU5Kf5PZcQ'), filename: 'callmemaybe.jpg')

song4.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/JWQZUFdxAQk8o9bbfW5EghDA'), filename: 'heysoulsister.jpg')

song5.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/TuGaGaTxKwg9FCEhm2pX4HKP'), filename: 'firestone.jpg')

song6.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/Lg1Eoh8QUyn2TqRxzt3T2fM3'), filename: 'bestpart.jpg')

song7.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/uB2zDF1AwQARcHPm65UpPqYQ'), filename: 'logic.jpg')

song8.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/2ZxQGDKBwJaSVZK3vG55VhoY'), filename: 'mygirl.jpg')

song9.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/g1UUfmZCH3EReJzpCJgrwtbs'), filename: 'honesty.jpg')

song10.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/XBagDbwjhhQatCoDApjBy5if'), filename: 'waitingforlove.jpg')

song11.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/jJ8of2myVKamdQRmSWZh7rTJ'), filename: 'macmiller.jpg')

song12.album_cover(io: open('https://jimmyjams-dev.s3-us-west-1.amazonaws.com/wRTYFfGdUKfA54rVMTdCYzhY'), filename: 'blau.jpg')
