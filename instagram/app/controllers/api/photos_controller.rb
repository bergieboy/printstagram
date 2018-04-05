class Api::PhotosController < ApplicationController
  def index
    @photos = (
      if params[:user_id]
        Photo.where(author_id: params[:user_id])
      else
        Photo.all
      end
    )
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :index
    else
      render json: ['Must attach image']
    end
  end

  def destroy
    photo = current_user.photos.find(params[:id])
    photo.destroy
    render :index
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :author_id)
  end

end
