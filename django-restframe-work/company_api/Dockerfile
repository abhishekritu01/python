FROM python

ENV PYTHONUNBUFFERED 1

RUN mkdir /api

# Set the working directory
WORKDIR /api

# Copy the current directory contents into the container at /api
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt