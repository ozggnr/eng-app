import uuid
from sqlalchemy import create_engine, MetaData, Table, Column, ForeignKey, String, Integer
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from config import DATABASE_URL 

metadata = MetaData()
words = Table('words', metadata,
              Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4),
              Column('word', String),
              Column('ddefinition', String),
              Column('cdefinition', String),
              )
synonyms = Table('synonyms', metadata, 
                 Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4),
                 Column('word_id', UUID(as_uuid=True), ForeignKey('words.id'), nullable=False),
                 Column('synonym', String)
                 )
exmaples = Table('examples', metadata, 
                 Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4),
                 Column('word_id', UUID(as_uuid=True), ForeignKey('words.id'), nullable=False),
                 Column('example', String)
                 )
engine = create_engine(DATABASE_URL)