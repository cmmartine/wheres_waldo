class Score < ApplicationRecord
  validates :name, presence: true, length: {minimum: 1, maximum: 10}
end
