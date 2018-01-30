from .sql import Sql
from weibo.items import QidianItem

class weiboPipeline(object):

	@classmethod
	def process_item(self,item,spider):

		author = item["author"]
		status = item["status"]
		classfix = item["classfix"]
		allclassfix = item["allclassfix"]
		href = item["href"]
		title = item["title"]
		update = item["update"]
		intro = item["intro"]

		print 'db start'
		for i in range(0,len(author)):
			Sql.insert_qidian_book(author[i],status[i],classfix[i],allclassfix[i],href[i],title[i],update[i],intro[i])
