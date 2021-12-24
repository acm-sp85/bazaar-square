class Review < ApplicationRecord
     belongs_to :user_reviewer, class_name: 'User', foreign_key: 'author_id'
     belongs_to :user_reviewed, class_name: 'User', foreign_key: 'user_id'
     belongs_to :item 

end
 