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