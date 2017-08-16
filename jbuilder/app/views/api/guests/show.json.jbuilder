
  json.guest do
    json.partial!("/api/guests/guest", guest: @guest)
  end
  json.gifts do
    json.array!(@guest.gifts)
  end
