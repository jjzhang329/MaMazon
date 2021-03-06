class User < ApplicationRecord

  attr_reader :password
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :name, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  validates :email,
  format: { with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: "invalid"  },
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 254 }

  before_validation :ensure_session_token

  has_many :carts
  has_many :reviews

  has_many :items, through: :carts, source: :product


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end


  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end


end
