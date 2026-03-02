from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/interaction")
def interaction():
    return render_template("interaction.html")

@app.route("/get-involved")
def get_involved():
    return render_template("get-involved.html")

@app.route("/community-stories")
def community_stories():
    return render_template("community-stories.html")

@app.route("/magazine")
def magazine():
    return send_from_directory("docs", "magazine.pdf")

@app.route("/css/<path:filename>")
def css(filename):
    return send_from_directory("css", filename)

@app.route("/js/<path:filename>")
def js(filename):
    return send_from_directory("js", filename)

if __name__ == "__main__":
    app.run(debug=True)
