class UsersController < ApplicationController
    def show
        @user = User.find_by(id: params[:id]) # why @user? show info in view?
        render :show
    end

    def new
        @user = User.new # why @user? show info in view?
        render :new
    end

    def create
        @user = User.new(user_params) # why not @user?
        
        if @user.save
            log_in_user!(@user)
            redirect_to new_session_url
        else
            # flash errors
            render :new # ??? why does this send to users and not users/new?
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
