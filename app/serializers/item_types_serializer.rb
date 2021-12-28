class ItemTypesSerializer < ActiveModel::Serializer
  attributes :id, :name

    has_many :items , serializer: ItemsSerializer

end
