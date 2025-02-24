# Use the official Python image from Docker Hub
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose the port
EXPOSE 8080

# Run migrations and start server
CMD ["sh", "-c", "python manage.py migrate && python manage.py migrate sessions && python manage.py runserver 0.0.0.0:8080"]
