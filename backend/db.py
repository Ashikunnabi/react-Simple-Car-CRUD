import pymongo
import urllib


class DB:
    def __init__(self):
        self.username = urllib.parse.quote('superuser')
        self.password = urllib.parse.quote('tuhin@anten!roundkitkat')
        self.db_name = urllib.parse.quote('test')
        self.url = 'mongodb://{0}:{1}@cluster0-shard-00-00.ibgku.mongodb.net:27017,cluster0-shard-00-01.ibgku.mongodb.net:27017,cluster0-shard-00-02.ibgku.mongodb.net:27017/{2}?ssl=true&replicaSet=atlas-bvini5-shard-0&authSource=admin&retryWrites=true&w=majority'.format(self.username, self.password, self.db_name)
        self.client = None

    # connect to mongo client
    def connect(self):
        self.client = pymongo.MongoClient(self.url)
        return self.client

    # check given database name already exixts or not
    def check_db_exixtence(self, name):
        dblist = self.client.list_database_names()
        if name in dblist:
            print("{0} database exists.".format(name))
        else:
            print("{0} database doesn\'t exists.".format(name))



