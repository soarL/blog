# -*- coding: utf-8 -*-
import scrapy
from scrapy.http import Request
from scrapy.contrib.loader import ItemLoader
from weibo.items import QidianItem

class QiDian(scrapy.Spider):
	name = "qidian"
	allowed_domains = ["qidian.com"]
	bash_url="https://www.qidian.com/all?chanId=22&subCateId=64&orderId=&style=1&pageSize=20&siteid=1&pubflag=0&hiddenField=0&page="

	# 获取url总数

	def start_requests(self):
		yield Request(self.bash_url,self.get_page)

	def parse(self,response):

		l = ItemLoader(item =QidianItem(),response = response)

		l.add_css('title',"a[data-eid='qd_B58']::text")
		l.add_css('href',"a[data-eid='qd_B58']::attr('href')")

		l.add_css('author',"a[data-eid='qd_B59']::text")
		l.add_css('status',"p.author span::text")

		l.add_css('allclassfix',"a[data-eid='qd_B60']::text")
		l.add_css('classfix',"a[data-eid='qd_B61']::text")

		l.add_css('intro',"p.intro::text")
		l.add_css('update',"p.update span::text")

		return l.load_item()

	def get_page(self,response):

		page_num = response.css("a.lbf-pagination-page::attr(data-page)").extract()[-1]

		for i in range(1,int(page_num)-1):
			url = self.bash_url + str(i)
			yield Request(url,self.parse)
