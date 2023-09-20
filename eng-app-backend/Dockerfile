FROM python:3.9-slim

RUN apt-get update && apt-get install -y libpq-dev gcc && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

# RUN pip install --no-cache-dir fastapi[all] sqlalchemy psycopg2 uvicorn
RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "main:app", '--host', "0.0.0.0", "--port", "8000"]
