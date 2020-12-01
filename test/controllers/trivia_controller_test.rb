require 'test_helper'

class TriviaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trivium = trivia(:one)
  end

  test "should get index" do
    get trivia_index_url
    assert_response :success
  end

  test "should get new" do
    get new_trivium_url
    assert_response :success
  end

  test "should create trivium" do
    assert_difference('Trivia.count') do
      post trivia_index_url, params: { trivium: { body: @trivium.body, movie_id: @trivium.movie_id } }
    end

    assert_redirected_to trivium_url(Trivia.last)
  end

  test "should show trivium" do
    get trivium_url(@trivium)
    assert_response :success
  end

  test "should get edit" do
    get edit_trivium_url(@trivium)
    assert_response :success
  end

  test "should update trivium" do
    patch trivium_url(@trivium), params: { trivium: { body: @trivium.body, movie_id: @trivium.movie_id } }
    assert_redirected_to trivium_url(@trivium)
  end

  test "should destroy trivium" do
    assert_difference('Trivia.count', -1) do
      delete trivium_url(@trivium)
    end

    assert_redirected_to trivia_index_url
  end
end
