require 'rails_helper'

RSpec.describe User, type: :model do

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe "User#is_password?" do
    subject(:user) { User.new(email: 'test2@gmail.com', password: 'password') }

    it "should return true if passed password matches password of account" do
      expect(user.is_password?('password')).to be true
    end

    it "should return false if passed password doesn't matches password of account" do
      expect(user.is_password?('passwordd')).to be false
    end
  end

  describe "User#reset_session_token" do
  subject(:user) { User.new(email: 'test3@gmail.com', password: 'password') }

    it "should reset a user's session token" do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(old_session_token)
    end

      it "returns the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe "User::find_by_credentials(email, password)" do
    subject(:user) { User.create(email: 'test4@gmail.com', password: 'password') }

    it "should find a user by credentials" do
      expect(User.find_by_credentials('test4@gmail.com', 'password')).to eq(user)
    end
  end

end


