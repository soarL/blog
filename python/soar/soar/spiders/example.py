# -*- coding: utf-8 -*-
import scrapy
from scrapy.http import Request
from scrapy.contrib.loader import ItemLoader
from soar.items import WeiboItem

class ExampleSpider(scrapy.Spider):
    name = 'example'
    allowed_domains = ['taobao.com']
    start_urls = ['http://www.taobao.com/']

    def parse(self, res):
    	l = ItemLoader(item = WeiboItem(),response= res)

    	l.add_css("link","link[href]")
    	l.add_css("title","title")
    	l.add_css("desc","a span")

    	print "pachong is over!!!"

    	return l.load_item()
