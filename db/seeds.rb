# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or find_or_create_by!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.find_or_create_by!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.find_or_create_by!(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

user1 = User.find_or_create_by!(username: "jimmythanhnguyen", password: "pleasehireme")
user1.photo.attach(io: open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/headshot.jpg'), filename: 'headshot.jpg')

user2 = User.find_or_create_by!(username: "Batman", password: "batman")
user2.photo.attach(io: open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/batman.jpg'), filename: 'batman.jpg')

user3 = User.find_or_create_by!(username: "Superman", password: "superman")
user3.photo.attach(io: open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/superman.jpeg'), filename: 'superman.jpeg')

user4 = User.find_or_create_by!(username: "Flash", password: "flash12")
user4.photo.attach(io: open('https://seed-jimmyjams.s3-us-west-1.amazonaws.com/flash.jpg'), filename: 'flash.jpg')



Song.destroy_all

song1 = Song.find_or_create_by!(title: 'Sunflower', artist: 'Post Malone & Swae Lee', uploader_id: user1.id)
song2 = Song.find_or_create_by!(title: 'No Role Modelz', artist: 'J. Cole', uploader_id: user2.id)
song3 = Song.find_or_create_by!(title: 'Call Me Maybe', artist: 'Carly R. Jepsen', uploader_id: user3.id)
song4 = Song.find_or_create_by!(title: 'Hey Soul Sister', artist: 'Train', uploader_id: user4.id)
song5 = Song.find_or_create_by!(title: "Firestone", artist: 'Kygo  ft. Conrad Sewell', uploader_id: user1.id)
song6 = Song.find_or_create_by!(title: 'Best Part', artist: 'Daniel Caesar', uploader_id: user1.id)
song7 = Song.find_or_create_by!(title: '1-800-273-8255', artist: 'Logic ft. Alessia Cara & Khalid', uploader_id: user2.id)
song8 = Song.find_or_create_by!(title: 'My Girl', artist: 'The Temptations', uploader_id: user2.id)
song9 = Song.find_or_create_by!(title: 'Honesty', artist: 'Pink$weat', uploader_id: user3.id)
song10 = Song.find_or_create_by!(title: 'Come Back To Earth', artist: 'Mac Miller', uploader_id: user3.id)
song11 = Song.find_or_create_by!(title: 'Is It Love', artist: '3LAU feat. Yeah Boy', uploader_id: user4.id)
song12 = Song.find_or_create_by!(title: 'Sunday Morning', artist: 'Maroon 5', uploader_id: user4.id)
song13 = Song.find_or_create_by!(title: 'Waiting for Love', artist: 'Avicii', uploader_id: user1.id)





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


Comment.destroy_all

comment1 = Comment.find_or_create_by!(body: 'This is freaking cool wow man!', song_id: song1.id, user_id: user1.id)
comment2 = Comment.find_or_create_by!(body: 'hahahha super dope beat', song_id: song1.id, user_id: user1.id)
comment3 = Comment.find_or_create_by!(body: 'ugh i can listen to this all day', song_id: song1.id, user_id: user3.id)
comment4 = Comment.find_or_create_by!(body: '<3333 im in love with this song', song_id: song1.id, user_id: user4.id)

comment5 = Comment.find_or_create_by!(body: 'this is now my new jam', song_id: song2.id, user_id: user1.id)
comment6 = Comment.find_or_create_by!(body: 'new favorite awesome song', song_id: song2.id, user_id: user2.id)
comment7 = Comment.find_or_create_by!(body: 'radddd!1!', song_id: song2.id, user_id: user4.id)
comment8 = Comment.find_or_create_by!(body: 'fantastic cant be beat', song_id: song2.id, user_id: user3.id)


comment9 = Comment.find_or_create_by!(body: 'i heard better', song_id: song3.id, user_id: user2.id)
comment10 = Comment.find_or_create_by!(body: 'idk what the other comment meant but this song is great', song_id: song3.id, user_id: user3.id)
comment11 = Comment.find_or_create_by!(body: 'wonderful', song_id: song3.id, user_id: user4.id)
comment12 = Comment.find_or_create_by!(body: 'best song ever', song_id: song3.id, user_id: user4.id)


comment13 = Comment.find_or_create_by!(body: 'going to listen to this on the car rides home', song_id: song4.id, user_id: user3.id)
comment14 = Comment.find_or_create_by!(body: 'what a great song', song_id: song4.id, user_id: user1.id)
comment15 = Comment.find_or_create_by!(body: 'coooliiiooo', song_id: song4.id, user_id: user2.id)
comment16 = Comment.find_or_create_by!(body: '!!!!! ahh im so in love with this', song_id: song4.id, user_id: user2.id)


comment17 = Comment.find_or_create_by!(body: 'when did this come out?', song_id: song5.id, user_id: user2.id)
comment18 = Comment.find_or_create_by!(body: 'love love love love', song_id: song5.id, user_id: user3.id)
comment19 = Comment.find_or_create_by!(body: 'love ittt', song_id: song5.id, user_id: user4.id)
comment20 = Comment.find_or_create_by!(body: 'sweet song', song_id: song5.id, user_id: user4.id)

comment21 = Comment.find_or_create_by!(body: 'CANNNOT WAIT FOR THE ALBUM', song_id: song6.id, user_id: user2.id)
comment22 = Comment.find_or_create_by!(body: 'wowzers', song_id: song6.id, user_id: user3.id)
comment23 = Comment.find_or_create_by!(body: 'dammmmmmmm gonna have this stuck in my head', song_id: song6.id, user_id: user4.id)
comment24 = Comment.find_or_create_by!(body: 'loveeee', song_id: song6.id, user_id: user4.id)

comment25 = Comment.find_or_create_by!(body: 'ill listen to this all day', song_id: song7.id, user_id: user2.id)
comment26 = Comment.find_or_create_by!(body: 'even my kid is humming this to me', song_id: song7.id, user_id: user3.id)
comment27 = Comment.find_or_create_by!(body: 'beautiful love this song', song_id: song7.id, user_id: user4.id)
comment28 = Comment.find_or_create_by!(body: 'super dope', song_id: song7.id, user_id: user4.id)
comment29 = Comment.find_or_create_by!(body: 'sickkkkkkkkkkk', song_id: song7.id, user_id: user4.id)

comment30 = Comment.find_or_create_by!(body: 'i wish my dad sings this to me', song_id: song8.id, user_id: user2.id)
comment31 = Comment.find_or_create_by!(body: 'fantastic song makes me want to dance', song_id: song8.id, user_id: user3.id)
comment32 = Comment.find_or_create_by!(body: 'superr cooool', song_id: song8.id, user_id: user4.id)
comment33 = Comment.find_or_create_by!(body: 'wowwwww great song', song_id: song8.id, user_id: user4.id)
comment34 = Comment.find_or_create_by!(body: 'when did this come out?', song_id: song8.id, user_id: user4.id)
comment35 = Comment.find_or_create_by!(body: 'awesome', song_id: song8.id, user_id: user4.id)

comment36 = Comment.find_or_create_by!(body: 'i approve!', song_id: song9.id, user_id: user2.id)
comment37 = Comment.find_or_create_by!(body: 'super super cool ', song_id: song9.id, user_id: user3.id)
comment38 = Comment.find_or_create_by!(body: 'cannot get enough of this', song_id: song9.id, user_id: user4.id)



comment39 = Comment.find_or_create_by!(body: 'this is supercalifragiliciousespialicdocious', song_id: song10.id, user_id: user2.id)
comment40 = Comment.find_or_create_by!(body: 'i would rather listen to this song than save the world', song_id: song10.id, user_id: user3.id)
comment41 = Comment.find_or_create_by!(body: 'LOVEEEEEEEE ittt', song_id: song10.id, user_id: user4.id)
comment42 = Comment.find_or_create_by!(body: 'bam bam cann not get enough of thiss', song_id: song10.id, user_id: user4.id)

comment43 = Comment.find_or_create_by!(body: 'woahhh super wicked dope', song_id: song11.id, user_id: user2.id)
comment44 = Comment.find_or_create_by!(body: 'RADDDDDDD', song_id: song11.id, user_id: user3.id)
comment45 = Comment.find_or_create_by!(body: 'I would buy this song !', song_id: song11.id, user_id: user4.id)


comment46 = Comment.find_or_create_by!(body: 'Oh man this song is so cool', song_id: song12.id, user_id: user2.id)
comment47 = Comment.find_or_create_by!(body: 'wonderful great can get enough', song_id: song12.id, user_id: user3.id)
comment48 = Comment.find_or_create_by!(body: 'super cool makes me want to dance', song_id: song12.id, user_id: user4.id)


comment49 = Comment.find_or_create_by!(body: 'classic this is the song i need', song_id: song13.id, user_id: user2.id)
comment50 = Comment.find_or_create_by!(body: 'cant go wrong with this', song_id: song13.id, user_id: user3.id)
comment51 = Comment.find_or_create_by!(body: 'love ittt', song_id: song13.id, user_id: user4.id)


comment52 = Comment.find_or_create_by!(body: 'graat song?', song_id: song11.id, user_id: user2.id)
comment53 = Comment.find_or_create_by!(body: 'lovving this', song_id: song11.id, user_id: user3.id)
comment54 = Comment.find_or_create_by!(body: 'super awesome', song_id: song11.id, user_id: user4.id)
