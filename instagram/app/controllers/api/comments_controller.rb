class Api::CommentsController < ApplicationController
  def index
    @comments = Photo.find(params[:photo_id]).comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render 'api/photos/show'
    else
      render json: @comment, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render 'api/photos/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
