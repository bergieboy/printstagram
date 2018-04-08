class Api::UsersController < ApplicationController
  def create
    @user = User.new(
      params.require(:user).permit(:username, :password)
    )

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find_by_username(params[:id])
  end

  def update
    @user = User.find_by_username(params[:id])

    if @user.update(
      params.require(:user).permit(:img_url, :username, :name, :bio)
    )
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :bio, :img_url)
  end

end
