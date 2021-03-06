class RoomSerializer < ActiveModel::Serializer
  attributes :id,   :title, :creater, :activity,:time, :game, :limit

  belongs_to :user, key: :author
  has_many :comments
  has_many :users
  has_many :room_users

 class UserSerializer < ActiveModel::Serializer
   attributes :id, :full_name, :username
 end

 class CommentSerializer < ActiveModel::Serializer
   attributes :id, :body, :author_full_name, :author_username,:created_at, :updated_at

   def author_full_name
     object.user&.full_name
   end
   def author_username
     object.user&.username
   end
 end

  class RoomUserSerializer < ActiveModel::Serializer
    attributes :id, :user_id
  end


end
