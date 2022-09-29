export interface ChatMessageType {
  id: number,
  sender: string,
  recipient: string,
  content: string,
  time: number,
}

class ChatMessageDB {
  database: IDBDatabase | undefined;

  STORE_NAME: string = 'chat_message';

  constructor(DBName: string, DBVersion: number) {
    const request = indexedDB.open(DBName, DBVersion);
    request.onsuccess = (event: any) => {
      this.database = event.target.result;
    };
    request.onupgradeneeded = (event: any) => {
      // ENV.DB_VERSION改变时将调用此方法
      const { result } = event.target;
      if (result.objectStoreNames.contains(this.STORE_NAME)) {
        result.deleteObjectStore(this.STORE_NAME);
      }
      result.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
    };
  }

  getAll = () => {
    return new Promise((resolve, reject) => {
      if (this.database) {
        const store = this.database.transaction(this.STORE_NAME, 'readonly').objectStore(this.STORE_NAME);
        const request = store.getAll();
        request.onsuccess = (event: any) => {
          resolve(event.target.result);
        };
      } else {
        reject(new Error('MessageDB初始化失败'));
      }
    });
  };

  put = (message: ChatMessageType) => {
    if (this.database) {
      const store = this.database.transaction(this.STORE_NAME, 'readwrite').objectStore(this.STORE_NAME);
      store.put(message);
    }
  };

  update = (message: ChatMessageType) => {
    if (this.database) {
      const store = this.database.transaction(this.STORE_NAME, 'readwrite').objectStore(this.STORE_NAME);
      const request = store.openCursor(message.id);
      request.onsuccess = (event: any) => {
        const cursor = event.target.result;
        cursor.update(message);
      };
    }
  };
}

const MessageDB = new ChatMessageDB(ENV.DB_NAME, parseInt(ENV.DB_VERSION, 10));

export default MessageDB;
