class Review < ApplicationRecord
    validates :user_id, :product_id, :body, :rating, :headline, presence:true

    belongs_to :user

    belongs_to :product
end
