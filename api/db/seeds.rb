# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

10.times do
  user = User.create(email: Faker::Internet.email, password: Faker::String.random(length: 8))
end

30.times do
  articles = Article.create(title: Faker::Book.title, content: Faker::Book.author, user_id: rand(1..10))
end

admin = User.create(email: 'admin@admin.fr', password: 'admins')
