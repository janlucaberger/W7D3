json.parties do
  json.array!(@parties) do |party|
    json.extract!(party, :id, :name, :location)
    json.guest_ids party.guests.map { |guest| guest.id }
  end
end

guests = []
@parties.each do |party|
  party.guests.each do |guest|
    unless guests.include?(guest)
      guests << guest
    end
  end
end


json.guests do
  json.array!(guests) do |guest|
    json.extract!(guest, :id, :name, :age)
  end
end
