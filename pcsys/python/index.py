# _*_ coding:utf8 _*_

import re
import string
import sys
import os
import urllib
import urllib2
from bs4 import BeautifulSoup
import requests
from lxml import etree


reload(sys)
sys.setdefaultencoding('utf-8')
if(len(sys.argv)>=2):
	user_id = (int)(sys.argv[1])
else:
	user_id = (int)(raw_input("please enter the user_id:"))

cookie = {
	"Cookie":"2b6d89d6d18fc4f7b8c429fe0dbfaf2f; SUB=_2A253a7oDDeRhGeRJ7FQQ8ybLyDuIHXVUl8ZLrDV6PUJbkdBeLWPQkW1NUlG5zWwgnGWxZ5Hdxm9bcJr7o-cEzjK4; SUHB=08JKmQ6B8z59ti; SCF=Ap2a2WzG38P9DxUSNBfC7wlw95ih-ZjezbPHjfKNIRAuDG6TF_ySlTG9ZjgIFvLwbsWhp62gkYDm4AXcaf5aCkI.; SSOLoginState=1517275731"
}

url = 'https://weibo.cn/%d/profile?page=1'%(user_id)

lxml = requests.get(url,cookies=cookie).content

selector = etree.HTML(lxml)

pageNum = (int)(selector.xpath("//input[@name='mp']")[0].attrib["value"])


print "Ready success to id ___%d___is article"%(user_id)

content=''
cishu = 1;
for itme in range(1,pageNum+1):
	url = 'https://weibo.cn/%d/profile?page=%d'%(user_id,itme)

	lxml = requests.get(url,cookies=cookie).content

	selector = etree.HTML(lxml)

	text = selector.xpath("//span[@class='ctt']")

	for each in text:
		eachText = each.xpath("string(.)")

		content += str(cishu)+" ："+eachText.encode("utf8")+"\n\n"

		print "this is %d article,don't not exit the program"%(cishu)
		
		cishu+=1

print "article collection success! start writing file"

with open("1.txt","wb") as f:
	f.write(content)

print "writing file success! thank you for using!"
