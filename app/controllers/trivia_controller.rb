class TriviaController < ApplicationController
  before_action :set_trivium, only: [:show, :edit, :update, :destroy]

  # GET /trivia
  # GET /trivia.json
  def index
    @trivia = Trivia.all
  end

  # GET /trivia/1
  # GET /trivia/1.json
  def show
  end

  # GET /trivia/1/edit
  def edit
  end

  # POST /trivia
  # POST /trivia.json
  def create
    @trivium = Trivia.new(trivium_params)

    respond_to do |format|
      if @trivium.save
        format.html { redirect_to @trivium, notice: 'Trivia was successfully created.' }
        format.json { render :show, status: :created, location: @trivium }
      else
        format.html { render :new }
        format.json { render json: @trivium.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trivia/1
  # PATCH/PUT /trivia/1.json
  def update
    respond_to do |format|
      if @trivium.update(trivium_params)
        format.html { redirect_to @trivium, notice: 'Trivia was successfully updated.' }
        format.json { render :show, status: :ok, location: @trivium }
      else
        format.html { render :edit }
        format.json { render json: @trivium.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trivia/1
  # DELETE /trivia/1.json
  def destroy
    @trivium.destroy
    respond_to do |format|
      format.html { redirect_to trivia_index_url, notice: 'Trivia was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trivium
      @trivium = Trivia.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trivium_params
      params.require(:trivium).permit(:body, :movie_id)
    end
end
