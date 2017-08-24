class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :creater, :activity, :timestamps

  belongs_to :user, key: :author
  has_many :comments

 class UserSerializer < ActiveModel::Serializer
   attributes :id, :full_name, :username
 end

 class CommentSerializer < ActiveModel::Serializer
   belongs_to :room
   attributes :id, :body, :author_full_name, :author_username, :created_at

   def author_full_name
     object.user&.full_name
   end
   def author_username
     object.user&.username
   end
 end
end
