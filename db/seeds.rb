# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ConventionCharacter.create!(name: 'Waldo', location: [2157, 606])
ConventionCharacter.create!(name: 'Philip J. Fry', location: [2967, 357])
ConventionCharacter.create!(name: 'Finn the Human', location: [386, 2452])
ConventionCharacter.create!(name: 'Louise Belcher', location: [1238, 494])
ConventionCharacter.create!(name: 'Turanga Leela', location: [1412, 1500])
ConventionCharacter.create!(name: 'Optimus Prime', location: [3522, 1920])
ConventionCharacter.create!(name: 'Homer Simpson', location: [1856, 2364])
ConventionCharacter.create!(name: 'Sub Zero', location: [1428, 124])

Score.create!(name: 'Chris', score: 63)