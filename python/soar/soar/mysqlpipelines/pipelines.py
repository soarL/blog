from .sql import Sql

import json

class QidianPipeline(object):

	@classmethod
	def process_item(self,item,spider):
		data = dict(item)
		Sql.insert_qidian_book(**data)


class ZhiHuPipeline(object):

	@classmethod
	def process_item(self,item,spider):
		data = dict(item)
		Sql.insert_zhihu_book(**data)
