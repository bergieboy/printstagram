class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def index
    @photo = Photo.find(params[:photo_id])
    @comments = @photo.comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render :show
    else
      render json: @comment, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
