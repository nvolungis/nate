class PhotoGalleriesController < ApplicationController
  # GET /photo_galleries
  # GET /photo_galleries.json
  def index
    @photo_galleries = PhotoGallery.all

    @photos = Array.new

    respond_to do |format|
      format.html # index.html.erb
      format.json {  @photo_galleries }
    end
  end

  # GET /photo_galleries/1
  # GET /photo_galleries/1.json
  def show
    @photo_gallery = PhotoGallery.find(params[:id])
    
    @photos = Array.new
    
    @photo_gallery.tags.each do |tag|
      @photos.push(tag.photos)
    end
    @photos = @photos.flatten
    
    @gallery = {
      :photo_gallery => @photo_gallery,
      :photos => @photos
    }
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { @gallery }
    end
  end

  # GET /photo_galleries/new
  # GET /photo_galleries/new.json
  def new
    @photo_gallery = PhotoGallery.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @photo_gallery }
    end
  end

  # GET /photo_galleries/1/edit
  def edit
    @photo_gallery = PhotoGallery.find(params[:id])
  end

  # POST /photo_galleries
  # POST /photo_galleries.json
  def create
    @photo_gallery = PhotoGallery.new(params[:photo_gallery])

    respond_to do |format|
      if @photo_gallery.save
        format.html { redirect_to @photo_gallery, notice: 'Photo gallery was successfully created.' }
        format.json { render json: @photo_gallery, status: :created, location: @photo_gallery }
      else
        format.html { render action: "new" }
        format.json { render json: @photo_gallery.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /photo_galleries/1
  # PUT /photo_galleries/1.json
  def update
    @photo_gallery = PhotoGallery.find(params[:id])

    respond_to do |format|
      if @photo_gallery.update_attributes(params[:photo_gallery])
        format.html { redirect_to @photo_gallery, notice: 'Photo gallery was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @photo_gallery.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /photo_galleries/1
  # DELETE /photo_galleries/1.json
  def destroy
    @photo_gallery = PhotoGallery.find(params[:id])
    @photo_gallery.destroy

    respond_to do |format|
      format.html { redirect_to photo_galleries_url }
      format.json { head :no_content }
    end
  end
end
