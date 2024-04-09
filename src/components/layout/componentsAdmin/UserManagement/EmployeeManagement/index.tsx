const EmployeeManagement = () => {
    return (
      <div className="flex relative h-35px ">
        <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-1">
          <div className="grid col-span-5 grid-cols-7">
            <div className="col-span-2">Mã nhân viên</div>
            <div className="col-span-2">Họ và tên</div>
            <div className="col-span-2">Ngày sinh</div>
            <div className="col-span-1">Giới tính</div>
          </div>
          <div className="grid col-span-5 grid-cols-6">
            <div className="col-span-2">Email</div>
            <div className="col-span-1">Số điện thoại</div>
            <div className="col-span-2">Địa chỉ</div>
            <div className="col-span-1">Chức vụ</div>
          </div>
          <div className="grid col-span-2 ">
            <div className="col-span-1">Hành động</div>
          </div>
        </div>
      </div>
    );
  };
  export default EmployeeManagement;
  