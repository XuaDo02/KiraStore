export default function FooterAdmin() {
    return (
      <>
        <div className="flex justify-between">
          <div className="flex flex-item">
            <div>
              <button className="w-24 h-8 text-sm bg-customYellow rounded-md text-customBrown font-semibold">
                Đặt lệnh
              </button>
            </div>
            <div className="ml-2 flex items-center">
              <button className="bg-customDarkGray w-60 h-8 rounded-md text-left pl-3 text-customGrayDark text-sm flex items-center">
                <p className="flex-grow">Tất cả</p>
                <img
                  src="/images/imageMenu/arrow-down.png"
                  alt=""
                  className="pr-3"
                />
              </button>
            </div>
          </div>
          <div className="flex items-center text-zinc-400">
            <div className=" bg-customDarkGray h-8 w-24 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img
                  className="px-2 mt-1"
                  src="/images/imgFooter/empty-wallet.png"
                />
                Tài sản
              </button>
            </div>
            <div className="ml-2 mr-2 bg-customDarkGray h-8 w-28 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img
                  className="px-2 mt-1"
                  src="/images/imgFooter/receipt-edit.png"
                />
                Danh mục
              </button>
            </div>
            <div className=" bg-customDarkGray h-8 w-24 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img className="px-2 mt-1" src="/images/imgFooter/note-2.png" />
                Sổ lệnh
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  