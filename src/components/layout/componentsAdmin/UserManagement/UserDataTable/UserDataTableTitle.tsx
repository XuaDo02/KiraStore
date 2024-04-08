const UserDataTableTitle = () => {
    return (
      <div className="flex relative h-35px ">
        <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-1">
          <div className="grid col-span-4 grid-cols-8">
            <div className="col-span-1">Mã</div>
            <div className="col-span-1">Tỷ lệ</div>
            <div className="col-span-3">SL CK hưởng quyền</div>
            <div className="col-span-3">SL quyền sở hữu</div>
          </div>
          <div className="grid col-span-4 grid-cols-6">
            <div className="col-span-1">Giá</div>
            <div className="col-span-1">Hạn chốt</div>
            <div className="col-span-2">Hạn đăng ký</div>
            <div className="col-span-2">SL CK còn được mua</div>
          </div>
          <div className="grid col-span-4 grid-cols-4">
            <div className="col-span-1">SL CK đã mua</div>
            <div className="col-span-1">Số tiền phải nộp</div>
            <div className="col-span-1">Số tiền đã nộp</div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserDataTableTitle;
  