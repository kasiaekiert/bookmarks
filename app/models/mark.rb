class Mark < ApplicationRecord
  require 'uri'

  belongs_to :domain, required: false

  validates :url, url: true, presence: true

  after_create :assign_domain

  def assign_domain
    domain_name = URI.parse(url.to_s).host
    domain = Domain.find_or_create_by(name: domain_name)
  end
end
