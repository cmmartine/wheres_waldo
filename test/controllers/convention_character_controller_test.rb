require "test_helper"

class ConventionCharacterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get convention_character_index_url
    assert_response :success
  end
end
