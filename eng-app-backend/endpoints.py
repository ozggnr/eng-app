from fastapi import FastAPI
import json
from converter import doc_converter

app = FastAPI()

@app.get("/")
def hello():
    print('hello')
@app.get("/words")
def get_all_words():
    words_data = doc_converter('/Users/ozggnr/Desktop/English-class/test')
    parsed_words_data = json.loads(words_data)
    # all_words = []
    # for words_list in parsed_words_data.values():
    #     for word in words_list:
    #         all_words.append(word)
    # all_words = [word for words_list in parsed_words_data.values() for word in words_list]
    # print('data', parsed_words_data)
    return parsed_words_data
