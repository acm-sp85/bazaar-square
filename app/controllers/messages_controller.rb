class MessagesController < ApplicationController
 def index

    messages = Message.all
    render json: messages, each_serializer: MessageSerializer, status: :ok
end

  def create
    message = Message.create(messages_params)
    if message.valid?
      
      render json: message, status: :created , serializer: MessageSerializer

    else
      render json: {errors: message.errors.full_messages}, status: :unprocessable_entity 
    end
  end


  private

  def messages_params
        params.permit(:id, :user_id, :sender_id, :message_content)
  end
end
