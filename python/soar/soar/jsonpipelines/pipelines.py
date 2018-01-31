from soar.items import QidianItem
import json
import os

class QidianPipeline(object):

	f = open("1.json","w")

	def open_spider(self,spider):
		self.f.write("[\n")

	@classmethod
	def process_item(self,item,spider):
		data = json.dumps(dict(item))
		yield self.f.write(data+ ",\n")
		print 'write success'
		# for i in range(0,len(author)):
		# 	Sql.insert_qidian_book(author[i],status[i],classfix[i],allclassfix[i],href[i],title[i],update[i],intro[i])
	
	def close_spider(self,spider):
		self.f.seek(-3, os.SEEK_END)
		self.f.truncate()
		self.f.write("\n]")
		self.f.close()