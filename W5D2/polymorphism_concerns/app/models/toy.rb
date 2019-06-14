class Toy < ApplicationRecord
  validates :name, uniqueness: { scope: [:toyable] }
  belongs_to :toyable, polymorphic: true

  has_many :corgis
  has_many :cats
end
