from flask import Flask, request, render_template, redirect
from flask import make_response, Response

@app.route('/')
def main():
    return render_template("index.html")
