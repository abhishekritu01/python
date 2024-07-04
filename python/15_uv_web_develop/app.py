
from re import U
from fastapi import FastAPI , UploadFile

app = FastAPI()



@app.get("/")
def home():
    return {"data":"welcome to fastapi"}


@app.get("/contact")
def contact():
    return {"data":"contact page"}


@app.post("/upload")
def upload(files :list[UploadFile]):
    print(files)
    return {"data":files}    



import uvicorn
uvicorn.run(app)