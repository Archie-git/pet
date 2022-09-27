class ChatMessageDB {
  database: any;

  constructor(DBName: string, DBVersion: number) {
    const request = indexedDB.open(DBName, DBVersion);
    request.onsuccess = (event: any) => {
      console.log('chile =====data 111=>');
      this.database = event.target.result;
    };
    request.onerror = (err) => {
      console.log('chile =====data 222=>', err);
      console.log('打开数据库失败');
    };
    request.onupgradeneeded = (event: any) => {
      // ENV.DB_VERSION改变时将调用此方法
      console.log('chile =====data 333=>');
      const { result } = event.target;
      if (result.objectStoreNames.contains('chat_message')) {
        console.log('chile =====data 555=>');
        result.deleteObjectStore('chat_message');
      }
      result.createObjectStore('chat_message', { keyPath: 'id' });
    };
  }

  // 清除所有数据库
  static clear() {
    indexedDB.databases().then((ret) => {
      ret.forEach((item) => {
        if (item.name != null) {
          indexedDB.deleteDatabase(item.name);
        }
      });
    });
  }

  // 插入一条记录
  insert = () => {
    console.log('chile ====data bbbbbb===>');
    const store = this.database.transaction('chat_message', 'readwrite').objectStore('chat_message');
    const request = store.put({
      id: 1000,
      sender: 'Archie',
      recipient: 'Dogge',
      content: 'Hello World',
    });
    request.onsuccess = () => {
      console.log('chile ====data 7777===>');
    };
    request.onerror = () => {
      console.log('chile ====data 8888===>');
    };
  };

  // 删除一条记录
  delete = () => {
  };

  // 更新一条记录
  update = () => {
    const store = this.database.transaction('chat_message', 'readwrite').objectStore('chat_message');
    const request = store.openCursor();
    request.onsuccess = (event: any) => {
      const cursor = event.target.result;
      const value = {
        ...cursor.value,
        content: 'Hello World 2022',
      };
      cursor.update(value);
    };
  };

  // 查询一条记录
  query = () => {
    const store = this.database.transaction('chat_message', 'readonly').objectStore('chat_message');
    const request = store.getAll();
    request.onsuccess = (event: any) => {
      console.log('chile ====data 9999===>', event.target.result);
    };
    request.onerror = () => {
      console.log('chile ====data 1111===>');
    };
  };
}

const MessageDB = new ChatMessageDB(ENV.DB_NAME, parseInt(ENV.DB_VERSION, 10));

export default MessageDB;
