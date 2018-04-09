class Api::PhotosController < ApplicationController
  def index
    @photos = (
      if params[:userId]
        Photo.where(author_id: params[:userId])
      else
        Photo.all
      end
    )
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
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
