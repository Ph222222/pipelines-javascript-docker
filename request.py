from sre_constants import RANGE
from time import sleep
import requests


for n in range (40, 50):
    r=requests.get("http://0.0.0.0:8080", headers={"fibo": str(n)})
    print (r.content)
    #sleep(5)