require "application_system_test_case"

class TriviaTest < ApplicationSystemTestCase
  setup do
    @trivium = trivia(:one)
  end

  test "visiting the index" do
    visit trivia_url
    assert_selector "h1", text: "Trivia"
  end

  test "creating a Trivia" do
    visit trivia_url
    click_on "New Trivia"

    fill_in "Body", with: @trivium.body
    fill_in "Movie", with: @trivium.movie_id
    click_on "Create Trivia"

    assert_text "Trivia was successfully created"
    click_on "Back"
  end

  test "updating a Trivia" do
    visit trivia_url
    click_on "Edit", match: :first

    fill_in "Body", with: @trivium.body
    fill_in "Movie", with: @trivium.movie_id
    click_on "Update Trivia"

    assert_text "Trivia was successfully updated"
    click_on "Back"
  end

  test "destroying a Trivia" do
    visit trivia_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Trivia was successfully destroyed"
  end
end
