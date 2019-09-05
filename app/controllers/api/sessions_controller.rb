class Api::SessionsController < ApplicationController
  
  def create
 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/current_user"
    else
      render json: ["Invalid username/password combination"], status: 401
    end

  end

  def destroy
    @user = current_user
    if current_user
      logout 
      render "api/users/current_user"
    else
      render json: ["Already signed out"], status: 404
    end
  end

end
