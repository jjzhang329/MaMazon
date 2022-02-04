class Cart < ApplicationRecord
    validates :user_id, presence:true

    belongs_to :user

    belongs_to :product,
        foreign_key: :product_id
end
