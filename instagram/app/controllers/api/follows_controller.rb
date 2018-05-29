class Api::FollowsController < ApplicationController

  before_action :require_logged_in

  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.followee_id = params[:followeeId]
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(
      follower_id: current_user.id,
      followee_id: params[:followeeId]
    )

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end
