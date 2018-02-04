import mysql.connector
from soar import settings

MYSQL_HOST = settings.MYSQL_HOST
MYSQL_USER = settings.MYSQL_USER
MYSQL_PASSWORD = settings.MYSQL_PASSWORD
MYSQL_DB = settings.MYSQL_DB
MYSQL_PORT = settings.MYSQL_PORT

cnx = mysql.connector.connect(user=MYSQL_USER,password=MYSQL_PASSWORD,host=MYSQL_HOST,database=MYSQL_DB)
cur = cnx.cursor(buffered=True)

class Sql:

	@classmethod
	def insert_qidian_book(self,imgSrc,author,status,classfix,allclassfix,href,title,update,intro):
		sql = "INSERT INTO qidian_book(id,imgSrc,author,statu,classfix,allclassfix,href,title,updates,intro) VALUES(%(id)s,%(imgSrc)s,%(author)s,%(status)s,%(classfix)s,%(allclassfix)s,%(href)s,%(title)s,%(update)s,%(intro)s)"
		value = {
				"id":"0",
				"imgSrc":imgSrc,
				"author":author,
				"status":status,
				"classfix":classfix,
				"allclassfix":allclassfix,
				"href":href,
				"title":title,
				"update":update,
				"intro":intro
			}

		cur.execute(sql,value)
		cnx.commit()

	@classmethod
	def insert_zhihu_book(self,agree,author,authorInfo,RichText):
		if not int(agree) < 100:
			sql = "INSERT INTO zhihu_table(id,agree,author,authorInfo,RichText) VALUES(%(id)s,%(agree)s,%(author)s,%(authorInfo)s,%(RichText)s)"
			value = {
					"id":"0",
					"agree":agree,
					"author":author,
					"authorInfo":authorInfo,
					"RichText":RichText
				}
			cur.execute(sql,value)
			cnx.commit()

	@classmethod
	def insert_neihan_duanzhi(self,avatar_url,name,content,status_desc,digg_count,comment_count,favorite_count,bury_count,user_id):
		if not int(digg_count) < 999:
			sql = "SELECT content FROM neihan_table WHERE content ='" + content+ "'"
			try:
				cur.execute(sql)
				results = cur.fetchall()
				if len(results) == 0:
					sql = "INSERT INTO neihan_table(id,avatar_url,name,content,status_desc,digg_count,comment_count,favorite_count,bury_count,user_id) VALUES(%(id)s,%(avatar_url)s,%(name)s,%(content)s,%(status_desc)s,%(digg_count)s,%(comment_count)s,%(favorite_count)s,%(bury_count)s,%(user_id)s)"
					value = {
							"id":"0",
							"avatar_url":avatar_url,
							"name":name,
							"content":content,
							"status_desc":status_desc,
							"digg_count":digg_count,
							"comment_count":comment_count,
							"favorite_count":favorite_count,
							"bury_count":bury_count,
							"user_id":user_id
						}
					cur.execute(sql,value)
					cnx.commit()
			except:
				cnx.rollback()
			
