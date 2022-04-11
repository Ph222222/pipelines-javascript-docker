import requests
r=requests.get("http://0.0.0.0:8080", headers={"fibo":"12"})
print (r.content)