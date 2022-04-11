from sre_constants import RANGE
from time import sleep
import requests


for n in range (37, 47):
    r=requests.get("http://20.121.96.115", headers={"fibo": str(n)})
    print (r.content)
    sleep(3)