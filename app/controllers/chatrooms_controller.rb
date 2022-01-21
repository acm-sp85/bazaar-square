class ChatroomsController < ApplicationController
     def index

    chatrooms = Chatroom.all
    render json: chatrooms, each_serializer: ChatroomSerializer , status: :ok
end

  def create
    chatroom = Chatroom.create(chatroom_params)
    if chatroom.valid?
      
      render json: chatroom, status: :created , serializer: ChatroomSerializer

    else
      render json: {errors: chatroom.errors.full_messages}, status: :unprocessable_entity 
    end
  end


  private

  def chatroom_params
        params.permit(:id, :userA_id, :userB_id)
  end
end
