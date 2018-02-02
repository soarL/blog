# -*- coding: utf-8 -*-

# Scrapy settings for soar project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://doc.scrapy.org/en/latest/topics/settings.html
#     https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://doc.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'soar'

SPIDER_MODULES = ['soar.spiders']
NEWSPIDER_MODULE = 'soar.spiders'

# LOG_FILE = "/koa/python/weibo/log.log"
# LOG_LEVEL = "INFO"

# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'soar (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

IMAGES_STORE = "/koa/python/soar/soar/qidian/img/"


# Configure maximum concurrent requests performed by Scrapy (default: 16)
# CONCURRENT_REQUESTS = 5

# Configure a delay for requests for the same website (default: 0)
# See https://doc.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 1
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    "authorization":"Bearer 2|1:0|10:1517567694|4:z_c0|80:MS4xM0N1OEJBQUFBQUFtQUFBQVlBSlZUYzZNWVZ2U1J5RVFhc21sRDAxSndQNGFXS01EVUFUb0N3PT0=|0448b1f6068f1c6f03b57c25ed45bf5ccbdbe3e60cc88fe3d7be030c490066d8"
}

# Enable or disable spider middlewares
# See https://doc.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'soar.middlewares.SoarSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    'soar.middlewares.SoarDownloaderMiddleware': 543,
#}

# Enable or disable extensions
# See https://doc.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   # 'soar.mysqlpipelines.pipelines.QidianPipeline': 1,
   # 'soar.jsonpipelines.pipelines.QidianPipeline': 1,
   # 'soar.imgpipelines.pipelines.QidianPipeline': 20
   # 'soar.jsonpipelines.pipelines.ZhiHuPipeline': 1,
   'soar.mysqlpipelines.pipelines.ZhiHuPipeline': 1
}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED = True
# HTTPCACHE_EXPIRATION_SECS = 0
# HTTPCACHE_DIR = 'httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES = []
# HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'


MYSQL_HOST = "localhost"
MYSQL_USER = "root"
MYSQL_PASSWORD = "root"
MYSQL_PORT = "3306"
MYSQL_DB = "study"