class UserMailer < ApplicationMailer
    default from: 'everyone@appacademy.io'
    
    def welcome_email(user)
        @user = user
        @url = 'http://example.com/login'
        mail(to: "thezhukeeper@gmail.com", subject: 'Welcome to My Awesome Site')
    end
end
