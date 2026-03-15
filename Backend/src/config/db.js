const mysql = require("mysql2");

// Tạo connection pool (tốt hơn createConnection)
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "vivudee_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test kết nối database
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
    connection.release();
  }
});

module.exports = db;