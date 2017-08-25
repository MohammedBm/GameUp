class Room < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :room_users, dependent: :destroy
  has_many :users, through: :room_users, source: :user

  # before_save :validate_room_limit

  validates(:title, { presence: { message: 'must be provided' },
                      uniqueness: true
                    })
  validates(:game, { presence: true, length: { minimum: 5, maximum: 2000 }})

  validates(:creater, { presence: true, length: { minimum: 3, maximum: 20 }})

  private

  # def validate_room_limit
  #   if self.users.count >  self.limit
  #     errors.add(:users, "Room is full, already has #{self.users.count} players")
  #   end
  #
  #   Rails.logger.info('adfjaflkjdslfkjdslfkj sdflkjds flksjdlkf')
  # end
end
