# -*- coding: utf-8 -*-
from soar.items import NeiHanItem
import scrapy
from scrapy.http import Request
import json
class ZhihuSipder(scrapy.Spider):
    name = "neihan"
    allowed_domains = ["neihanshequ.com"]
    baseurl = "http://www.neihanshequ.com/joke/?is_json=1&app_name=neihanshequ_web&max_time="

    timer = 1562714203

    def start_requests(self):
    	while  True:
			self.timer = self.timer + 1000
			url = self.baseurl + str(self.timer)
			yield Request(url,callback = self.parse)

    def parse(self, response):
    	data = json.loads(response.body)
    	info = data["message"]
    	if info == "success":
    		data_list = data["data"]["data"]
    		for Sdata in data_list:
    			item = NeiHanItem()
	    		item["avatar_url"] = Sdata["group"]["user"]["avatar_url"]
	    		item["name"] = Sdata["group"]["user"]["name"]
	    		item["content"] = Sdata["group"]["content"]
	    		item["status_desc"] = Sdata["group"]["status_desc"]
	    		item["digg_count"] = Sdata["group"]["digg_count"]
	    		item["comment_count"] = Sdata["group"]["comment_count"]
	    		item["favorite_count"] = Sdata["group"]["favorite_count"]
	    		item["bury_count"] = Sdata["group"]["bury_count"]
	    		item["user_id"] = Sdata["group"]["user"]["user_id"]
	    		yield item