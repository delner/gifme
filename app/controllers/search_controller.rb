class SearchController < ApplicationController
  def index
    @search_term = params[:search_term].gsub(" ", "+")
  end

  def view
    @search_term = params[:search_term].gsub(" ", "+")
    @id = params[:id]
  end
end
