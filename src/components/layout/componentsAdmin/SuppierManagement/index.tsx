export default function SuppilerManagement() {
    return(
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách nguồn cung cấp</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-7 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã nhà cung cấp</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên nhà cung cấp</div>
                    </div>
                    <div className="col-span-1">
                        <div>Địa chỉ </div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Số điện thoại</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Email</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Ngày bắt đầu hợp đồng</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Ngày kết thúc hợp đồng</div>
                    </div>
                </div>
            </div>
        </>
    )
}