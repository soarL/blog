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
	user_id = (int)(raw_input("请输入user_id："))

cookie = {
	"Cookie":"9c3a0abd7240b2fea98a7e3809e4ae36; SUB=_2A253a23DDeRhGeRJ7FQQ8ybLyDuIHXVUlHOLrDV6PUJbkdBeLW_jkW1NUlG5zUh1UE9CnzPHvgPnAij8nn0salc2; SUHB=0BLZis2aSWSCDU; SCF=AlGBxeBWHVD2vN91-cOQgeCu95LDsmoBA8_UJukC4sHhLPyh64CbeN6k3rTeecTSDtX6uSDTP5ZGayjpJOebDjQ.; SSOLoginState=1517231507"
}

url = 'https://weibo.cn/%d/profile?page=1'%(user_id)

lxml = requests.get(url,cookies=cookie).content

selector = etree.HTML(lxml)

pageNum = (int)(selector.xpath("//input[@name='mp']")[0].attrib["value"])


print "蜘蛛准备完成开始收集id___%d___的文章"%(user_id)

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

		print "已收集%d篇文章，请不要退出程序"%(cishu)
		
		cishu+=1

print "文章收集完成开始写入文件！"

with open("1.txt","wb") as f:
	f.write(content)

print "文件写入完成！程序关闭！"


















