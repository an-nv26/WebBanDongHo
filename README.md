Hướng dẫn chạy chương trình

- Bước 1: Tải Git và tạo Folder chứa Source Code
- Bước 2: Mở Folder bằng Visual Studio Code hoặc các IDE, text Editor tương tự
- Bước 3: Sử dụng lệnh "git clone https://github.com/annguyenvan260602/WebBanDongHo.git" để tải source code
- Bước 4: Cài đặt Node_Module cho các Folder backend, frontend và socket bằng lệnh "npm i"
- Bước 5: Để khởi động chương trình, tiến hành khởi động các thành phần của trang web
  + Bước 5.1: "cd backend" && "npm run dev"
  + Bước 5.2: "cd frontend" && "npm start"
  + Bước 5.3: "cd socket" && "npm start"

Lúc này trình duyệt sẽ tự động điều hướng đến Website (Hoặc có thể mở trình duyệt và tìm đến địa chỉ localhost:3000)

Lưu ý: Đảm bảo máy tính đã được cài NodeJS, và nếu muốn custom lại thì có thể truy cập đến địa chỉ file "backend/config/.env" để thay đổi.
