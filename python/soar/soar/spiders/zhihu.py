# -*- coding: utf-8 -*-
from soar.items import ZhiHuItem
import scrapy
from scrapy.http import Request
import json
class ZhihuSipder(scrapy.Spider):
    name = "zhihu"
    allowed_domains = ["zhihu.com"]
    baseurl = "https://www.zhihu.com/api/v4/questions/"
    baseurl1 = "/answers?sort_by=default&include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&imit="

    def start_requests(self):
     	for link in range(56535200,56535400):
     		limit = 20
     		offset = 0
		for lins in range(1,10):
			url = self.baseurl + str(link) + self.baseurl1 + str(limit) +"&offset="+str(offset)
			offset = offset+ 20
			yield Request(url,callback = self.parse)

    def parse(self, response):
    	data = json.loads(response.body)
    	data_list = data["data"]
    	if len(data_list) !=0:
	    	for Jlist in data_list:
	    		item = ZhiHuItem()
	    		item["agree"] = Jlist["voteup_count"]
	    		item["author"] = Jlist["author"]["name"]
	    		item["authorInfo"] = Jlist["author"]["headline"]
	    		item["RichText"] = Jlist["content"]
	    		yield item
	   	else:
	   		return