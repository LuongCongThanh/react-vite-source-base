[//]: # (Trong cấu hình trên, chúng ta đã thêm hai phần tử mới là "husky" và "lint-staged" vào package.json. Phần tử "husky" được sử dụng để định nghĩa hook pre-commit, trong đó "lint-staged" được chạy trước khi commit. Phần tử "lint-staged" xác định các tệp tin sẽ được xử lý trong hook pre-commit và chạy lệnh npm run lint:fix để sửa các lỗi ESLint, npm run format:check để kiểm tra định dạng Prettier và git add để thêm các tệp tin đã được sửa vào commit.)

[//]: # ()

[//]: # (Sau khi thêm cấu hình trên vào package.json, Husky sẽ tự động chạy các lệnh kiểm tra lỗi và định dạng mã trước khi thực hiện commit.)
