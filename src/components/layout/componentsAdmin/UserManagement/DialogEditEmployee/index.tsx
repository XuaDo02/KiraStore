export default function DialogEditEmployee() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
                <>
                    <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
                        <span className="text-lg font-sans font-semibold tracking-tight text-white">Sửa thông tin nhân viên</span>
                        <button className="flex ml-auto"><img src="/imgEmployee/close.png" className="w-6 h-6" /></button>
                    </div>

                    <div className="mt-5">
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Mã nhân viên</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Họ và tên</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Ngày sinh</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Giới tính</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Email</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Số điện thoại</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Địa chỉ</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                        <div className="mb-2 flex items-center text-zinc-400">
                            <label className="block text-sm font-medium w-1/2 text-left px-5">Chức vụ</label>
                            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">{}</span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <hr className="border-t border-neutral-600 w-full"/>
                    </div>

                    <div className="flex justify-center my-5 h-18">
                        <button className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md">
                            Huỷ
                        </button>
                        <button className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray">Sửa thông tin</button>
                    </div>
                </>
            </div>
        </div>
    )
}