class ChatroomSerializer < ActiveModel::Serializer
  attributes :id , :messages, :userA_id, :userB_id
end
