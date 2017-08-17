# debugger
json.pokemon do
  json.extract!(@pokemon, :id, :name, :attack, :defense, :moves, :poke_type)
  json.image_url asset_path(@pokemon.image_url)
  json.item_ids @pokemon.items.map { |item| item.id }
end

json.items do
  json.array!(@pokemon.items) do |item|
    json.extract!(item, :id, :name, :pokemon_id, :price, :happiness)
    json.image_url asset_path(item.image_url)
  end
end
