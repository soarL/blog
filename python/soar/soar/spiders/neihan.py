# -*- coding: utf-8 -*-
from soar.items import NeiHanItem
import scrapy
from scrapy.http import Request
import json
class NeiHanSipder(scrapy.Spider):
    name = "neihan"
    allowed_domains = ["neihanshequ.com"]
    baseurl = "http://m.neihanshequ.com/?_ad0.3823736876999033&skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time="
    baseurl2 = "&csrfmiddlewaretoken=f8f2db3ee2bd2ac95c3c82d3b0d98a47"

    timer = 1507815164

    def start_requests(self):
    	while  True:
			self.timer = self.timer + 1000
			url = self.baseurl + str(self.timer) + self.baseurl2
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