class Domain < ApplicationRecord
  has_many :marks

  validates :link, url: true

end
