class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end
  end

  # def create!
  # end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end
  end

  # def update!
  # end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.delete
    render json: @todo
  end

  # def destroy!
  # end
  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
