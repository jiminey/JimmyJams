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

song1 = Song.create(title: 'Sunflower', artist: 'Post Malone & Swae Lee', uploader_id: user1.id)
song2 = Song.create(title: 'No Role Modelz', artist: 'J. Cole', uploader_id: user1.id)
song3 = Song.create(title: 'Call Me Maybe', artist: 'Carly R. Jepsen', uploader_id: user1.id)
song4 = Song.create(title: 'Hey Soul Sister', artist: 'Train', uploader_id: user1.id)
song5 = Song.create(title: "Firestone ft. Conrad Sewell", artist: 'Kygo', uploader_id: user1.id)
song6 = Song.create(title: 'Best Part', artist: 'Daniel Caesar', uploader_id: user1.id)
song7 = Song.create(title: '1-800-273-8255 ft. Alessia Cara & Khalid', artist: 'Logic', uploader_id: user1.id)
song8 = Song.create(title: 'My Girl', artist: 'The Temptations', uploader_id: user1.id)
song9 = Song.create(title: 'Honesty', artist: 'Pink$weat', uploader_id: user1.id)
song10 = Song.create(title: 'Waiting for Love', artist: 'Avicii', uploader_id: user1.id)
song11 = Song.create(title: 'Come Back To Earth', artist: 'Mac Miller', uploader_id: user1.id)
song12 = Song.create(title: 'Is It Love', artist: '3LAU feat. Yeah Boy', uploader_id: user1.id)
song13 = Song.create(title: 'Sunday Morning', artist: 'Maroon 5', uploader_id: user1.id)



album_cover_file1 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sunflower.jpg') 
song1.album_cover.attach(io: album_cover_file1, filename: 'sunflower.jpg')
song_file1 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sunflower.mp3') 
song1.song_file.attach(io: song_file1, filename: 'sunflower.mp3')

album_cover_file2 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/jcole.jpg') 
song1.album_cover.attach(io: album_cover_file2, filename: 'jcole.jpg')
song_file2 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/jcole.mp3') 
song1.song_file.attach(io: song_file2, filename: 'jcole.mp3')

album_cover_file3 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/callmemaybe.png') 
song1.album_cover.attach(io: album_cover_file3, filename: 'callmemaybe.png')
song_file3 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/callmemaybe.mp3') 
song1.song_file.attach(io: song_file3, filename: 'callmemaybe.mp3')

album_cover_file4 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/heysoulsister.jpg') 
song1.album_cover.attach(io: album_cover_file4, filename: 'heysoulsister.jpg')
song_file4 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/heysoulsister.mp3') 
song1.song_file.attach(io: song_file4, filename: 'heysoulsister.mp3')

album_cover_file5 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/firestone.jpg') 
song1.album_cover.attach(io: album_cover_file5, filename: 'firestone.jpg')
song_file5 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/firestone.mp3') 
song1.song_file.attach(io: song_file5, filename: 'firestone.mp3')

album_cover_file6 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/bestpart.jpg') 
song1.album_cover.attach(io: album_cover_file6, filename: 'bestpart.jpg')
song_file6 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/bestpart.mp3') 
song1.song_file.attach(io: song_file6, filename: 'bestpart.mp3')

album_cover_file7 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/logic.jpg') 
song1.album_cover.attach(io: album_cover_file7, filename: 'logic.jpg')
song_file7 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/logic.mp3') 
song1.song_file.attach(io: song_file7, filename: 'logic.mp3')

album_cover_file8 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/mygirl.jpg') 
song1.album_cover.attach(io: album_cover_file8, filename: 'mygirl.jpg')
song_file8 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/mygirl.mp3') 
song1.song_file.attach(io: song_file8, filename: 'mygirl.mp3')

album_cover_file9 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/honesty.jpg') 
song1.album_cover.attach(io: album_cover_file9, filename: 'honesty.jpg')
song_file9 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/honesty.mp3') 
song1.song_file.attach(io: song_file9, filename: 'honesty.mp3')

album_cover_file10 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/macmiller.png') 
song1.album_cover.attach(io: album_cover_file10, filename: 'macmiller.png')
song_file10 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/macmiller.mp3') 
song1.song_file.attach(io: song_file10, filename: 'macmiller.mp3')

album_cover_file11 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/blau.jpg') 
song1.album_cover.attach(io: album_cover_file11, filename: 'blau.jpg')
song_file11 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/blau.mp3') 
song1.song_file.attach(io: song_file11, filename: 'blau.mp3')

album_cover_file12 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sundaymorning.png') 
song1.album_cover.attach(io: album_cover_file12, filename: 'sundaymorning.png')
song_file12 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sundaymorning.mp3') 
song1.song_file.attach(io: song_file12, filename: 'sundaymorning.mp3')

album_cover_file13 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/waitingforlove.png') 
song1.album_cover.attach(io: album_cover_file13, filename: 'waitingforlove.png')
song_file13 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/waitingforlove.mp3') 
song1.song_file.attach(io: song_file13, filename: 'waitingforlove.mp3')

