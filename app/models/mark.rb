class Mark < ApplicationRecord
  require 'uri'

  belongs_to :domain, required: false

  validates :url, url: true, presence: true
  validates :tag, presence: true

  before_create :assign_domain
  before_create :assign_uid

  def assign_domain
    domain_name = URI.parse(url.to_s).host
    domain = Domain.find_or_create_by(name: domain_name)
    self.domain_id = domain.id
  end

  def assign_uid
    self.uid = [*('a'..'z'),*('A'..'Z'),*('0'..'9')].shuffle[0,8].join
  end
end
