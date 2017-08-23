class Room < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user
  validates(:title, { presence: { message: 'must be provided' },
                      uniqueness: true
                    })
  validates(:game, { presence: true, length: { minimum: 5, maximum: 2000 }})

  validates(:creater, { presence: true, length: { minimum: 3, maximum: 20 }})





end
