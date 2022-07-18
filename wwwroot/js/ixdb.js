// データベースの作成
var db = new Dexie("AppDatabase");

// オブジェクトストア（テーブル）の作成
db.version(1).stores({
    diary: 'selectDay',
    task: 'id'
});

// 指定日の日記を保存する
function putDiary(val) {
    db.diary.put(val);
}

// 指定日の日記を取得する
function getDiary(key) {
    return db.diary.get(key);
}

// 指定範囲のキーを返す
function getDiaryKeys(s, e) {
    return db.diary.where("selectDay").between(s, e).keys();
}

function putTask(val) {
    db.task.put(val);
}

function getTask(key) {
    db.task.get(key);
}

function getAllTaskKeys() {
    return db.task.where("id").keys();
}
