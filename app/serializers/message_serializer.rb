class MessageSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :user_id, :message_content
  
  # , :sender, :receiver
    def sender
    object.user_sender.user_name
  end
  def receiver
    object.user_receiver.user_name
  end
end
