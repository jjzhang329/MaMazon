class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true

    has_one_attached :picture


end
