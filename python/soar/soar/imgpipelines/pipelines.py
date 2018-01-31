# -*- coding: utf-8 -*-
import scrapy

from soar.settings import IMAGES_STORE
from scrapy.pipelines.images import ImagesPipeline

import os

class QidianPipeline(ImagesPipeline): 

	# def file_path(self, request, response=True, info=None): 
	# 	image_guid = request.url.split('/')[-1] 
	# 	print im
	# 	return 'full/%s.jpg' % (image_guid) 

	def get_media_requests(self, item, info): 
		data = item["imgSrc"]
		yield scrapy.Request("http:"+data) 

	def item_completed(self, results, item, info): 
		image_paths = [x['path'] for ok, x in results if ok]
		oldfile = IMAGES_STORE+image_paths[0]
		newfile = IMAGES_STORE+item["title"].encode("gbk")+".jpg"
		os.rename(oldfile,newfile)