class Review < ApplicationRecord
    validates :user_id, :product_id, :body, :rating, :headline, presence:true
    validates :rating, numericality: {greater_than: 0} 
    belongs_to :user

    belongs_to :product
end
