require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get comments_index_url
    assert_response :success
  end

  test "should get create" do
    get comments_create_url
    assert_response :success
  end

  test "should get destroy" do
    get comments_destroy_url
    assert_response :success
  end

end
