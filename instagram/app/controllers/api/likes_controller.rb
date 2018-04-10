class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.photo_id = params[:id]
    if @like.save
      @photo = @like.photo
      render 'api/photos/show'
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])
    @like.destroy
    @photo= @like.photo
    render 'api/photos/show'
  end
end
