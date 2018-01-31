# -*- coding: utf-8 -*-
import scrapy

from soar.items import QidianItem

class QiDian(scrapy.Spider):
	name = "qidian"
	allowed_domains = ["qidian.com"]
	bash_url="https://www.qidian.com/all?chanId=22&subCateId=64&orderId=&style=1&pageSize=20&siteid=1&pubflag=0&hiddenField=0&page="

	# 获取url总数

	def start_requests(self):
        	yield scrapy.Request(self.bash_url,self.get_page)

	def parse(self,response):
		data_list = response.xpath("//ul[@class='all-img-list cf']/li")
		for data in data_list:
			item = QidianItem()
			item["imgSrc"] = data.xpath("./div/a/img/@src").extract()[0]
			item["title"] = data.xpath("./div/h4/a/text()").extract()[0]
			item["href"] = data.xpath("./div/h4/a/@href").extract()[0]
			item["author"] = data.xpath("./div/p/a[@data-eid='qd_B59']/text()").extract()[0]
			item["allclassfix"] = data.xpath("./div/p/a[@data-eid='qd_B60']/text()").extract()[0]
			item["classfix"] = data.xpath("./div/p/a[@data-eid='qd_B61']/text()").extract()[0]
			item["status"] = data.xpath("./div/p[@class='author']/span/text()").extract()[0]
			item["update"] = data.xpath("./div/p[@class='update']/span/text()").extract()[0]
			item["intro"] = data.xpath("./div/p[@class='intro']/text()").extract()[0]
			yield item

	def get_page(self,response):

		page_num = response.css("a.lbf-pagination-page::attr(data-page)").extract()[-1]

		for i in range(1,int(page_num)-1):
			url = self.bash_url + str(i)
			yield scrapy.Request(url,self.parse)
