# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ConventionCharacter.create!(name: 'Waldo', location: [2157, 606], group: 1)
ConventionCharacter.create!(name: 'Philip J. Fry', location: [2967, 357], group: 1)
ConventionCharacter.create!(name: 'Finn the Human', location: [386, 2452], group: 1)
ConventionCharacter.create!(name: 'Louise Belcher', location: [1238, 494], group: 1)
ConventionCharacter.create!(name: 'Turanga Leela', location: [1412, 1500], group: 1)
ConventionCharacter.create!(name: 'Optimus Prime', location: [3522, 1920], group: 1)
ConventionCharacter.create!(name: 'Homer Simpson', location: [1856, 2364], group: 1)
ConventionCharacter.create!(name: 'Sub Zero', location: [1428, 124], group: 1)

Score.create!(name: 'Chris', score: 27, character_group: 1)

ConventionCharacter.create!(name: 'Sansa Stark', location: [3216, 172], group: 2)
ConventionCharacter.create!(name: 'PaRappa the Rapper', location: [766, 1020], group: 2)
ConventionCharacter.create!(name: 'King Leonidas', location: [974, 1876], group: 2)
ConventionCharacter.create!(name: 'Hank Hill', location: [1256, 2436], group: 2)
ConventionCharacter.create!(name: 'Dorothy', location: [3296, 1800], group: 2)
ConventionCharacter.create!(name: 'Captain Planet', location: [1862, 1478], group: 2)
ConventionCharacter.create!(name: 'Ronald McDonald', location: [1252, 110], group: 2)
ConventionCharacter.create!(name: 'Loki', location: [1194, 1718], group: 2)

ConventionCharacter.create!(name: 'Calvin and Hobbes', location: [76, 1344], group: 3)
ConventionCharacter.create!(name: 'Invader Zim', location: [2318, 294], group: 3)
ConventionCharacter.create!(name: 'Squirtle', location: [2406, 2288], group: 3)
ConventionCharacter.create!(name: 'Wonder Woman', location: [624, 868], group: 3)
ConventionCharacter.create!(name: 'Master Chief', location: [1988, 414], group: 3)
ConventionCharacter.create!(name: 'Zero Suit Samus', location: [2800, 1464], group: 3)
ConventionCharacter.create!(name: 'Kermit', location: [2840, 1922], group: 3)
ConventionCharacter.create!(name: 'Piece of Toast', location: [1264, 918], group: 3)