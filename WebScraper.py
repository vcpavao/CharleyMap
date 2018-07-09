from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

html = urlopen("http://charleyproject.org/case-searches/alphabetical-cases")
bs = BeautifulSoup(html, "html.parser")

#Retrieves all <div> elements in the case class
#nameList = bs.findAll("div",{"class":"case"})
#href=re.compile("^(/case/)"
#nameList = bs.findAll("a",)

nameList = bs.findAll("div",{"class":"case"})
                     
for name in nameList :
    print(name.get_text())
print(len(nameList))
                               
#Need to go through every state, every name, take the data
#Need to make their last seen location a map point
#Need to add it to an OpenStreetMap
#Need to make it a website

#Filter through points with not enough information
