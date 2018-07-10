from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

html = urlopen("http://charleyproject.org/case-searches/alphabetical-cases")
bs = BeautifulSoup(html, "html.parser")

#Retrieves all case links and removes formatting
for link in bs.find("div",{"class":"columns"}).findAll("a") :
    #Prints link
    print(link.attrs['href'])
    html = link
    for case in bs.find("div", {"class":"column"}).findAll("li") :
        print(case)
    #Retrieve h1 and all (column) li from 
                               
#Need to make their last seen location a map point
#Need to add it to an OpenStreetMap
#Need to make it a website
#Filter through points with not enough informati
