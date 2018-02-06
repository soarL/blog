from flask import Flask,render_template,request

app = Flask(__name__)




@app.route("/")
def index():
	return "hello word"


@app.route("/index")
def indexs():
	return render_template("index.html")
	
@app.route("/from")
def froms():
	return "is ok"


if __name__ == "__main__":
	app.run(debug=True)