from flask import Flask, request, render_template, redirect
from flask import make_response, Response

app = Flask(__name__)

@app.route('/')
def main():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()
