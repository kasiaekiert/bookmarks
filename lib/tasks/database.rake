desc "Create faker database to test application"
#rake database 

task :database do
  100.times do
    mark.create(
      :name => Faker::Name.name
      :url => Faker::Internet.url
      :tag => Faker::Name.name
      )
    mark.save!
  end
end