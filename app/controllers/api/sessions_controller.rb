class Api::SessionsController < ApplicationController

  def destroy
    if current_user
      logout
      render "api/users/show"
    else
      render json: ["Already Sign Out"], status: 404
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

end
