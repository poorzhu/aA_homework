feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign-up"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => "thezhukeeper@gmail.com"
      fill_in 'Password', :with => "biscuits"
      click_on "Submit"
    end

    scenario "redirects to bands index page after signup" do
        expect(current_path).to eq("/session/new")
        expect(page).to have_content("Sign-in")
    end
  end

  feature "with an invalid user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => "testing@email.com"
      click_on "Submit"
    end

    scenario "re-renders the signup page after failed signup" do
        expect(current_path).to eq("/users")
    end
  end

end