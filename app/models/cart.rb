class Cart < ApplicationRecord
    validates :user_id, presence:true

    belongs_to :user

    belongs_to :product
end
