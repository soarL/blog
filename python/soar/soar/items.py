# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class WeiboItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    link = scrapy.Field()
    desc = scrapy.Field()

class QidianItem(scrapy.Item):
	imgSrc = scrapy.Field()
	author = scrapy.Field()
	status = scrapy.Field()
	classfix = scrapy.Field()
	href = scrapy.Field()
	allclassfix = scrapy.Field()
	title = scrapy.Field()
	intro = scrapy.Field()
	update = scrapy.Field()