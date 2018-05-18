class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.followee_id = params[:id]
    @user = User.find_by(id: params[:id])
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end
