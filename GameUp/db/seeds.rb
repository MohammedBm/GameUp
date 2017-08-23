# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Room.destroy_all
User.destroy_all
Comment.destroy_all

PASSWORD = '1q2w'
User.create full_name: 'Jon SNow', username: 'KingInTheNorth', email: 'mb@w.cn', password: PASSWORD

i ||= 0;
while i < 30 do
 u = User.create(
    full_name: Faker::Name.name,
    username: Faker::LeagueOfLegends.champion,
    email:Faker::Internet.safe_email,
    password: PASSWORD
  )
  i = i + 1;
 end


  100.times do
     Room.create(
      title: Faker::Lorem.sentence,
      creater: Faker::Superhero.name,
      activity: Faker::Lorem.sentence,
      game: Faker::Team.name,
      time: Faker::Time.forward(23),
      user_id: User.all.sample.id
    )
  end


rooms = Room.all

  rooms.each do
    rand(1..6).times do
      Comment.create(
        body: "add me on #{Faker::Team.name}",
        room_id: Room.all.sample.id,
        user_id: User.all.sample.id
      )
    end
  end

 puts Cowsay.say("Created #{User.count} Users", :tux)
 puts Cowsay.say("Created #{Room.count} Rooms", :cheese)
 puts Cowsay.say("Created #{Comment.count} Comments", :stimpy)
