from flask import Flask
import datetime
x=datetime.datetime.now()
app=Flask(__name__)
@app.route("/data")
def get_time():
  return {'Country':'india',
          'city':'chennai',
          'time':x
          }
if __name__ =="__main__":
  app.run(debug=True)