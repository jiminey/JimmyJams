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
user1.photo.attach(io: open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/headshot.jpg'), filename: 'headshot.jpg')

Song.destroy_all

song1 = Song.create(title: 'Sunflower', artist: 'Post Malone & Swae Lee', uploader_id: user1.id)
song2 = Song.create(title: 'No Role Modelz', artist: 'J. Cole', uploader_id: user1.id)
song3 = Song.create(title: 'Call Me Maybe', artist: 'Carly R. Jepsen', uploader_id: user1.id)
song4 = Song.create(title: 'Hey Soul Sister', artist: 'Train', uploader_id: user1.id)
song5 = Song.create(title: "Firestone", artist: 'Kygo  ft. Conrad Sewell', uploader_id: user1.id)
song6 = Song.create(title: 'Best Part', artist: 'Daniel Caesar', uploader_id: user1.id)
song7 = Song.create(title: '1-800-273-8255', artist: 'Logic ft. Alessia Cara & Khalid', uploader_id: user1.id)
song8 = Song.create(title: 'My Girl', artist: 'The Temptations', uploader_id: user1.id)
song9 = Song.create(title: 'Honesty', artist: 'Pink$weat', uploader_id: user1.id)
song10 = Song.create(title: 'Come Back To Earth', artist: 'Mac Miller', uploader_id: user1.id)
song11 = Song.create(title: 'Is It Love', artist: '3LAU feat. Yeah Boy', uploader_id: user1.id)
song12 = Song.create(title: 'Sunday Morning', artist: 'Maroon 5', uploader_id: user1.id)
song13 = Song.create(title: 'Waiting for Love', artist: 'Avicii', uploader_id: user1.id)





album_cover_file1 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Sunflower.jpg') 
song1.album_cover.attach(io: album_cover_file1, filename: 'Sunflower.jpg')
song_file1 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sunflower.mp3') 
song1.song_file.attach(io: song_file1, filename: 'sunflower.mp3')

album_cover_file2 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/No+Role+Modelz.jpg') 
song2.album_cover.attach(io: album_cover_file2, filename: 'No Role Modelz.jpg')
song_file2 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/jcole.mp3') 
song2.song_file.attach(io: song_file2, filename: 'jcole.mp3')

album_cover_file3 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Call+Me+Maybe.jpg') 
song3.album_cover.attach(io: album_cover_file3, filename: 'Call Me Maybe.png')
song_file3 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/callmemaybe.mp3') 
song3.song_file.attach(io: song_file3, filename: 'callmemaybe.mp3')

album_cover_file4 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Hey+Soul+Sister.jpg') 
song4.album_cover.attach(io: album_cover_file4, filename: 'Hey Soul Sister.jpg')
song_file4 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/heysoulsister.mp3') 
song4.song_file.attach(io: song_file4, filename: 'heysoulsister.mp3')

album_cover_file5 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Firestone.jpg') 
song5.album_cover.attach(io: album_cover_file5, filename: 'Firestone.jpg')
song_file5 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/firestone.mp3') 
song5.song_file.attach(io: song_file5, filename: 'firestone.mp3')

album_cover_file6 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Best+Part.jpg') 
song6.album_cover.attach(io: album_cover_file6, filename: 'Best Part.jpg')
song_file6 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/bestpart.mp3') 
song6.song_file.attach(io: song_file6, filename: 'bestpart.mp3')

album_cover_file7 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/1-800-273-8255.jpg') 
song7.album_cover.attach(io: album_cover_file7, filename: '1-800-273-8255.jpg')
song_file7 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/logic.mp3') 
song7.song_file.attach(io: song_file7, filename: 'logic.mp3')

album_cover_file8 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/My+Girl.jpg') 
song8.album_cover.attach(io: album_cover_file8, filename: 'My Girl.jpg')
song_file8 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/mygirl.mp3') 
song8.song_file.attach(io: song_file8, filename: 'mygirl.mp3')

album_cover_file9 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Honesty.jpg') 
song9.album_cover.attach(io: album_cover_file9, filename: 'Honesty.jpg')
song_file9 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/honesty.mp3') 
song9.song_file.attach(io: song_file9, filename: 'honesty.mp3')

album_cover_file10 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Come+Back+to+Earth.jpg') 
song10.album_cover.attach(io: album_cover_file10, filename: 'Come Back to Earth.png')
song_file10 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/macmiller.mp3') 
song10.song_file.attach(io: song_file10, filename: 'macmiller.mp3')

album_cover_file11 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Is+It+Love.jpg') 
song11.album_cover.attach(io: album_cover_file11, filename: 'Is It Love.jpg')
song_file11 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/blau.mp3') 
song11.song_file.attach(io: song_file11, filename: 'blau.mp3')

album_cover_file12 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Sunday+Morning.jpg') 
song12.album_cover.attach(io: album_cover_file12, filename: 'Sunday Morning.png')
song_file12 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/sundaymorning.mp3') 
song12.song_file.attach(io: song_file12, filename: 'sundaymorning.mp3')

album_cover_file13 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/Waiting+for+Love.jpg') 
song13.album_cover.attach(io: album_cover_file13, filename: 'Waiting for Love.png')
song_file13 = open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/waitingforlove.mp3') 
song13.song_file.attach(io: song_file13, filename: 'waitingforlove.mp3')

