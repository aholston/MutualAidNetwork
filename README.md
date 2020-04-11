### Setup Environment

1. Install Python (Ensure you have atlas Python 3 by running python —version) https://www.python.org/downloads/
2. Install pip(pip is the package installer for Python. You can use pip to install packages from the Python Package Index and other indexes): `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py` `python get-pip.py`
3. Install pipenv  `pip3 install pipenv`
4. Clone Repo
5. In repo directory, run `pipenv shell`. This will open up a virtual environment for all your developing
6. Run `pipenv install django djangorestframework django-rest-knox` (This is the Django framework, the REST framework, and the token authentication)
7. You may need to install the Python and MySQL development headers and libraries like so: `brew install mysql-client`
8. Run `npm install` to install all of the dependencies

To start your server, navigate to your root directory and run `python manage.py runserver`. This will fire up your environment on localhost:8000

To compile your React code, run `npm run dev` for development. For deploy, we run `npm run build`

