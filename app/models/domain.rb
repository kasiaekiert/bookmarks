class Domain < ApplicationRecord
  has_many :marks, dependent: :destroy 
end
