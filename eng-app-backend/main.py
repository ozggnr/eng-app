from endpoints import app
from database import metadata, engine

metadata.create_all(engine)