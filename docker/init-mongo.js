db.createUser (
  {
    user  : "CaCA",
    pwd   : "Secret",
    roles : [
      {
        role : "readWrite",
        db   : "CaCDB"
      }
    ]
  }
)
